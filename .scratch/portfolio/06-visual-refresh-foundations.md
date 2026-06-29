# Slice 6 — Visual refresh: foundations

Type: AFK
Triage: ready-for-agent

## What to build

The foundations pass of the visual refresh. Goal is to refine the existing
"terminal dev" identity (dark + monospace) — not a redesign — and fix a real
styling bug along the way.

- **Fix the broken palette.** `tailwind.config.mjs` currently sets `theme.colors`
  directly, which replaces Tailwind's default palette. As a result the `zinc-*`
  and `emerald-*` classes used in the Skills and Contact sections emit no CSS and
  render unstyled. Restructure so the needed colors exist (e.g. move custom
  colors under `extend`, or keep the default palette).
- **Consolidate on `slate`.** Remove all `zinc-*` usages across the site; there
  should be a single gray scale.
- **Introduce the `amber` accent as tokens.** Amber is used as a *touch* — text,
  borders, links, hover states — not as large filled buttons. Filled buttons stay
  slate.
- **Background treatment.** Apply a subtle blueprint grid everywhere plus a
  radial amber glow at the Hero only. 100% CSS, no JS.

## Acceptance criteria

- [x] Skills and Contact sections render with correct colors (no unstyled elements)
- [x] No `zinc-*` classes remain anywhere in the codebase
- [x] `amber` accent appears on text/borders/links/hovers; no large filled amber buttons
- [x] A subtle grid background is visible site-wide; an amber radial glow is present at the Hero only
- [x] Background effects are pure CSS (no JavaScript added)
- [x] Site builds cleanly and the existing dark/monospace identity is preserved

## Blocked by

- None - can start immediately
