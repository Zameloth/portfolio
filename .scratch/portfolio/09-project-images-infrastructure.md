# Slice 9 — Infrastructure images de projet (cover + inline)

Type: AFK
Triage: ready-for-agent

## What to build

Ajouter la capacité d'afficher une image de couverture par projet (sur la
carte home et la page détail) et de supporter des images inline dans le
corps Markdown des études de cas, sans dépendre de vraies captures d'écran
pour valider le pipeline.

- Étendre le schema Zod de la collection `projects` (`src/content/config.ts`) :
  `cover: image().optional()`, `coverAlt: z.string().optional()`, en utilisant
  le helper `image()` d'Astro (voir ADR-0003) pour l'optimisation automatique.
- Convention de dossier : `src/content/projects/images/<slug>/`, colocalisé en
  sibling de `en/` et `fr/` (pas nested dedans), référencé depuis les deux
  locales via un chemin relatif identique (`../images/<slug>/...`).
- `ProjectCard.astro` : bandeau image 16:9 en haut de la carte quand `cover`
  est présent, rien sinon (pas de placeholder visuel côté rendu).
- `[slug].astro` (fr) et `en/projects/[slug].astro` (en) : image pleine
  largeur sous le header (titre/description/tags/liens), avant le `hr` et le
  contenu Markdown, quand `cover` est présent.
- Pour valider le pipeline de bout en bout (cover ET images inline Markdown
  locales optimisées par Astro) sans dépendre de vraies captures d'écran :
  génère des covers placeholder programmatiques pour les 3 projets existants
  (`clair-obscur`, `deep-rl`, `mlops-lending-club`), dans le style du script
  déjà présent `scripts/generate-og-image.mjs` (génération via canvas/sharp,
  pas d'assets binaires committés à la main).
- Renseigner `coverAlt` pour ces 3 placeholders (texte générique du type
  "Visuel de couverture temporaire — <titre du projet>", à remplacer en
  Slice 2).

## Key decisions (see ADR-0003, CONTEXT.md § Cover image)

- Images de projet dans `src/` (pas `public/`) pour bénéficier de
  l'optimisation Astro (`image()` + pipeline Markdown local).
- `cover`/`coverAlt` optionnels : un projet sans cover s'affiche sans bloc
  image, pas de placeholder de rendu.
- Image partagée entre fr/en (même fichier physique, référencé deux fois).
- `coverAlt` est un champ dédié, distinct de `description`.

## Acceptance criteria

- [x] Le schema `projects` accepte `cover` et `coverAlt` optionnels sans casser les entrées existantes
- [x] `src/content/projects/images/<slug>/` existe pour les 3 projets, avec un cover placeholder généré par script
- [x] La carte home affiche le cover placeholder en 16:9 pour les 3 projets (fr et en)
- [x] La page détail affiche le cover placeholder sous le header, avant le contenu, pour les 3 projets (fr et en)
- [x] Un projet fictif sans `cover` renseigné s'affiche sans bloc image, ni sur la carte ni sur la page détail (pas de régression)
- [x] Une image inline de test référencée en Markdown local (`![alt](../images/<slug>/...)`) est bien optimisée par Astro (vérifier le HTML généré / build output)
- [x] `npm run build` réussit sans erreur

## Blocked by

- None - can start immediately
