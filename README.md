# 🧠 Pathfinding Challenge – NestJS Starter

Welcome to the technical challenge for GOAT Finance! This repository contains a starter project built in NestJS with TypeScript. Your task is to develop a microservice that calculates the optimal route between two nodes in a graph, considering dynamic constraints like blocked nodes and required stops.

---

## 🚀 Challenge Overview

You must build a RESTful API that receives a graph and dynamic constraints, then returns the most optimal path between two nodes.

### 🔄 Input Example (POST JSON)
```json
{
  "start": "A",
  "end": "L",
  "nodes": [
    "A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L"
  ],
  "edges": [
    { "from": "A", "to": "B", "cost": 2 },
    { "from": "A", "to": "C", "cost": 4 },
    { "from": "B", "to": "D", "cost": 7 },
    { "from": "B", "to": "E", "cost": 3 },
    { "from": "C", "to": "F", "cost": 5 },
    { "from": "D", "to": "G", "cost": 2 },
    { "from": "E", "to": "G", "cost": 1 },
    { "from": "F", "to": "H", "cost": 2 },
    { "from": "G", "to": "I", "cost": 4 },
    { "from": "H", "to": "I", "cost": 1 },
    { "from": "I", "to": "J", "cost": 3 },
    { "from": "J", "to": "K", "cost": 2 },
    { "from": "K", "to": "L", "cost": 1 },
    { "from": "H", "to": "J", "cost": 4 },
    { "from": "E", "to": "F", "cost": 3 },
    { "from": "C", "to": "E", "cost": 2 }
  ],
  "constraints": {
    "blockedNodes": ["G", "D"],
    "requiredStops": ["E", "H"]
  }
}
```

### ✅ Expected Output
```json
{
  "path": ["A", "B", "C", "E", "F"],
  "totalCost": 9
}
```

---

## ⚙️ Requirements

- Use **NestJS** and **TypeScript**
- Implement input validation using `class-validator` and `ValidationPipe`
- Design modular, maintainable code (max 25 lines per function – enforced with ESLint + SonarJS)
- Swagger UI should expose API documentation
- Write unit and integration tests using **Jest**
- Add detailed comments and documentation for your route-finding algorithm

---

## 📁 Project Structure

- `src/route-finder`: Your main logic and services
- `src/dto`: DTOs for validation and transformation
- `src/test`: Add your unit and integration tests here

---

## 🧪 Test Instructions

```bash
npm run test
```

You should include tests for both:
- A basic graph (like the example above)
- A more advanced case (e.g., 20 nodes with multiple constraints)

---

## 🧼 Code Quality

- ESLint and Prettier are pre-configured
- Function complexity is checked via SonarJS rules
- Format before pushing:

```bash
npm run lint
npm run format
```

---

## 🛠 API Documentation

After running the server, visit:

```
http://localhost:3000/api
```

---

## 📦 Install & Run

```bash
npm install
npm run start:dev
```

---

## 📤 Submission

1. Fork or clone this repository
2. Complete the challenge
3. Make a .ZIP with your project and share it with us via email.

---

## 🧠 Tips

- Pick the algorithm that makes sense to you (Dijkstra, A*, DFS with memoization, etc.)
- Justify your choices in the code or a `notes.md`
- Focus on correctness and clarity, not just cleverness

---

Good luck, and have fun building! 💡
