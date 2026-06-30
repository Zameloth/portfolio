---
title: "Real-Time Feature Store"
description: "Low-latency feature store serving online and offline features for ML models, with a unified API for training and inference."
stack: ["Python", "Redis", "Apache Spark", "Kafka", "Terraform"]
repo: "https://github.com/theoeloy/feature-store"
date: 2025-02-10
---

## Overview

A feature store that bridges the gap between batch-computed training features and the sub-millisecond feature retrieval needed at inference time — using the same feature definitions for both.

## The Training/Serving Skew Problem

Most ML bugs in production come from training/serving skew: features computed differently at training time versus inference time. This store uses a single feature definition that drives both the Spark batch jobs and the online serving layer, eliminating the divergence.

## Design

- **Feature registry**: YAML-based definitions versioned in git; a CLI generates both Spark jobs and serving schemas from them
- **Offline store**: Spark computes point-in-time correct feature snapshots written to Parquet for training dataset generation
- **Online store**: Redis holds the latest feature values per entity, updated by a Kafka consumer as new events arrive
- **Unified SDK**: `feature_store.get(entity_id, feature_names)` works identically in training pipelines and model servers

## Results

- Training/serving skew eliminated across 3 production models
- Feature retrieval p95 under 2ms from Redis
- Provisioned with Terraform — new environments up in under 10 minutes
