const { defineConfig } = require("cypress");

module.exports = defineConfig({

 projectId: "tdz1rm",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
