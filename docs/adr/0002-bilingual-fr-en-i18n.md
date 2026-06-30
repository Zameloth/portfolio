# 2. Bilingual site — French default, English at /en/

Date: 2026-06-30

## Status

Accepted

## Context

The portfolio targets French companies, including both French-only organisations
(French-speaking HR, French-first culture) and international scale-ups based in
France that post job offers in English. A monolingual site would either exclude
the French-only segment (English-only) or signal a purely local profile
(French-only). Partial translation (UI shell only, project bodies left in
English) was considered but ruled out in favour of full bilingualism to avoid a
mixed-language reading experience.

## Decision

Serve the site in **French (default) and English**, with the following structure:

- **Default locale** — French at `/` (e.g. `/`, `/projects/[slug]`).
- **English locale** — at `/en/` prefix (e.g. `/en/`, `/en/projects/[slug]`).
- **Content Collections** — each Project has two markdown files with identical
  slugs, one per locale folder (`src/content/projects/fr/` and
  `src/content/projects/en/`). French is the canonical language; the English
  version is produced manually by the author.
- **UI strings** — extracted into a translation map keyed by locale; components
  receive the locale from `Astro.currentLocale` and look up their strings.
- **Language switcher** — contextual: appears in the header and points to the
  equivalent page in the other locale using the same slug, so a visitor on
  `/projects/llm-inference-gateway` can switch directly to
  `/en/projects/llm-inference-gateway` without returning to the home page.
- **Astro i18n config** — `defaultLocale: 'fr'`, `locales: ['fr', 'en']`,
  `routing: { prefixDefaultLocale: false }`.

## Consequences

- Every new Project requires two markdown files. The author writes both manually
  (no automated translation pipeline).
- Slugs must be kept identical across locales — a slug rename requires updating
  both files and any existing inbound links.
- `hreflang` alternate tags must be emitted on every page for SEO correctness.
- Reversing this (dropping a locale) would break all `/en/` URLs and require a
  redirect strategy — non-trivial once indexed.
- The Nginx image (see ADR-0001) requires no changes: locale routing is handled
  entirely at the Astro build level, producing flat static files per locale.
