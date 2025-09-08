# Flip a Coin 🪙

Jus a same said flip a coin

## Project Objective

Flip a Coin explores whether a digital coin flip can be trusted to be fair and unpredictable. While most online flippers rely on JavaScript's `Math.random()` (a pseudo-random number generator), this project invites users to participate in a live experiment: flip the coin, watch distributions evolve, and compare personal results with global stats to evaluate real-world fairness over time.

Core goals:

- Quantify fairness: Track heads/tails counts and percentages over many flips.
- Compare perspectives: Show your personal stats alongside global statistics.
- Visualize bias: Plot head-percentage over time to see convergence toward 50/50 (or not).
- Encourage transparency: Explain how PRNG-based randomness works and its limitations.

## Demo

[Live Demo](https://flip-coin-experiment.vercel.app/)

## Features

- 🎯 Flip a digital coin with synchronized spin/fall animation
- 📈 Global statistics (server-tracked)
- 👤 Personal statistics with local history and a simple probability chart
- 🧮 Number formatting with thousands separators and zero-padding
- 📱 Responsive layout: stacked on mobile, split-screen on desktop

## Technologies Used

- NextJS
- Prisma + PostgreSQL (global stats)
- Tailwind CSS (utility-first styling)
