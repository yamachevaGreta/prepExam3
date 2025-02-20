# Shopping List App

A simple Express.js-based shopping list application.

## 🚀 How to Run

Install dependencies: npm install  

Start the server: npm start  
Runs on port 8082 (or a custom PORT if set). You can change the port by setting the PORT environment variable before running the command, like this: PORT=5000 npm start (on Windows, use set PORT=5000 && npm start).  

Start the server for UI tests: npm run start:test  
Runs on port 8082, ensuring it matches Playwright’s expected test environment.  

Run unit tests: npm run test:unit  
Runs all unit tests in tests/unit/.  

Run UI tests: npm run test:ui  
Starts the server on port 8082, runs Playwright tests, then shuts it down.  

Run all tests: npm test  
Runs both unit tests and UI tests.  
