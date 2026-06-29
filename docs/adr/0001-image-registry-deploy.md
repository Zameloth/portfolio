# 1. Build a versioned image and deploy it through a registry

Date: 2026-06-29

## Status

Accepted

## Context

The portfolio started as a plain static page served by stock `nginx:alpine`,
with `./site` bind-mounted read-only into the container. Deployment was a single
SSH step on the VPS: `git pull` → `docker compose pull` → `up -d`. There was no
build step anywhere.

We are introducing **Astro**, which compiles `src/` into a `dist/` folder. That
build has to run somewhere, and the output has to reach Nginx on the VPS. The
existing pipeline has no place for it. We considered four options:

1. **Build-on-VPS** — `git pull` the source, then `npm ci && npm run build` on the
   server. Requires Node on the VPS, makes the server heavier and the deploy
   slower, and couples deploys to the server's toolchain.
2. **Commit `dist/`** — build locally/CI and commit the generated output. Keeps
   the current `git pull` deploy unchanged, but pollutes git history with build
   artifacts and invites merge noise.
3. **Build in CI, rsync `dist/`** — CI builds, then copies `dist/` into `./site`
   on the VPS. No registry, but the deploy is no longer a uniform `compose pull`
   and we keep a bind-mount whose contents live outside the image.
4. **Multi-stage image + registry** — a multi-stage Dockerfile builds with Node
   and copies `dist/` into an `nginx:alpine` runtime image (with a custom
   `nginx.conf`). CI pushes the image to GHCR; the VPS pulls it.

## Decision

Use a **multi-stage Docker image published to GHCR**.

- Dockerfile: `node` build stage (`npm ci && npm run build`) → `nginx:alpine`
  runtime stage that copies `dist/` and a custom `nginx.conf`.
- CI builds and pushes to GHCR on every push to `main`, tagged both `:latest`
  and `:sha-<gitsha>`.
- The GHCR package is **public**, so the VPS pulls without any registry login —
  no secret to store or rotate on the server. This is acceptable because the
  image contains only public static HTML/CSS/JS.
- `docker-compose.yml` references `image: ghcr.io/<owner>/portfolio:latest`
  instead of bind-mounting `./site`.
- Deploy stays SSH-based and reuses the existing shape: `git pull` (only to
  refresh the compose file), `docker compose pull`, `up -d`.

## Consequences

- The VPS no longer needs Node, nor the application source — only the compose
  file. The build environment is fully owned by CI.
- The `:sha-<gitsha>` tag makes every deploy traceable and gives a precise
  rollback target (repoint compose at a known SHA tag).
- The Nginx configuration (clean URLs, themed 404, gzip, asset caching) is baked
  into the image and versioned with the app, rather than living loose on the VPS.
- New cost: CI now builds and pushes an image (slower than the old no-build
  deploy), and the GHCR package is publicly listed.
- Reversing this means undoing the Dockerfile, the CI build/push, and the compose
  image reference — non-trivial, hence this record.
