---
title: "Clair Obscur"
description: "Plateforme NDR de détection et résolution d'anomalies cybersécurité augmentée par l'IA" 
stack: ["Python", "LLMs", "FastAPI", "AWS", "React", "ClickHouse", "PostgreSQL"]
repo: "https://github.com/bntranduc/clair_obscur"
date: 2026-05-05
---


**Contexte :** Hackathon du Commissariat du Numérique de Défense

**Résultat :** 🥈 2ème place globale · 🥇 1ère place sur la qualité de détection d'attaques (précision et pertinence des alertes générées)

## Vue d'ensemble

Clair Obscur est une plateforme de NDR (Network Detection and Response), de type SIEM, conçue pour assister les analystes SOC grâce à un moteur d'analyses basé sur des LLM, capable de détecter, contextualiser et expliquer des attaques cyber à partir de logs bruts. 

## Le problème adressé

Les analystes SOC font face à un volume massif de logs et d'alertes, souvent peu contextualisées, ce qui ralentit la détection des menaces réelles et la reconstitution des chaînes d'attaque (kill chains). L'objectif de Clair Obscur est de réduire cette charge cognitive en automatisant l'analyse et en fournissant des synthèses exploitables directement par les analystes.

## Ce que nous avons contruit

### Plateforme NDR en temps réel

Conception d'une application type SIEM pour la visualisation de logs firewall, d'alertes, d'analytics et de KPI de sécurité, avec un frontend React et un backend FastAPI.

### Pipeline cloud et ingestion 

Mise en place d'une architecture AWS (OpenSearch, S3, SQS, Lambda, SageMaker, EC2, CloudWatch) assurant l'ingestion continue, le stockage, l'orchestration et l'observabilité des données. L'architecture a également été adaptée pour un déploiement on-premise avec ClickHouse et PostgreSQL.

### Moteur d'analyse IA des attaques

Développement d'un moteur basé sur un LLM avec pré-traitement par regex pour extraire, normaliser et structurer les informations clés des incidents. Le LLM, configuré avec un rôle d'analyste senior, exploite les statistiques calculées sur les batchs de logs (basé sur les référentiels MITRE ATT&CK et MITRE D3FEND) pour reconstituer les kill chains des attaques.

### Assistant IA pour le SOC
Conception d'un assistant agentique capable de répondre aux questions des analystes, de générer des synthèses d'incidents et de produire des analyses ciblées sur des alertes spécifiques.
 
## Stack technique
 
**Frontend :** React
**Backend :** FastAPI
**Cloud :** AWS (OpenSearch, S3, SQS, Lambda, SageMaker, EC2, CloudWatch)
**On-premise :** ClickHouse, PostgreSQL
**IA :** LLM (agent analyste), API Claude

## Compétences mobilisées
 
Architecture cloud distribuée, ingénierie de données, développement full-stack, conception de pipelines d'orchestration, prompt engineering, frameworks agentiques, threat intelligence (MITRE ATT&CK/D3FEND), et conception produit pour utilisateurs métier (analystes SOC).
 
## Résultat
 
Sur les 10 équipes en compétition, Clair Obscur s'est classé 2ème au global, et 1ère sur le critère spécifique de qualité de détection : la précision et pertinence des alertes générées par le moteur d'analyse IA.
