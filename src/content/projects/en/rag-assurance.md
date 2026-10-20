---
title: "RAG Assurance"
description: "French-language RAG assistant over public insurance law that explains and cites the applicable legal article"
stack: ["Python", "LangChain", "BGE-M3", "Qdrant", "Mistral", "OpenRouter", "Langfuse", "FastAPI", "HTMX", "Docker"]
repo: "https://github.com/Zameloth/rag_assurances"
date: 2026-10-13
---

**Context:** Personal project

## Overview
RAG Assurance is a French-language conversational assistant that answers consumers' insurance questions (car, home, life…) from public law: service-public.fr consumer guides and the in-force French Insurance Code (*Code des assurances*). Every answer has two parts: a plain-French explanation, followed by the *fondement juridique* citing the article(s) it rests on.

## The problem we addressed
Questions arrive in everyday language ("can my insurer cancel my policy after a claim?") while the legal answer is written in legal French, a register where even the best open embedding models perform poorly. On top of that, a clear line has to be drawn: explaining which rule applies to a situation is fine, but recommending a product or a course of action is insurance advice, which is a regulated activity in France.

## What we built

### Corpus & ingestion
Built a reproducible corpus of 2,375 in-force Insurance Code articles and 87 service-public.fr guides, selected by a rule (the guide's `<dc:source>` points into the Code) rather than a hand-picked list. Structural chunking that preserves the guides' situational branches, dense + sparse embeddings in a single BGE-M3 pass, and 3,650 points indexed in Qdrant behind versioned aliases.

### Hybrid retrieval
Search over two indexes (guides and articles), with a short-circuit for queries that name an article directly (`L113-2`), an expansion step that follows DILA's editorial links between guides and Code sections, a cross-encoder reranker, and quota-based assembly with a relevance floor. Every stage can be ablated.

### Pre-registered evaluation
A hand-annotated golden set and a "ladder" protocol: each rung changes exactly one variable from the rung below, with a primary metric and an adoption rule (sign test on discordant pairs, guard thresholds on the other metrics) committed *before* anything runs, ruling out post-hoc metric selection. Calibrated LLM judges and full tracing in Langfuse.

### Controlled generation
Mistral Large via OpenRouter with pinned routing and strict JSON output: a typed `answer | refusal` union that keeps the explanation and the citations in separate fields. Citation validity is checked mechanically (every cited article must appear in the retrieved context), and refusals (product recommendation, course-of-action advice, out of scope) are kept distinct from plain retrieval failures. A condenser rewrites follow-up questions for multi-turn conversations.

### App & deployment
A streaming FastAPI + HTMX interface, self-hosted behind Traefik and a Cloudflare Tunnel, put to sleep by Sablier when nobody is using it. The index ships as a Parquet dump on a GitHub Release, sha256-verified and swapped in atomically via an alias flip at deploy time, so rolling back takes a single flip.

## Tech stack

- **Embeddings & reranking:** BGE-M3 (dense + sparse), bge-reranker-v2-m3
- **Vector store:** Qdrant
- **LLM:** Mistral Large 3 via OpenRouter, LangChain
- **Evaluation & observability:** Langfuse, hand-annotated golden set, LLM-as-judge
- **App:** FastAPI, HTMX
- **Deployment:** Docker Compose, Traefik, Sablier, Cloudflare Tunnel
- **Quality:** uv, ruff, mypy, pytest (>90% coverage), 27 ADRs

## Skills involved
RAG system design, dense/sparse hybrid retrieval, French legal NLP, rigorous evaluation methodology (pre-registration, statistical testing, ablations), structured generation and citation guardrails, MLOps and index reproducibility, self-hosting, and architecture decision records.

## Outcome
A complete pipeline, from corpus to deployed app, where every design choice is measured. The evaluation ladder produced clear, documented negative results: editorial-link expansion and reranking both improve their target metric significantly but degrade the article-side guards. So the simplest configuration (BGE-M3 dense alone) is what runs in production, a decision traced in the ADRs rather than left to intuition.
