---
title: "Deep Reinforcement Learning Library"
description: "Rust library for comparing reinforcement learning and deep reinforcement learning algorithms on toy environments"
stack: ["Rust", "Python", "Macroquad", "Jupyter"]
repo: "https://github.com/Zameloth/deep_reinforcement_learning_lib"
date: 2026-05-01
---

**Context:** Built over several months as part of a Deep Reinforcement Learning course at ESGI

## Overview
Deep Reinforcement Learning Library is a Rust library and set of experiment binaries designed to implement and compare multiple reinforcement learning and deep reinforcement learning algorithms on toy environments, including an original game called Pond (4x4 grid).

## The problem we addressed
Deeply understanding and comparing the performance of different families of reinforcement learning algorithms — from classic tabular Q-Learning to modern AlphaZero-style approaches — requires a rigorous from-scratch implementation, without relying on high-level RL libraries, to genuinely grasp the internal mechanics of each method.

## What we built

### Test environments
Implemented several toy environments in Rust: LineWorld, GridWorld, TicTacToe, and Pond, an original 4x4 grid game built specifically for this project.

### RL and Deep RL algorithms
Fully implemented, in Rust, seven algorithm families: Tabular Q-Learning, DQN (with variants such as Double DQN), REINFORCE (vanilla, mean baseline, critic baseline), PPO, Monte Carlo Random Rollout (MCRR), MCTS (UCT), and an AlphaZero-like approach combining MCTS with a policy-value network.

### Training & evaluation pipeline
Built dedicated training binaries per algorithm generating CSV metrics, along with large-scale evaluation binaries (100,000 games) for tree-search-based methods.

### Interactive graphical interface
Developed a GUI with Macroquad to play Pond in human-vs-agent or human-vs-random mode, with selectable opposing algorithm.

### Results analysis & visualization
Python scripts for plotting learning curves (reward vs episodes and vs cumulative time), and a complete LaTeX scientific report synthesizing comparative results.

## Tech stack
**Main language:** Rust
**GUI:** Macroquad
**Data analysis:** Python, Jupyter Notebook
**Report:** LaTeX

## Skills involved
Implementation of reinforcement learning and deep reinforcement learning algorithms, systems programming in Rust, simulation environment design, interactive GUI development, experimental results analysis and visualization, scientific report writing.

## Outcome
Over several months, seven families of RL and Deep RL algorithms were implemented and compared end-to-end across four distinct environments, with a playable interface and a complete performance analysis report for each method.
