---
title: "RAG Assurance"
description: "Assistant RAG en français sur le droit public des assurances, qui explique et cite l'article de loi applicable"
stack: ["Python", "LangChain", "BGE-M3", "Qdrant", "Mistral", "OpenRouter", "Langfuse", "FastAPI", "HTMX", "Docker"]
repo: "https://github.com/Zameloth/rag_assurances"
demo: "https://rag.theo-eloy.fr/"
date: 2026-10-13
---

**Contexte :** Projet personnel

## Overview
RAG Assurance est un assistant conversationnel en français qui répond aux questions d'un consommateur sur ses assurances (auto, habitation, vie…) à partir du droit public : les fiches service-public.fr et le Code des assurances en vigueur. Chaque réponse est en deux parties : une explication en français courant, puis le *fondement juridique* citant le ou les articles sur lesquels elle repose.

## Le problème adressé
Les questions arrivent en langage courant (« mon assureur peut-il résilier mon contrat après un sinistre ? ») alors que la réponse juridique est rédigée en langage légal, un registre sur lequel les meilleurs modèles d'embedding ouverts restent faibles. Il faut en plus tracer une ligne claire : expliquer la règle applicable à une situation est autorisé, mais recommander un produit ou une action relève du conseil en assurance, une activité réglementée.

## Ce qui a été construit

### Corpus et ingestion
Constitution d'un corpus reproductible de 2 375 articles en vigueur du Code des assurances et 87 fiches service-public.fr, sélectionnées par une règle (le `<dc:source>` de la fiche pointe vers le Code) plutôt qu'une liste manuelle. Chunking structurel qui préserve les branches « cas » des fiches, embeddings dense + sparse en une passe avec BGE-M3, et indexation de 3 650 points dans Qdrant derrière des alias versionnés.

### Retrieval hybride
Recherche sur deux index (fiches et articles), avec un court-circuit pour les requêtes qui citent directement un article (`L113-2`), une expansion qui suit les liens éditoriaux DILA entre fiches et sections du Code, un reranker cross-encoder et un assemblage par quotas avec seuil de pertinence, chaque étape étant ablatable.

### Évaluation pré-enregistrée
Golden set annoté à la main et protocole en « échelle » : chaque barreau change une seule variable par rapport au précédent, avec une métrique primaire et une règle d'adoption (test de signe sur les paires discordantes, garde-fous sur les autres métriques) committées *avant* toute exécution, pour écarter le choix de métrique a posteriori. Juges LLM calibrés et traces dans Langfuse.

### Génération contrôlée
Mistral Large via OpenRouter, avec routage épinglé et sortie JSON stricte : une union typée `réponse | refus` qui sépare l'explication des citations. La validité des citations se vérifie mécaniquement (tout article cité doit figurer dans le contexte récupéré), et les refus (recommandation de produit, conseil d'action, hors corpus) sont distingués d'un simple échec de recherche. Un condenseur reformule les questions en conversation multi-tours.

### Application et déploiement
Interface FastAPI + HTMX en streaming, auto-hébergée derrière Traefik et un Cloudflare Tunnel, mise en veille par Sablier quand personne ne l'utilise. L'index est publié comme dump Parquet sur une GitHub Release, vérifié par sha256 et basculé atomiquement par alias au déploiement, ce qui permet de revenir en arrière en un seul basculement.

## Stack technique

- **Embeddings & reranking :** BGE-M3 (dense + sparse), bge-reranker-v2-m3
- **Base vectorielle :** Qdrant
- **LLM :** Mistral Large 3 via OpenRouter, LangChain
- **Évaluation & observabilité :** Langfuse, golden set annoté, LLM-as-judge
- **Application :** FastAPI, HTMX
- **Déploiement :** Docker Compose, Traefik, Sablier, Cloudflare Tunnel
- **Qualité :** uv, ruff, mypy, pytest (couverture > 90 %), 27 ADR

## Compétences mobilisées
Conception de systèmes RAG, recherche hybride dense/sparse, NLP juridique en français, méthodologie d'évaluation rigoureuse (pré-enregistrement, tests statistiques, ablations), génération structurée et garde-fous de citation, MLOps et reproductibilité des index, auto-hébergement, documentation des décisions d'architecture.

## Résultat
Un pipeline complet, du corpus à l'application déployée, dont chaque choix est mesuré. L'échelle d'évaluation a produit des résultats négatifs francs et documentés : l'expansion par liens éditoriaux et le reranker améliorent nettement leur métrique cible mais dégradent les garde-fous côté articles. C'est donc la configuration la plus simple (BGE-M3 dense seul) qui est servie en production, une décision tracée dans les ADR plutôt qu'une intuition.
