# LeetCode Solutions: JavaScript & Unit Testing

This repository contains my personal solutions to LeetCode problems, focusing on algorithm efficiency ($O(n)$ complexity) and software quality through **Unit Testing**.

## 🛠️ Tech Stack & Concepts

- **Language:** JavaScript (Node.js)
- **Testing:** Jest
- **Concepts:** Arrays, Hash Maps, Two Pointers, Time/Space Complexity Analysis.
- **Architecture:** Modular structure using CommonJS (`module.exports`).

## 📚 Problem Index

| #   | Title   | Difficulty | Solution                               |
| :-- | :------ | :--------- | :------------------------------------- |
| 001 | Two Sum | 🟢 Easy    | [Solution](./easy/two-sum/solution.js) |

## 🧪 Setup & How to Run Tests

This project uses **Jest** as the testing framework. Follow these steps to set up the environment and run the solutions locally.

### 1. Install Dependencies

Before running tests for the first time, you must install the project dependencies (like Jest):

```bash
npm install
```

### 2. Run All Tests

To execute all test suites across the entire repository:

```bash
npm test
```

### 3. Run a Specific Exercise

To run tests only for a specific problem (e.g., Two Sum):

```bash
npm test easy/two-sum/solution.test.js
```
