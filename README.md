# Playwright OrangeHRM Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-TypeScript-brightgreen)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![POM](https://img.shields.io/badge/Framework-Page%20Object%20Model-orange)
![Automation](https://img.shields.io/badge/TestCases-30-success)

---

# Overview

This project is an End-to-End UI Automation Testing Framework built using **Playwright** and **TypeScript** following the **Page Object Model (POM)** design pattern.

The framework automates the OrangeHRM Demo application and demonstrates industry-standard automation testing practices including reusable page objects, assertions, cross-browser support and maintainable test architecture.

---

# Technologies Used

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Page Object Model (POM)
- Git
- GitHub
- GitHub Actions

---

# Project Structure

```
Playwright-OrangeHRM
│
├── .github/workflows
├── Screenshot Evidence
├── pages
├── tests
├── utils
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# Features

- End-to-End UI Automation
- Page Object Model (POM)
- Reusable Methods
- Cross-Browser Testing
- Assertions
- Screenshot Evidence
- Git Version Control
- GitHub Repository
- CI/CD Ready

---

# Test Coverage

## 📁 Folder 1 – Login (5 Test Cases)

- ✅ TC001 – Verify User can Login
- ✅ TC002 – Verify Invalid Login
- ✅ TC003 – Verify Invalid Username
- ✅ TC004 – Verify Invalid Username and Invalid Password
- ✅ TC005 – Verify User can Logout

---

## 📁 Folder 2 – PIM (5 Test Cases)

- ✅ TC006 – Verify User can Navigate to PIM
- ✅ TC007 – Verify User can Add Employee
- ✅ TC008 – Verify User can Search Employee
- ✅ TC009 – Verify User can Edit Employee
- ✅ TC010 – Verify User can Delete Employee

---

## 📁 Folder 3 – Leave Navigation (5 Test Cases)

- ✅ TC011 – Verify Dashboard Quick Launch
- ✅ TC012 – Verify Assign Leave Quick Launch
- ✅ TC013 – Verify Leave List Quick Launch
- ✅ TC014 – Verify User can Navigate to Leave
- ✅ TC015 – Verify User can Apply Leave

---

## 📁 Folder 4 – Administration (5 Test Cases)

- ✅ TC016 – Verify User can Navigate to Admin
- ✅ TC017 – Verify User can Add System User
- ✅ TC018 – Verify User can Search System User
- ✅ TC019 – Verify User can Edit System User
- ✅ TC020 – Verify User can Reset Search

---

## 📁 Folder 5 – Leave Management (5 Test Cases)

- ✅ TC021 – Verify User can View Leave List
- ✅ TC022 – Verify User can Search Leave Records
- ✅ TC023 – Verify User can Reset Leave Filters
- ✅ TC024 – Verify User can Search Non-Existing Leave Record
- ✅ TC025 – Verify User can Open My Leave Page

---

## 📁 Folder 6 – Recruitment (5 Test Cases)

- ✅ TC026 – Verify User can Open Recruitment Module
- ✅ TC027 – Verify User can View Vacancies
- ✅ TC028 – Verify User can View Candidates
- ✅ TC029 – Verify User can Open Add Candidate Page
- ✅ TC030 – Verify User can Add Candidate

---

# Framework Design

The framework follows the **Page Object Model (POM)** design pattern.

Each page object contains:

- Locators
- Reusable Methods
- Assertions

This keeps test cases clean, maintainable and scalable.

---

# Running the Tests

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run in headed mode

```bash
npx playwright test --headed
```

Run a single test

```bash
npx playwright test tests/TC030_Verify_User_can_Add_a_Candidate.spec.ts
```

Open the HTML Report

```bash
npx playwright show-report
```

---

# Screenshot Evidence

Execution screenshots are stored inside:

```
Screenshot Evidence/
```

Evidence has been captured throughout the automation suite.

---

# Skills Demonstrated

- Playwright Automation
- TypeScript
- Page Object Model (POM)
- UI Automation Testing
- Cross-Browser Testing
- Assertions
- Locator Strategies
- Reusable Framework Design
- Git
- GitHub
- GitHub Actions

---

# Project Statistics

| Item | Total |
|------|------:|
| Test Modules | 6 |
| Test Cases | 30 |
| Page Objects | Multiple |
| Programming Language | TypeScript |
| Automation Tool | Playwright |

---

# Future Improvements

- Data-Driven Testing
- API Testing
- Docker Integration
- Jenkins Pipeline
- Azure DevOps Pipeline
- Enhanced Reporting

---

# Author

**Krishan Shura**

Automation Test Engineer

GitHub:
https://github.com/KS6000

---

# Project Status

## ✅ Completed

✔ 30 Automated Test Cases

✔ 6 Functional Modules

✔ Built using Playwright + TypeScript

✔ Page Object Model (POM)

✔ Ready for Demonstration and Portfolio Use
