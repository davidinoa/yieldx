/* eslint-disable cypress/no-unnecessary-waiting */

import { PortfolioType } from "@bondhouse/income-portfolios";
import { getInpaasPortfolio } from "../../src/mock-requests/position-management/getInpaasPortfolio";
import { getFundAssets } from "../../src/mock-requests/rover-universe/getFundAssets";
import { createGetPortfolioMappingHandler } from "../../src/mock-requests/income-portfolios/createGetPortfolioMappingHandler";
import {
  createGetProposalHandler,
  createMockProposal
} from "../../src/mock-requests/income-portfolios/createGetProposalHandler";
import { analyzePortfolioHandler } from "../../src/mock-requests/rover-portfolio-analyzer/analyzePortfolioHandler";
import { createOptimizePortfolioHandler } from "../../src/mock-requests/rover-optimizer/createOptimizePortfolioHandler";

describe.skip("Edit Positions", () => {
  const { baseUrl } = Cypress.config();
  const searchUrl = `${baseUrl}/asset-explorer/search`;

  beforeEach(() => {
    cy.server();
    cy.route("/iam/api/v1/users/current-user").as("current-user");
    cy.route("/apis/rover-preferences/v1/users/*/cart").as("cart");
    cy.route("/apis/rover-universe/v1/assets/*").as("get-asset");
    cy.route("POST", "/apis/rover-universe/v1/assets/_get-assets").as(
      "get-assets"
    );
    cy.route("DELETE", "/apis/rover-preferences/v1/users/*/cart").as(
      "delete-cart"
    );

    cy.route({
      method: "GET",
      url: "/apis/ice-data/v1/cusips/*",
      response: {}
    }).as("ice-data");

    cy.route({
      method: "POST",
      url: "/apis/prices/v1/_price-asset",
      response: {
        prices: []
      }
    }).as("prices");
  });

  describe.skip("edit positions from AXP review", () => {
    beforeEach(() => {
      cy.visit(searchUrl);
      cy.wait("@current-user");
      cy.wait("@cart");

      // Click the cart button
      cy.get("[data-testid=cart-button]").click();
      // cy.wait("@get-assets");

      // Clear it if there are any contents
      cy.get("[data-testid=cart-window-content]").then($content => {
        if ($content.find("[data-testid=empty-cart-header]").length === 0) {
          cy.get("[data-testid=delete-all-button]").click();
          cy.wait("@delete-cart");
        }
      });

      // Close the cart
      cy.get("[data-testid=cart-window-close-button]").click();
      cy.findByRole("checkbox").click();
      cy.wait(5000);

      // Add 5 assets to cart
      cy.get(".axp-search-input").type("316067107");
      cy.wait(5000);
      cy.get("[data-testid=AddToCartButton]").click();
      cy.wait(5000);

      cy.get(".axp-search-input").clear().type("922906300");
      cy.wait(5000);
      cy.get("[data-testid=AddToCartButton]").click();
      cy.wait(5000);

      cy.get(".axp-search-input").clear().type("31617H102");
      cy.wait(5000);
      cy.get("[data-testid=AddToCartButton]").click();
      cy.wait(5000);

      cy.get(".axp-search-input").clear().type("09248U700");
      cy.wait(5000);
      cy.get("[data-testid=AddToCartButton]").click();
      cy.wait(5000);

      cy.get(".axp-search-input").clear().type("31607A703");
      cy.wait(5000);
      cy.get("[data-testid=AddToCartButton]").click();
      cy.wait(5000);
      cy.wait(5000);
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      // Enter an investment amount of $500,000
      cy.get("[name=amount]").type("50000000");
      cy.get("[data-testid=continue-button]").click();
      cy.get("[name=investment-input]").should("have.value", "500,000.00");

      cy.findByText(/explore options/i).click();
      cy.findByRole("button", {
        name: /balance weights/i
      }).click();
      cy.wait(1000);
      cy.get("[data-testid=optimization-close]").click();
    });

    it("removed assets should not reappear upon optimizing again (#2623)", () => {
      cy.get("div.ag-row").filter(":visible").should("have.length", 5);
      cy.findAllByText("remove").eq(0).click();
      cy.wait(1000);
      cy.findAllByText("remove").eq(0).click();
      cy.wait(1000);
      cy.findByText(/explore options/i).click();
      cy.findByRole("button", {
        name: /maximize yield/i
      }).click();
      cy.wait(1000);
      cy.get("[data-testid=optimization-close]").click();
      cy.get("div.ag-row").filter(":visible").should("have.length", 3);
    });

    it("assets should be able to be removed after clicking remove and review non tradable alert (#2481)", () => {
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=review-alert-button]").click();
      cy.wait(1000);
      cy.get("div.ag-row").filter(":visible").should("have.length", 5);
      cy.findAllByText("remove").eq(0).click();
      cy.wait(1000);
      cy.get("div.ag-row").filter(":visible").should("have.length", 4);
    });
  });

  describe.skip("edit positions from best fit review", () => {
    it("should be able to go to builder from best fit review (#2530)", () => {
      cy.visit(`${baseUrl}/best-fit/preferences/quality`);
      cy.get("[data-testid=investment-grade-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=maximize-yield-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("#quantity").type("5");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.wait(1000);
      cy.get("#portfolio-review").should("exist");
      cy.get("[data-testid=edit-positions-button]").click();
      cy.url().should("eq", `${baseUrl}/best-fit/portfolio-review#edit`);
      cy.get("[data-testid=continue-button]").click();
      cy.url().should("eq", `${baseUrl}/asset-explorer/portfolio-builder`);
      cy.get("div.ag-row").filter(":visible").should("have.length", 5);
    });
  });

  describe("edit positions from inpaas paper", () => {
    before(() => {
      cy.visit(`${baseUrl}/portfolios/external/mock-portfolio-id`);
      cy.window().then(window => {
        // Reference global instances set in "src/__mocks__/browser.ts".
        const { worker } = window.msw;
        const mockInpaasHandlers = [
          getInpaasPortfolio,
          getFundAssets,
          createGetPortfolioMappingHandler({
            portfolioId: "mock-portfolio-id",
            proposalId: "mock-proposal-id",
            portfolioType: PortfolioType.EXTERNAL
          }),
          createGetProposalHandler(
            createMockProposal({
              id: "mock-proposal-id",
              portfolioId: "mock-portfolio-id",
              assetIds: [
                "mock-asset-1",
                "mock-asset-2",
                "mock-asset-3",
                "mock-asset-4"
              ]
            })
          ),
          analyzePortfolioHandler,
          createOptimizePortfolioHandler()
        ];
        worker.use(...mockInpaasHandlers);
      });
    });
    it("should be able to go to builder from inpaas paper", () => {
      cy.wait("@prices");
      cy.get("[data-testid=edit-positions-button]").click();
      cy.get("[data-testid=continue-button]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/asset-explorer/portfolio-builder/edit?portfolioId=mock-portfolio-id&portfolioType=EXTERNAL`
      );
      cy.get("div.ag-row").filter(":visible").should("have.length", 4);
      cy.get("[data-testid=PortfolioBuilder-AutoOptimizeButton]").click();
      cy.findByRole("button", {
        name: /balance weights/i
      }).click();
      cy.get("[data-testid=optimization-close]").click();
      cy.get("div.ag-row").filter(":visible").should("have.length", 4);
    });
  });
});
