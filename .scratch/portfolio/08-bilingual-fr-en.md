# Slice 8 — Site bilingue FR / EN

Type: AFK
Triage: ready-for-agent

## What to build

Rendre le site entièrement bilingue (français par défaut, anglais à `/en/`).

- Configurer l'i18n Astro (`defaultLocale: 'fr'`, `prefixDefaultLocale: false`)
- Extraire toutes les chaînes UI dans `src/i18n/translations.ts` (clés par locale)
- Réorganiser les Content Collections : `src/content/projects/fr/` et `src/content/projects/en/`
- Créer les versions françaises des 3 projets existants
- Mettre à jour `Layout.astro` : attribut `lang`, balises `hreflang`, sélecteur de langue contextuel dans le header
- Mettre à jour `ProjectCard.astro` : accepte `href` et `readMoreLabel` au lieu de `slug`
- Créer `src/pages/en/index.astro` et `src/pages/en/projects/[slug].astro`
- Mettre à jour les pages FR existantes pour filtrer par locale

## Key decisions (see ADR-0002)

- FR est la langue canonique (langue par défaut, Théo écrit en FR en premier)
- Slugs identiques entre locales → le sélecteur de langue reste sur la page courante
- Traduction manuelle (pas de pipeline automatisé)
- Skills categories nommées via `translations.skillCategoryNames[category.key]`

## Acceptance criteria

- [ ] `/` affiche le site en français
- [ ] `/en/` affiche le site en anglais
- [ ] `/projects/[slug]` et `/en/projects/[slug]` affichent le bon contenu dans la bonne langue
- [ ] Le sélecteur de langue dans le header bascule vers la page équivalente
- [ ] Les balises `hreflang` sont présentes sur toutes les pages
- [ ] `npm run build` réussit sans erreur
- [ ] Chaque nouveau projet nécessite deux fichiers markdown (fr/ et en/)

## Blocked by

- Slice 7 — Visual refresh
