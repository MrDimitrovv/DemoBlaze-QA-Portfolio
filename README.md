# DemoBlaze-QA-Portfolio

## Overview

This repository showcases an end-to-end QA project built around the DemoBlaze e-commerce application.

The goal of the project is to demonstrate practical software testing skills across multiple testing layers, including:

* Manual Testing
* API Testing (Postman)
* API Automation
* UI Automation (Selenium IDE)
* UI Automation (Playwright)
* Performance Testing (k6 / JMeter)
* CI/CD Integration (GitHub Actions)

The project follows a typical QA workflow, beginning with test planning and manual testing, followed by API testing, UI automation, performance testing, and CI/CD integration.

---

## Project Structure

DemoBlaze-QA-Portfolio/
│
├── README.md
│
├── docs/
│   ├── TestPlan/
│   ├── TestCases/
│   ├── BugReports/
│   └── Reports/
│
├── api/
│   ├── DemoBlaze_API_Collection.json
│   └── DemoBlaze_Variables.postman_environment.json
│
├── UIAutomation/
│   ├── Selenium IDE/
│   │   └── DemoBlaze_PortfolioProject.side
│   │
│   └── Playwright/
│       ├── tests/
│       ├── pages/
│       ├── fixtures/
│       ├── utils/
│       ├── playwright.config.js
│       ├── package.json
│       └── README.md
│
├── APIAutomation/
│   └── CSharp/
│
├── performance/
│   └── k6/
│
└── ci-cd/
    └── GitHubActions/
---

## Manual Testing Coverage

The following modules were manually tested and documented:

* User Registration
* User Login
* Product Catalog
* Shopping Cart
* Checkout Process
* Order History

Deliverables include:

* Test Plan
* Test Cases
* Bug Reports
* Enhancement Requests

---

## API Testing (Postman)

A Postman collection was created to validate the main DemoBlaze API workflows.

### Authentication

* Signup with valid credentials
* Signup with empty fields
* Login with valid credentials
* Login with invalid password

### Cart Management

* User validation (`/check`)
* Add product to cart (`/addtocart`)
* View cart (`/viewcart`)
* Delete cart item (`/deleteitem`)
* Clear cart (`/deletecart`)

### Dynamic Data Handling

The collection uses Postman environment variables to:

* Store authentication tokens
* Store cart cookie tokens
* Generate dynamic UUID values for cart items
* Reuse product identifiers across requests

---

## API Testing Challenges & Lessons Learned

During API testing, several issues were investigated and resolved:

* Compared browser network requests with Postman requests to identify request differences.
* Resolved `415 Unsupported Media Type` errors caused by incorrect Content-Type configuration.
* Investigated DemoBlaze's `/check` endpoint and identified its role in generating cart cookie tokens.
* Implemented dynamic UUID generation for cart item creation.
* Resolved JSON variable substitution issues caused by quotation marks being stored inside Postman variables.
* Extracted cart item IDs dynamically from the View Cart response to avoid hardcoded delete requests.
* Observed non-standard REST API design patterns such as:

  * POST used for cart retrieval (`/viewcart`)
  * POST used for item deletion (`/deleteitem`)

These findings were documented as part of the learning process and troubleshooting workflow.

---

## UI Automation

UI automation is being implemented in two stages.

### Selenium IDE

The first stage focuses on recording and organizing the main user workflows to demonstrate automation fundamentals.

Current Selenium IDE coverage includes:

- User Login
- User Registration
- Product Categories
- Product Details
- Shopping Cart
- Checkout
- Homepage Verification
- Contact Form

A total of 21 UI automation scenarios have been recorded.

### Playwright

The second stage involves rewriting the Selenium IDE scenarios using Playwright and JavaScript, following modern test automation practices.

The Playwright framework currently includes:

JavaScript and Playwright Test

Page Object Model (POM)

Separate test specifications and page object classes

Reusable page locators and methods

Automated assertions using Playwright's expect

Positive and negative login scenarios

Browser dialog handling

Chromium, Firefox, and WebKit projects configured for cross-browser execution

The framework is currently under development, with additional test scenarios and synchronization improvements being implemented.

---

## Tools & Technologies

* Postman
* C# / RestSharp / NUnit
* Selenium IDE
* Playwright / JavaScript
* Git & GitHub
* GitHub Actions (planned)
* JMeter / k6 (planned)
* Jira / Excel / Word
* Chrome DevTools

---

## Current Status

✅ Test Planning
✅ Manual Testing
✅ API Testing (Postman)
✅ UI Automation (Selenium IDE)

🔄 UI Automation (Playwright)

⏳ Performance Testing

⏳ CI/CD Integration

--- 

## About This Project

This project was developed as part of my transition from hospitality management to software quality assurance.

While working full-time as an Assistant Bar Manager at Hotel Saratz in Switzerland and simultaneously completing QA and Test Automation training through SoftUni, I dedicated my personal time to building a practical end-to-end QA portfolio project.

The goal was not only to learn testing concepts, but to apply them in a realistic workflow covering manual testing, API testing, automation, performance testing, defect reporting, and CI/CD practices.