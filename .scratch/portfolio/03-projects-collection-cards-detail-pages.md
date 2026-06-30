# Slice 3 — Projects: Content Collection + cards + detail pages

Type: AFK
Triage: ready-for-agent

## What to build

End-to-end Project showcase. A Project is a single Markdown file whose body
becomes its own dedicated detail page; the home page lists Projects as cards
linking to those pages (see CONTEXT.md → Project).

- Define a Content Collection `projects` with a Zod schema: title, tech stack,
  external links (repo / demo), description/summary.
- Seed 1–2 example Project Markdown entries.
- Render Projects as cards in a projects section on the home page, each linking
  to its detail page.
- A dynamic route `src/pages/projects/[slug].astro` that statically generates
  one detail page per Project from the Markdown body.
- This is the first slice with multi-page routing, so it validates the Slice-1
  `try_files` clean-URL behavior in the served image (a link without a trailing
  slash must resolve, not 404).

## Acceptance criteria

- [ ] A `projects` collection with a Zod-validated schema; a build fails on a malformed entry
- [ ] The home page renders one card per Project entry with title, stack, and links
- [ ] Each Project has a statically generated detail page from its Markdown body
- [ ] Clicking a card opens the correct detail page
- [ ] In the built/served image, a detail-page URL without a trailing slash resolves correctly
- [ ] Adding a new Project = adding one Markdown file, no code changes

## Blocked by

- Slice 2 — Base layout shell + Hero
