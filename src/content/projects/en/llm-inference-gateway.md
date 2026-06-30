---
title: "LLM Inference Gateway"
description: "High-throughput inference gateway for large language models with request batching, caching, and multi-provider routing."
stack: ["Python", "FastAPI", "Redis", "Docker", "Prometheus"]
repo: "https://github.com/theoeloy/llm-inference-gateway"
demo: "https://gateway.theo-eloy.fr"
date: 2024-11-15
---

## Overview

A reverse-proxy and orchestration layer for LLM APIs that handles batching, semantic caching, rate limiting, and provider failover in a single lightweight service.

## Problem

Direct API calls to LLM providers are expensive and slow at scale. Applications sending thousands of similar prompts per hour waste tokens on redundant computation, and a single provider outage can take down the whole product.

## Solution

The gateway sits between the application and upstream providers and provides:

- **Semantic cache**: embeddings-based similarity search against recent responses — cache hits return in under 5ms
- **Request batching**: groups concurrent requests to the same model for efficient throughput
- **Provider routing**: primary/fallback chain across OpenAI, Anthropic, and self-hosted models
- **Observability**: per-model latency, token consumption, and cache hit-rate exposed as Prometheus metrics

## Results

- 40% reduction in API spend via cache hits
- p99 latency under 200ms for cached responses
- Zero downtime during two provider incidents over 3 months
