# Test Plan – DemoBlaze

## Document Information

**Project Name:** DemoBlaze QA Portfolio Project

**Document Type:** Test Plan

**Prepared by:** Martin Dimitrov

**Role:** Junior QA / Software Tester

**Date Created:** 03 June 2026

**Version:** 1.0

**Application Under Test:** DemoBlaze

**Website:** https://www.demoblaze.com

---

## Test Environment

**Operating System:** Windows 11

**Browser:** Brave

**Browser Version:** Brave 1.90.128 (Official Build) (64-bit) Chromium: 148.0.7778.217

**Screen Resolution:** 2560 x 1600

**Internet Connection:** Stable Wi-Fi 

**Device:** Laptop 

**Target URL:** https://www.demoblaze.com

**Testing Type:** Manual testing, API testing, UI automation, performance testing

---

## Purpose of Testing

The purpose of this test plan is to define the testing approach for the DemoBlaze e-commerce website. The goal is to verify that the main user flows work correctly, including registration, login, product browsing, cart functionality, and order placement.

---

## Assumptions

- DemoBlaze will remain publicly accessible during testing.
- Test accounts can be created as needed.
- Internet connectivity remains stable.
- The application functionality will not significantly change during the testing period.

---

## Scope

### In Scope

* User registration
* User login and logout
* Product browsing
* Product categories
* Product details page
* Add to cart
* Remove from cart
* Place order
* Contact form
* About Us modal
* Mobile browser compatibility testing

### Out of Scope

* Real payment processing
* Real delivery/shipping
* Database testing (No access)
* Security penetration testing

---

## Defect Severity Levels

- Critical – Application crash, data loss, complete feature failure
- High – Major functionality broken
- Medium – Functionality partially affected
- Low – Cosmetic or minor usability issues

---

## Test Objectives

The main objectives are:

* Verify that users can register and log in successfully.
* Verify that products are displayed correctly.
* Verify that products can be added to and removed from the cart.
* Verify that users can complete the order form.
* Identify and document defects clearly.
* Prepare the project for manual, API, automation, and performance testing.

---

## Test Types

The following testing types will be performed:

* Functional testing
* UI testing
* Negative testing
* Exploratory testing
* API testing
* UI automation testing
* Performance testing (K6)
* Responsive testing
* Basic security validation

---

## Test Items

The following modules will be tested:

- Registration
- Login / Logout
- Product Catalog
- Product Categories
- Product Details
- Cart
- Checkout / Place Order
- Contact Form
- About Us Modal

---

## Entry Criteria

Testing can begin when:

* The DemoBlaze website is accessible.
* The test environment is ready.
* The browser is installed and updated.
* The test plan is created.
* Test scenarios are identified.

---

## Exit Criteria

Testing is complete when:

* All planned test cases are executed.
* All found defects are documented.
* Critical and high-priority defects are reported.
* A test summary report is created.
* The project files are uploaded to GitHub.

---

## Risks

Possible risks:

* DemoBlaze may be unstable or unavailable.
* Test data may already exist.
* Alerts and UI behavior may differ between browsers.
* Some defects may be caused by the demo nature of the website.

---

##  Deliverables

The final QA project will include:

* Test Plan
* Test Cases
* Bug Reports
* Test Execution Report
* API Testing Collection
* Automation Tests
* Performance Tests
* README.md file
