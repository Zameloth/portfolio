---
title: "MLOps — Lending Club"
description: "Pipeline MLOps complet de prédiction de défaut de paiement sur des prêts entre particuliers"
stack: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "Optuna", "MLflow", "FastAPI", "Airflow", "Docker", "Streamlit"]
repo: "https://github.com/Zameloth/orchestration_ml"
date: 2026-06-18
---

**Contexte :** Projet fil rouge ESGI

## Overview
MLOps Lending Club est un pipeline complet de machine learning de bout en bout, destiné à prédire automatiquement le risque de défaut de paiement sur des prêts entre particuliers, depuis l'ingestion des données brutes jusqu'au déploiement d'une API de prédiction en production.

## Le problème adressé
LendingClub est une plateforme américaine de prêt entre particuliers (peer-to-peer lending). Sur les données 2007-2018, environ 20% des prêts se terminent en défaut de paiement (charged off), représentant des pertes significatives pour les investisseurs. L'objectif est de classifier automatiquement les dossiers de prêt à risque à partir d'environ 150 variables (score FICO, DTI, ancienneté professionnelle, historique de crédit...), via une tâche de classification binaire.

## Ce qui a été construit

### Pipeline de données et feature engineering
Mise en place d'un pipeline de nettoyage et de filtrage par année (2007-2012 pour l'entraînement, 2014 pour l'évaluation), avec un pipeline scikit-learn combinant encodage ordinal et normalisation des variables.

### Entraînement et comparaison de modèles
Développement d'une chaîne d'entraînement comparant quatre modèles (LightGBM, XGBoost, Random Forest, Logistic Regression) en validation croisée 5-fold, complétée par une optimisation des hyperparamètres via Optuna. LightGBM s'est révélé le plus performant avec un AUC-ROC de 0.689.

### Tracking et registry de modèles
Intégration de MLflow pour le suivi des expérimentations, le logging des métriques et la promotion automatique du modèle champion vers un registry consommé par l'API.

### Orchestration et API de prédiction
Orchestration des étapes du pipeline (téléchargement des données, entraînement, évaluation) via des DAGs Apache Airflow, et exposition du modèle champion via une API FastAPI (`/predict`, `/predictions`, `/health`).

### Frontend de visualisation
Conception d'une application Streamlit permettant de visualiser les prédictions et les performances du modèle.

### Conteneurisation et déploiement
Architecture entièrement conteneurisée avec Docker Compose (profils data/train/airflow), packaging via uv, et automatisation du déploiement via Makefile.

## Stack technique

- **ML :** scikit-learn, LightGBM, XGBoost, Optuna
- **Tracking :** MLflow
- **API :** FastAPI, Uvicorn
- **Frontend :** Streamlit, Plotly
- **Orchestration :** Apache Airflow (LocalExecutor + PostgreSQL)
- **Packaging :** uv
- **Conteneurisation :** Docker Compose
- **Qualité :** ruff, mypy, pytest

## Compétences mobilisées
Machine learning et modélisation prédictive, feature engineering, MLOps et tracking d'expérimentations, orchestration de pipelines de données, conception et exposition d'API, conteneurisation et déploiement, qualité logicielle (lint, typage, tests).

## Résultat
LightGBM s'est imposé comme le modèle le plus performant avec un AUC-ROC de 0.689, devant la régression logistique (0.684), XGBoost (0.671) et Random Forest (0.666), validé via une validation croisée 5-fold sur les données de prêt.
