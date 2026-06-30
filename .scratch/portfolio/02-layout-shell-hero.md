# Slice 2 — Base layout shell + Hero section (+ themed 404)

Type: AFK
Triage: ready-for-agent

## What to build

The shared visual foundation plus the first real, visible section of the site.

- A base layout component: `<head>` (meta, title, favicon), the dark/technical
  palette and mono typography applied globally, and a shared footer. All pages
  render through this layout.
- The **Hero** section on the home page: name (Théo Eloy), an MLOps / AI
  Engineer role headline, and primary call(s) to action (e.g. anchor to projects
  / contact links).
- Re-theme the placeholder `404.astro` from Slice 1 so it renders through the
  shared layout and matches the dark theme.

## Acceptance criteria

- [ ] All pages render through a single shared base layout
- [ ] The home page shows a styled Hero with name, MLOps/AI headline, and CTA(s)
- [ ] The dark palette and mono font are applied consistently site-wide
- [ ] A non-existent path returns a themed 404 page using the shared layout
- [ ] `npm run build` succeeds and the result is verifiable via `npm run dev`

## Blocked by

- Slice 1 — Walking skeleton (Astro/Tailwind scaffold + nginx 404 wiring)
