// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: `http://localhost:${process.env.PORT || 8082}`, // Change the default port if needed
  },
});
