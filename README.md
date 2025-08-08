# 🌐 Cypress E2E Portfolio Tests

## 📌 Overview
This repository contains an end-to-end UI automation suite for my personal portfolio website (https://dondoricent.netlify.app), built with Cypress. The tests verify that core site elements render correctly, navigation functions as expected, and the layout adapts to different devices.

---

## ✅ Test Coverage
- Header Validation — Ensures the main headline text Full-Stack Developer / QA Engineer is present.
- Contact Section — Verifies the presence of "Contact Me" and "or want to collaborate?".
- Navigation — Clicks the About and Projects section links and verifies they load.
- Responsive Layout — Checks viewport rendering for:
  • Desktop (1280 × 720)
  • iPad Mini preset

---

## 🛠 Tech Stack
- Testing Framework: Cypress
- Language: JavaScript
- Assertions: Chai (built-in with Cypress)

---

## 📂 Project Structure
cypress-e2e-portfolio/
│
├── cypress/
│   └── e2e/
│       └── portfolio.test.js  (E2E test file)
│
├── package.json
└── README.md

---

## 🚀 Getting Started

1) Clone the repository
$ git clone https://github.com/Don-Doricent/cypress-e2e-portfolio.git
$ cd cypress-e2e-portfolio

2) Install dependencies
$ npm install

3) Run Cypress Test Runner
$ npx cypress open

Select the test file from the Cypress UI to run it in interactive mode.
