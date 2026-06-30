---
title: "Feature Store Temps Réel"
description: "Feature store à faible latence servant des features online et offline pour les modèles ML, avec une API unifiée pour l'entraînement et l'inférence."
stack: ["Python", "Redis", "Apache Spark", "Kafka", "Terraform"]
repo: "https://github.com/theoeloy/feature-store"
date: 2025-02-10
---

## Vue d'ensemble

Un feature store qui comble le fossé entre les features calculées en batch pour l'entraînement et la récupération sub-milliseconde nécessaire à l'inférence — en utilisant les mêmes définitions de features dans les deux cas.

## Le problème de skew entraînement/serving

La plupart des bugs ML en production proviennent du training/serving skew : des features calculées différemment à l'entraînement et à l'inférence. Ce store utilise une définition unique de feature qui pilote à la fois les jobs batch Spark et la couche de serving online, éliminant la divergence.

## Design

- **Registre de features** : définitions YAML versionnées dans git ; un CLI génère à la fois les jobs Spark et les schémas de serving
- **Store offline** : Spark calcule des snapshots de features point-in-time corrects écrits en Parquet pour la génération de datasets d'entraînement
- **Store online** : Redis contient les dernières valeurs de features par entité, mis à jour par un consommateur Kafka au fil des nouveaux événements
- **SDK unifié** : `feature_store.get(entity_id, feature_names)` fonctionne identiquement dans les pipelines d'entraînement et les model servers

## Résultats

- Skew entraînement/serving éliminé sur 3 modèles en production
- Récupération de features p95 sous 2ms depuis Redis
- Provisionné avec Terraform — nouveaux environnements opérationnels en moins de 10 minutes
