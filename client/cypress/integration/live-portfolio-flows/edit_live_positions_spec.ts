/* eslint-disable cypress/no-unnecessary-waiting */

import { setupWorker } from "msw";
import { AppType } from "@bondhouse/position-management";
import * as dayjs from "dayjs";
import { createGetPortfolioHandler } from "../../../src/mock-requests/position-management/createGetPortfolioHandler";
import createPortfolioObject from "../../../src/mock-requests/position-management/util/createMockPortfolio";
import { createGetOrdersHandler } from "../../../src/mock-requests/order-management/createGetOrdersHandler";
import { createGetPortfolioInstructionHandler } from "../../../src/mock-requests/investors/createGetPortfolioInstructionsHandler";
import { getFundAssets } from "../../../src/mock-requests/rover-universe/getFundAssets";
import { analyzePortfolioHandler } from "../../../src/mock-requests/rover-portfolio-analyzer/analyzePortfolioHandler";
import { createOptimizePortfolioHandler } from "../../../src/mock-requests/rover-optimizer/createOptimizePortfolioHandler";
import { createIntradayReturnHandler } from "../../../src/mock-requests/rover-portfolio-analyzer/createIntradayReturnHandler";
import { createCalculateReturnsHandler } from "../../../src/mock-requests/rover-portfolio-analyzer/createCalculateReturnsHandler";
import { defaultGetInvestorInstructions } from "../../../src/mock-requests/investors/defaultGetInvestorInstructions";
import { getCashPortfolioHandler } from "../../../src/mock-requests/position-management/getCashPortfolio";
import { defaultGetInvestor } from "../../../src/mock-requests/investors/defaultGetInvestor";
import { defaultGetApexAccount } from "../../../src/mock-requests/investors/defaultGetApexAccount";
import priceAssetHandler from "../../../src/mock-requests/prices/priceAssetHandler";

xdescribe("Edit live portfolio positions", () => {
  const { baseUrl } = Cypress.config();

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
      url: "/apis/ice-data/v1/cusips/*"
    }).as("ice-data");

    cy.route({
      method: "POST",
      url: "/apis/rover-portfolio-analyzer/v1/_calculate-intraday-return"
    }).as("intraday-return");

    cy.route({
      method: "POST",
      url: "/apis/rover-portfolio-analyzer/v1/_analyze-portfolio*"
    }).as("analyze-portfolio");

    cy.route({
      method: "POST",
      url: "/apis/rover-portfolio-analyzer/v1/_calculate-returns"
    }).as("total-returns");

    cy.route({
      method: "GET",
      url: "/apis/apex/v1/investors/*/account"
    }).as("apex-account");
  });

  describe("edit positions from custom live portfolio", () => {
    beforeEach(() => {
      cy.visit(`${baseUrl}/portfolios/live/mock-portfolio-id`);
      cy.window().then(window => {
        // Reference global instances set in "src/__mocks__/browser.ts".
        const { worker } = window.msw;
        setupCustomPortfolioMocks(worker);
      });
    });

    it("should be able to edit positions from header dropdown", () => {
      cy.get("[data-testid=more-button").click();
      cy.get("[data-testid=edit-positions-header").click();
      cy.url().should(
        "eq",
        `${baseUrl}/portfolios/live/mock-portfolio-id/edit`
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/asset-explorer/portfolio-builder/edit?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );
    });

    it("should be able to edit positions from positions grid", () => {
      cy.wait("@intraday-return");
      cy.wait("@analyze-portfolio");
      cy.wait("@total-returns");
      cy.wait("@apex-account");
      cy.get("[data-testid=edit-positions-button").click();
      cy.url().should(
        "eq",
        `${baseUrl}/portfolios/live/mock-portfolio-id/edit`
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/asset-explorer/portfolio-builder/edit?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );
    });

    it("should be able to execute update when investment amount stays the same", () => {
      cy.wait("@intraday-return");
      cy.wait("@analyze-portfolio");
      cy.wait("@total-returns");
      cy.wait("@apex-account");
      cy.get("[data-testid=edit-positions-button").click();
      cy.url().should(
        "eq",
        `${baseUrl}/portfolios/live/mock-portfolio-id/edit`
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/asset-explorer/portfolio-builder/edit?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );

      cy.get("[data-testid=AddToCartButton-mock-asset-1]").click();
      cy.wait("@analyze-portfolio");
      cy.get("[data-testid=PortfolioBuilder-AutoOptimizeButton]").click();
      cy.findByRole("button", {
        name: /maximize/i
      }).click();
      cy.wait("@analyze-portfolio");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/asset-explorer/portfolio-review/edit?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").should(
        "have.text",
        "Execute Changes"
      );
      cy.get("[data-testid=PortfolioReview-AppBottomNav-SaveOrUpdate]").should(
        "have.text",
        "Save as Paper"
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/execute-portfolio/preferences?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
    });

    it("should show check balance modal when new investment amount is greater than original and be able to take you back to builder ", () => {
      cy.wait("@intraday-return");
      cy.wait("@analyze-portfolio");
      cy.wait("@total-returns");
      cy.wait("@apex-account");
      cy.get("[data-testid=edit-positions-button").click();
      cy.url().should(
        "eq",
        `${baseUrl}/portfolios/live/mock-portfolio-id/edit`
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/asset-explorer/portfolio-builder/edit?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );

      cy.wait("@analyze-portfolio");
      // cy.get('[col-id="quantity"]').eq(1).type("55000{enter}");
      cy.get('[name="investment-input"]').clear().type("90000000");
      cy.get("[data-testid=PortfolioBuilder-AutoOptimizeButton]").click();
      cy.findByRole("button", {
        name: /maximize/i
      }).click({ force: true });
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/asset-explorer/portfolio-review/edit?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").should(
        "have.text",
        "Execute Changes"
      );
      cy.get("[data-testid=PortfolioReview-AppBottomNav-SaveOrUpdate]").should(
        "have.text",
        "Save as Paper"
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/execute-portfolio/preferences?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );
      cy.get("[data-testid=check-balance-modal]").should("exist");
      cy.contains("Manage cash account").should("exist");
      cy.contains("Continue editing portfolio").click();
      cy.url().should(
        "eq",
        `${baseUrl}/asset-explorer/portfolio-builder/edit?portfolioId=mock-portfolio-id&portfolioType=LIVE`
      );
      cy.get('[name="investment-input"]').should("have.value", "900,000.00");
    });
  });
});

function setupCustomPortfolioMocks(worker: ReturnType<typeof setupWorker>) {
  const mockCustomHandlers = [
    createGetPortfolioHandler(
      createPortfolioObject({
        app: AppType.CUSTOM,
        id: "mock-portfolio-id",
        name: "MOCK BOND PORTFOLIO",
        positions: [
          {
            id: "_30d58684.c7283330.buy",
            assetId: "mock-asset-1",
            quantity: 2,
            settled: 2,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684._621e7f48.buy",
            assetId: "mock-asset-2",
            quantity: 2,
            settled: 2,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.a4cd0ac9.buy",
            assetId: "mock-asset-3",
            quantity: 2,
            settled: 2,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.ff3cee29.buy",
            assetId: "mock-asset-4",
            quantity: 2,
            settled: 2,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "USD",
            assetId: "USD",
            quantity: 459_183.69,
            settled: 459_183.69,
            portfolioId: "mock-portfolio-id"
          }
        ]
      })
    ),
    createGetOrdersHandler({
      portfolioId: "mock-portfolio-id",
      orders: []
    }),
    createGetPortfolioInstructionHandler({
      portfolioId: "mock-portfolio-id",
      investorId: "mock-investor-id",
      externalEntityId: "mock-apex-id",
      id: "mock-instructions-id",
      cashOnly: false
    }),
    getCashPortfolioHandler({
      portfolioId: "mock-cash-portfolio-id",
      cashAvailable: 40_000
    }),
    defaultGetInvestorInstructions,
    defaultGetInvestor,
    defaultGetApexAccount,
    getFundAssets,
    analyzePortfolioHandler,
    createOptimizePortfolioHandler(),
    createIntradayReturnHandler(5),
    createCalculateReturnsHandler([
      {
        startDate: dayjs().toISOString(),
        endDate: dayjs().toISOString(),
        periodReturn: 0,
        cumulativeReturn: 0
      }
    ]),
    priceAssetHandler
  ];
  worker.use(...mockCustomHandlers);
}
