const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.smoke.cy.js",
    baseUrl: "https://dondoricent.netlify.app",

     // Fixed viewport so recording is consistent
    viewportWidth: 1280,
    viewportHeight: 800,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
