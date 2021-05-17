// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-wait-until";
import "cypress-file-upload";

Cypress.Commands.add("generateBestFit", () => {
  // fill out preferences
  cy.visit("/").get(":nth-child(3) > a").click();
  cy.findByText("Start BestFit")
    .click()
    .get("[data-testid=high-yield-option]")
    .click()
    .get("[data-testid=AppBottomNav-NextButton]")
    .click()
    .click()
    .get("[data-testid=AppBottomNav-BackButton]")
    .click()
    .get("[data-testid=duration-toggle]")
    .click()
    .get("[data-testid=AppBottomNav-NextButton]")
    .click()
    .get("[data-testid=maximize-yield-option]")
    .click()
    .get("[data-testid=AppBottomNav-NextButton]")
    .click()
    .click()
    .click()
    .click()
    .then(response => response);
});

Cypress.Commands.add("startBestFit", () => {
  cy.findByTestId("bestfit-link").click();
  cy.findByText(/start/i)
    .click()
    .then(response => response);
});

Cypress.Commands.add("saveBestFit", () => {
  cy.generateBestFit();
  cy.findByText(/save/i).click();
  cy.findByRole("textbox").type("CypressGeneratedPortfolio");
  cy.findByText(/confirm/i).click();
});
