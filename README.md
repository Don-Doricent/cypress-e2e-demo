# Cypress E2E Portfolio Tests

## 📌 Overview
This repository contains a **basic end-to-end UI automation test** for my [personal portfolio website](https://dondoricent.netlify.app) using [Cypress](https://www.cypress.io/).  
The test validates that key elements are visible, navigation works, and the site renders correctly on different viewports.

---

## ✅ What's Covered
- **Header Validation** – Confirms the main headline text (`Full-Stack Developer / QA Engineer`) exists
- **Contact Section** – Checks for "Contact Me" and "or want to collaborate?" text
- **Navigation** – Clicks the `About` and `Projects` section links
- **Responsive Testing** – Runs viewport checks for:
  - Desktop (1280x720)
  - iPad Mini preset

---

## 🛠 Tech Stack
- **Testing Framework:** Cypress 13.x
- **Language:** JavaScript (ES6)
- **Assertions:** Chai

---

## 📂 Project Structure
cypress-testing/
│
├── cypress/
│ ├── e2e/
│ │ └── portfolio.test.js # E2E test file
│
├── package.json
└── README.md


---

## 🚀 Run Locally
```bash
# 1️⃣ Clone the repo
git clone https://github.com/Don-Doricent/cypress-e2e-portfolio.git
cd cypress-e2e-portfolio

# 2️⃣ Install dependencies
npm install

# 3️⃣ Open Cypress Test Runner
npx cypress open
