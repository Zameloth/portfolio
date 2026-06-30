---
title: "Orchestrateur de Pipelines ML"
description: "Plateforme MLOps end-to-end pour l'entraînement, l'évaluation et le déploiement de modèles avec réentraînement automatisé et suivi d'expériences."
stack: ["Python", "Kubeflow", "MLflow", "Kubernetes", "PostgreSQL"]
repo: "https://github.com/theoeloy/ml-pipeline-orchestrator"
date: 2024-09-01
---

## Vue d'ensemble

Une plateforme MLOps de niveau production qui automatise le cycle de vie complet des modèles de machine learning — de l'ingestion des données et l'ingénierie des features jusqu'à l'entraînement, l'évaluation et le déploiement.

## Architecture

Le système repose sur Kubeflow Pipelines pour l'orchestration, chaque étape du pipeline s'exécutant dans un conteneur isolé. MLflow gère le suivi des expériences et le registre des modèles. Une base PostgreSQL stocke les métadonnées des runs et l'historique des déploiements.

Décisions d'architecture clés :
- **Artefacts immuables** : chaque run produit des artefacts versionnés et adressés par contenu, stockés dans l'object storage
- **Réentraînement automatisé** : la détection de drift de données déclenche de nouveaux runs sans intervention manuelle
- **Déploiements bleu/vert** : les mises à jour de modèles se déroulent sans interruption via le traffic splitting Kubernetes

## Résultats

- Cycle de déploiement réduit de 3 jours à moins de 2 heures
- Expériences reproductibles entre membres de l'équipe via un registre MLflow partagé
- 99,9% de taux de succès des pipelines sur 6 mois en production
