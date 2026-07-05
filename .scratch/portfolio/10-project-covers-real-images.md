# Slice 10 — Remplacer les covers placeholder par de vrais visuels

Type: HITL
Triage: ready-for-human

## What to build

Remplacer les covers placeholder générés en Slice 9 par de vraies images de
couverture pour les 3 projets existants (`clair-obscur`, `deep-rl`,
`mlops-lending-club`), avec un `coverAlt` descriptif précis.

Théo choisit/fournit une image par projet (screenshot d'app, diagramme
d'architecture, capture de résultat visuel...) — décision de contenu qui
nécessite son jugement, pas automatisable.

- Remplacer le fichier placeholder dans `src/content/projects/images/<slug>/`
  par le fichier réel fourni.
- Mettre à jour `coverAlt` dans les frontmatters fr et en avec une
  description visuelle précise (pas une reprise de `description`).

## Acceptance criteria

- [ ] Les 3 projets ont un cover réel (non généré par script) dans `images/<slug>/` — clair-obscur ✅, mlops-lending-club ✅, deep-rl en attente d'asset
- [x] `coverAlt` est mis à jour avec une description visuelle précise par projet fait
- [x] Rendu vérifié sur home (carte) et page détail, fr et en, pour les projets faits
- [x] `npm run build` réussit sans erreur

## Comments

- 2026-07-05 : clair-obscur et mlops-lending-club ont reçu leurs vrais covers.
  deep-rl reste sur son placeholder — Théo n'a pas encore de visuel pour ce
  projet. Triage laissé en `ready-for-human` jusqu'à ce que l'asset arrive.

## Blocked by

- Slice 9 — Infrastructure images de projet
