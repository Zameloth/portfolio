---
title: "Deep Reinforcement Learning Library"
description: "Bibliothèque Rust de comparaison d'algorithmes de RL et de Deep RL sur environnements jouets"
stack: ["Rust", "Python", "Macroquad", "Jupyter"]
repo: "https://github.com/Zameloth/deep_reinforcement_learning_lib"
date: 2026-05-01
---

**Contexte :** Projet réalisé sur quelques mois dans le cadre d'un cours de Deep Reinforcement Learning à l'ESGI

## Vue d'ensemble
Deep Reinforcement Learning Library est une bibliothèque et un ensemble de binaires d'expérimentation écrits en Rust, conçus pour implémenter et comparer plusieurs algorithmes de RL et de Deep RL sur des environnements jouets, dont un jeu original baptisé Pond (grille 4x4).

## Le problème adressé
Comprendre et comparer en profondeur les performances de différentes familles d'algorithmes de reinforcement learning — du Q-Learning tabulaire classique jusqu'aux approches modernes de type AlphaZero — nécessite une implémentation rigoureuse depuis zéro, sans s'appuyer sur des bibliothèques RL haut niveau, afin de réellement maîtriser les mécanismes internes de chaque méthode.

## Ce qui a été construit

### Environnements de test
Implémentation de plusieurs environnements jouets en Rust : LineWorld, GridWorld, TicTacToe, et Pond, un jeu original sur grille 4x4 développé spécifiquement pour ce projet.

### Algorithmes de RL et Deep RL
Implémentation complète, en Rust, de sept familles d'algorithmes : Tabular Q-Learning, DQN (avec variantes telles que Double DQN), REINFORCE (vanilla, avec baseline moyenne, avec baseline critique), PPO, Monte Carlo Random Rollout (MCRR), MCTS (UCT), ainsi qu'une approche de type AlphaZero combinant MCTS et réseau de politique-valeur.

### Pipeline d'entraînement et d'évaluation
Mise en place de binaires d'entraînement dédiés par algorithme, générant des métriques au format CSV, ainsi que de binaires d'évaluation à grande échelle (100 000 parties) pour les méthodes basées sur la recherche arborescente.

### Interface graphique interactive
Développement d'une GUI avec Macroquad permettant de jouer à Pond en mode humain contre agent ou humain contre joueur aléatoire, avec sélection de l'algorithme adverse.

### Analyse et visualisation des résultats
Scripts Python pour le tracé des courbes d'apprentissage (récompense en fonction des épisodes et du temps cumulé), et rédaction d'un rapport scientifique complet en LaTeX synthétisant les résultats comparatifs.

## Stack technique

- **Langage principal :** Rust
- **Interface graphique :** Macroquad
- **Analyse de données :** Python, Jupyter Notebook
- **Rapport :** LaTeX

## Compétences mobilisées
Implémentation d'algorithmes de reinforcement learning et de deep reinforcement learning, programmation système en Rust, conception d'environnements de simulation, développement d'interfaces graphiques interactives, analyse et visualisation de résultats expérimentaux, rédaction scientifique.

## Résultat
Sur plusieurs mois, sept familles d'algorithmes de RL et de Deep RL ont été implémentées et comparées de bout en bout sur quatre environnements distincts, avec une interface jouable et un rapport d'analyse complet des performances de chaque méthode.
