---
title: "MLOps — Lending Club"
description: "End-to-end MLOps pipeline for peer-to-peer loan default prediction"
stack: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "Optuna", "MLflow", "FastAPI", "Airflow", "Docker", "Streamlit"]
repo: "https://github.com/Zameloth/orchestration_ml"
date: 2026-06-18
---

**Context:** Built in 1 week as part of the MLOps course at ESGI

## Overview
MLOps Lending Club is a complete end-to-end machine learning pipeline designed to automatically predict loan default risk for peer-to-peer loans, from raw data ingestion to the deployment of a production-ready prediction API.

## The problem we addressed
LendingClub is a US-based peer-to-peer lending platform. On data from 2007 to 2018, roughly 20% of loans end up charged off, representing significant losses for investors. The goal is to automatically classify risky loan applications based on around 150 variables (FICO score, DTI, employment length, credit history, etc.), framed as a binary classification task.

## What we built

### Data pipeline & feature engineering
Built a cleaning and year-based filtering pipeline (2007-2012 for training, 2014 for evaluation), combined with a scikit-learn pipeline handling ordinal encoding and feature scaling.

### Model training & comparison
Developed a training pipeline comparing four models (LightGBM, XGBoost, Random Forest, Logistic Regression) under 5-fold cross-validation, complemented by hyperparameter optimization with Optuna. LightGBM emerged as the top performer with an AUC-ROC of 0.689.

### Experiment tracking & model registry
Integrated MLflow for experiment tracking, metric logging, and automatic promotion of the champion model to a registry consumed by the API.

### Orchestration & prediction API
Orchestrated pipeline steps (data download, training, evaluation) via Apache Airflow DAGs, and exposed the champion model through a FastAPI service (`/predict`, `/predictions`, `/health`).

### Visualization frontend
Designed a Streamlit application to visualize predictions and model performance.

### Containerization & deployment
Fully containerized architecture using Docker Compose (data/train/airflow profiles), with uv for packaging and Makefile-driven deployment automation.

## Tech stack

- **ML:** scikit-learn, LightGBM, XGBoost, Optuna
- **Tracking:** MLflow
- **API:** FastAPI, Uvicorn
- **Frontend:** Streamlit, Plotly
- **Orchestration:** Apache Airflow (LocalExecutor + PostgreSQL)
- **Packaging:** uv
- **Containerization:** Docker Compose
- **Quality:** ruff, mypy, pytest

## Skills involved
Machine learning and predictive modeling, feature engineering, MLOps and experiment tracking, data pipeline orchestration, API design and deployment, containerization, and software quality practices (linting, type checking, testing).

## Outcome
Built within a single week, LightGBM proved to be the best-performing model with an AUC-ROC of 0.689, ahead of Logistic Regression (0.684), XGBoost (0.671), and Random Forest (0.666), validated through 5-fold cross-validation on the loan dataset.
