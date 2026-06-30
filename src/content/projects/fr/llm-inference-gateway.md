---
title: "Passerelle d'Inférence LLM"
description: "Passerelle d'inférence haute performance pour grands modèles de langage, avec batching de requêtes, cache sémantique et routage multi-fournisseur."
stack: ["Python", "FastAPI", "Redis", "Docker", "Prometheus"]
repo: "https://github.com/theoeloy/llm-inference-gateway"
demo: "https://gateway.theo-eloy.fr"
date: 2024-11-15
---

## Vue d'ensemble

Un reverse-proxy et couche d'orchestration pour les APIs LLM qui gère le batching, le cache sémantique, le rate limiting et le basculement entre fournisseurs dans un service léger.

## Problème

Les appels directs aux fournisseurs LLM sont coûteux et lents à grande échelle. Les applications envoyant des milliers de prompts similaires par heure gaspillent des tokens sur du calcul redondant, et la panne d'un seul fournisseur peut mettre hors service l'ensemble du produit.

## Solution

La passerelle s'intercale entre l'application et les fournisseurs en amont et fournit :

- **Cache sémantique** : recherche de similarité par embeddings sur les réponses récentes — les hits de cache retournent en moins de 5ms
- **Batching de requêtes** : regroupe les requêtes concurrentes vers le même modèle pour un débit optimal
- **Routage entre fournisseurs** : chaîne primaire/fallback entre OpenAI, Anthropic et des modèles auto-hébergés
- **Observabilité** : latence par modèle, consommation de tokens et taux de hit cache exposés en métriques Prometheus

## Résultats

- 40% de réduction des coûts API grâce aux hits de cache
- Latence p99 sous 200ms pour les réponses en cache
- Zéro downtime lors de deux incidents fournisseur sur 3 mois
