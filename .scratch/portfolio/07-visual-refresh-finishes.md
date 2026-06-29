# Slice 7 — Visual refresh: finishes

Type: AFK
Triage: ready-for-agent

## What to build

The cosmetic layer on top of the refreshed foundations (slice 6). Adds motion
and the terminal-style signature, and polishes the existing components.

- **Scroll-reveal.** Sections fade/translate in as they enter the viewport, via an
  IntersectionObserver. Keep it discreet — no terminal-cursor or typing gimmick.
- **Section header motif.** Each section opens with a recurring `//` amber prefix
  in uppercase with wide tracking (`// projects`, `// skills`, `// contact`).
- **Component polish.** Refine project cards and skill chips — hover states,
  borders, and spacing — consistent with the amber-as-touch accent.

## Acceptance criteria

- [x] Sections reveal with a subtle fade/translate on scroll into view
- [x] Reveal uses IntersectionObserver; content remains visible if JS is disabled
- [x] Every section header carries the `//` amber uppercase prefix motif
- [x] Project cards and skill chips have refined hover/border/spacing treatment
- [x] No terminal-cursor or typing effects are introduced
- [x] Site builds cleanly and remains responsive on desktop and mobile

## Blocked by

- Slice 6 — Visual refresh: foundations
