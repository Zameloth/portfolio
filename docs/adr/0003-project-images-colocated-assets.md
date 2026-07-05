# 3. Project images as co-located src/ assets with Astro's image() pipeline

Date: 2026-07-05

## Status

Accepted

## Context

Projects need a cover image (shown on the home page card and the detail page)
and inline images within the Markdown body (screenshots, diagrams). The repo
already has a simple precedent for static assets: files like `og-image.png`
and the CV PDFs live in `public/` and are referenced by plain string paths,
with no processing.

Two options were considered:

- **`public/` + string paths** — consistent with existing assets, zero
  configuration, but no resizing/format conversion/lazy-loading. Cover images
  would ship at whatever resolution the source file has.
- **Co-located under `src/` + Astro's `image()` schema helper and `<Image />`
  component** — Astro optimizes these at build time (responsive sizes, WebP,
  lazy-loading) for both frontmatter-declared images and local relative-path
  images referenced directly in Markdown bodies. Requires the schema to use
  the `image()` helper and a directory convention.

Given this is a portfolio site where cover images are a primary visual/first
impression and Lighthouse/LCP performance matters, optimization was judged
worth the extra convention.

## Decision

- Project images live in `src/content/projects/images/<slug>/`, one directory
  per project slug, colocated as siblings of the `en/` and `fr/` locale
  folders (not nested inside them), so both locale Markdown files reference
  the same physical files via an identical relative path
  (`../images/<slug>/...`).
- The `projects` collection schema gains `cover: image().optional()` and
  `coverAlt: z.string().optional()` (see updated `src/content/config.ts`),
  using Astro's `image()` helper so covers get automatic optimization.
- Inline images inside the Markdown body use standard `![alt](../images/<slug>/foo.png)`
  syntax; Astro's Markdown image pipeline optimizes these automatically
  without extra schema work.
- `public/` remains reserved for assets that must be served verbatim at a
  fixed URL (favicons, CV PDFs, OG image) — not for content imagery.

## Consequences

- Every project image is declared twice (once per locale's frontmatter/body
  reference), even though the underlying file is shared — a minor
  duplication accepted in exchange for keeping the two locale Markdown files
  fully independent (per ADR-0002).
- Moving a project's images later means updating relative paths in two
  Markdown files, not one.
- Switching a project image from `public/` conventions (e.g. copy-pasting a
  path used elsewhere in the codebase) will silently produce an unoptimized
  `<img>` instead of an optimized one — this convention must be followed
  deliberately, it isn't enforced by the type system.
- `cover` and `coverAlt` are optional: projects without a cover render
  without a card/detail image block (no placeholder), so this ships without
  requiring immediate backfill of the 3 existing projects.
