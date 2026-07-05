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

- [ ] Au moins une image inline par projet existant, placée dans une section pertinente du texte — clair-obscur ✅ (schéma fonctionnel + schéma AWS), mlops-lending-club ✅ (diagramme d'architecture), deep-rl en attente d'asset
- [x] Chaque image inline a un texte alternatif descriptif, pour les projets faits
- [x] Les images s'affichent correctement optimisées (build Astro) sur les pages détail fr et en, pour les projets faits
- [x] `npm run build` réussit sans erreur

## Comments

- 2026-07-05 : clair-obscur a reçu un schéma fonctionnel (après l'overview)
  et le schéma d'architecture AWS (dans la section pipeline cloud, à la
  place de l'image placeholder de la Slice 9). mlops-lending-club a reçu son
  diagramme d'architecture (après la section conteneurisation). deep-rl
  reste sans image inline — Théo n'a pas encore de visuel pour ce projet.

## Blocked by

- Slice 9 — Infrastructure images de projet
