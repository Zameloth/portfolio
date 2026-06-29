# Domain Docs

How the engineering skills should consume this repo's domain documentation.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root — domain glossary (Project, Skill, Hero, Contact)
- **`docs/adr/`** — read ADRs that touch the area you're about to work in

If either doesn't exist, proceed silently.

## File structure

Single-context repo:

```
/
├── CONTEXT.md
├── docs/adr/
│   └── 0001-image-registry-deploy.md
└── src/
```

## Use the glossary's vocabulary

When your output names a domain concept, use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

If a concept you need isn't in the glossary, note it for `/grill-with-docs` rather than inventing new language.

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly:

> _Contradicts ADR-0001 (image-registry-deploy) — but worth reopening because…_
