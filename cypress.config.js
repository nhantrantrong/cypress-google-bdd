const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());

      allureWriter(on, config);
      return config;
    },

    baseUrl: "https://google.com",
    video: false,
    specPattern: [
      'cypress/e2e/features/*.feature',
    ],
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureResultsPath: "report/allure-results"
    }
  },
});
