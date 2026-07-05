# Slice 11 — Images inline dans le corps des études de cas

Type: HITL
Triage: ready-for-human

## What to build

Ajouter une ou plusieurs images illustratives dans le corps Markdown de
chaque étude de cas projet (dashboard, diagramme d'architecture, résultat
visuel), en plus du cover.

Théo sélectionne les captures/diagrammes à insérer et où les placer dans le
texte — décision de contenu, pas automatisable.

- Ajouter les fichiers dans `src/content/projects/images/<slug>/` (voir
  convention Slice 9 / ADR-0003).
- Insérer via syntaxe Markdown standard `![alt](../images/<slug>/nom.png)`
  aux endroits pertinents du corps, dans les fichiers fr ET en.
- Chaque image a un `alt` descriptif inline (pas de champ frontmatter dédié
  — c'est la syntaxe Markdown qui porte l'alt ici).

## Acceptance criteria

- [ ] Au moins une image inline par projet existant, placée dans une section pertinente du texte
- [ ] Chaque image inline a un texte alternatif descriptif
- [ ] Les images s'affichent correctement optimisées (build Astro) sur les pages détail fr et en
- [ ] `npm run build` réussit sans erreur

## Blocked by

- Slice 9 — Infrastructure images de projet
