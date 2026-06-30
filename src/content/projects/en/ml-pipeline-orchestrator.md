---
title: "ML Pipeline Orchestrator"
description: "End-to-end MLOps platform for training, evaluating, and deploying models with automated retraining triggers and experiment tracking."
stack: ["Python", "Kubeflow", "MLflow", "Kubernetes", "PostgreSQL"]
repo: "https://github.com/theoeloy/ml-pipeline-orchestrator"
date: 2024-09-01
---

## Overview

A production-grade MLOps platform that automates the full lifecycle of machine learning models — from data ingestion and feature engineering through training, evaluation, and deployment.

## Architecture

The system is built around Kubeflow Pipelines for orchestration, with each pipeline step running in an isolated container. MLflow handles experiment tracking and model registry. A PostgreSQL database stores pipeline run metadata and deployment history.

Key design decisions:
- **Immutable artifacts**: every pipeline run produces versioned, content-addressed artifacts stored in object storage
- **Automated retraining**: data drift detection triggers new training runs without manual intervention
- **Blue/green deployments**: model updates roll out with zero downtime via Kubernetes traffic splitting

## Results

- Reduced model deployment cycle from 3 days to under 2 hours
- Reproducible experiments across team members via shared MLflow registry
- 99.9% pipeline success rate over 6 months in production
