# WA Technology Test Task

## Overview

This repository contains my solution for the WA Technology QA Automation assignment.

The project demonstrates automation of the Esports search functionality using a BDD approach with Playwright and TypeScript.

## Tech Stack

- Playwright
- TypeScript
- Playwright-BDD (Gherkin)
- Page Object Model (POM)

## Test Coverage

### Automated Scenarios

- Search for an existing esports team 
- Search using a randomly selected team from the match list
- Verify that search results display the selected team

## Project Structure

```
features/
fixtures/
pages/
steps/
```

The project follows the Page Object Model pattern to keep test logic maintainable and reusable.

## Environment

- Node.js 22+
- npm
- Playwright
- TypeScript

## Installation

```bash
npm install
```

## Execute Tests

```bash
npm test
```

This command generates Playwright tests from the Gherkin feature files and executes the test suite.

## Testing Approach

The automation focuses on validating the Esports team search functionality from the user's perspective.

The solution includes:

- Page Object Model
- Reusable step definitions
- Dynamic test data (random team selection)
- Explicit assertions

## Challenges

The main challenge was the virtualized match list used by the application.

Only rendered DOM elements are available at any given moment, therefore the implementation collects team names only from currently visible match rows before performing the search.

Additionally, dynamic page updates required explicit synchronization before validating the search results.
