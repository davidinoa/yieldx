/* eslint-disable cypress/no-unnecessary-waiting */

import { rest, setupWorker } from "msw";
import { AppType } from "@bondhouse/position-management";
import * as dayjs from "dayjs";
import { UserType } from "@bondhouse/iam";
import { defaultGetInvestor } from "../../src/mock-requests/investors/defaultGetInvestor";
import { defaultGetInvestorInstructions } from "../../src/mock-requests/investors/defaultGetInvestorInstructions";
import { getFundAssets } from "../../src/mock-requests/rover-universe/getFundAssets";
import { analyzePortfolioHandler } from "../../src/mock-requests/rover-portfolio-analyzer/analyzePortfolioHandler";
import { createOptimizePortfolioHandler } from "../../src/mock-requests/rover-optimizer/createOptimizePortfolioHandler";
import { createGetCartHandler } from "../../src/mock-requests/rover-preferences/createGetCartHandler";
import createPortfolioObject from "../../src/mock-requests/position-management/util/createMockPortfolio";
import { createGetUserHandler } from "../../src/mock-requests/iam/createGetUserHandler";
import { getCashPortfolioHandler } from "../../src/mock-requests/position-management/getCashPortfolio";
import { createPortfolioForInvestorHandler } from "../../src/mock-requests/position-management/createPortfolioForInvestorHandler";
import { internalFundTransferHandler } from "../../src/mock-requests/position-management/internalFundTransferHandler";
import { createGetInventoryMappingHandler } from "../../src/mock-requests/iam/createGetInventoryMappingHandler";
import { createGetPortfolioHandler } from "../../src/mock-requests/position-management/createGetPortfolioHandler";
import { createGetOrdersHandler } from "../../src/mock-requests/order-management/createGetOrdersHandler";
import { createGetPortfolioInstructionHandler } from "../../src/mock-requests/investors/createGetPortfolioInstructionsHandler";
import { defaultGetApexAccount } from "../../src/mock-requests/investors/defaultGetApexAccount";
import priceAssetHandler from "../../src/mock-requests/prices/priceAssetHandler";

describe.skip("Execute live portfolios", () => {
  const { baseUrl } = Cypress.config();

  beforeEach(() => {
    cy.server();
    cy.route("/iam/api/v1/users/current-user").as("current-user");
    cy.route("/apis/rover-preferences/v1/users/*/cart").as("cart");
    cy.route("/apis/rover-universe/v1/assets/*").as("get-asset");
    cy.route("POST", "/apis/prices/v1/_price-asset").as("price-asset");
    cy.route(
      "/apis/position-management/v1/portfolios/mock-cash-portfolio-id"
    ).as("get-cash-portfolio");
    cy.route("/apis/apex/v1/investors/mock-investor-id/account").as(
      "get-apex-account"
    );
    cy.route("/apis/investor/v1/investors/mock-investor-id").as(
      "get-investor-account"
    );
    cy.route("POST", "/apis/rover-universe/v1/assets/_get-assets").as(
      "get-assets"
    );

    cy.route({
      method: "GET",
      url: "/apis/ice-data/v1/cusips/*"
    }).as("ice-data");

    cy.route({
      method: "POST",
      url: "/apis/rover-portfolio-analyzer/v1/_analyze-portfolio*"
    }).as("analyze-portfolio");
  });

  describe("Executing portfolio from builder", () => {
    beforeEach(() => {
      cy.visit(`${baseUrl}/asset-explorer/portfolio-builder`, {
        onLoad: window => {
          // Reference global instances set in "src/__mocks__/browser.ts".
          const { worker } = window.msw;
          setupExecutionMocks(worker);
        }
      });
    });

    it("should be able to reach end of execution flow with default options", () => {
      cy.get("[data-testid=NumberInput-amount]").type("70000000");
      cy.get("[data-testid=continue-button]").click();
      cy.get('[name="investment-input"]').should("have.value", "700,000.00");
      cy.get("[data-testid=PortfolioBuilder-AutoOptimizeButton]").click();
      cy.findByRole("button", {
        name: /maximize/i
      }).click();
      cy.wait("@analyze-portfolio");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should("eq", `${baseUrl}/asset-explorer/portfolio-review`);
      cy.get("[data-testid=AppBottomNav-NextButton]").should(
        "have.text",
        "Execute Portfolio"
      );
      cy.get("[data-testid=PortfolioReview-AppBottomNav-SaveOrUpdate]").should(
        "have.text",
        "Save as Paper"
      );
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should("eq", `${baseUrl}/execute-portfolio/investors`);
      cy.wait("@get-cash-portfolio");
      cy.wait("@get-apex-account");
      cy.wait("@get-investor-account");
      cy.get("[data-testid=select-investor-mock-investor-id]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should("eq", `${baseUrl}/execute-portfolio/preferences`);
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.wait("@price-asset");
      cy.url().should("eq", `${baseUrl}/execute-portfolio/confirm`);
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("#name").type("mock portfolio");
      cy.get("[data-testid=continue-button]").click();
    });
  });
});

function setupExecutionMocks(worker: ReturnType<typeof setupWorker>) {
  const mockCustomHandlers = [
    createGetCartHandler([
      "mock-asset-1",
      "mock-asset-2",
      "mock-asset-3",
      "mock-asset-4"
    ]),
    createGetInventoryMappingHandler({}),
    defaultGetInvestor,
    defaultGetInvestorInstructions,
    defaultGetApexAccount,
    createPortfolioForInvestorHandler({
      portfolioId: "mock-portfolio-id",
      investorId: "mock-investor-id",
      app: AppType.CUSTOM,
      name: "mock portfolio"
    }),
    getFundAssets,
    analyzePortfolioHandler,
    getCashPortfolioHandler({
      portfolioId: "mock-cash-portfolio-id",
      cashAvailable: 900_000
    }),
    createOptimizePortfolioHandler({
      portfolio: createPortfolioObject({
        app: AppType.CUSTOM,
        id: "mock-portfolio-id",
        name: "MOCK OPTIMIZED PORTFOLIO",
        positions: [
          {
            id: "_30d58684.c7283330.buy",
            assetId: "mock-asset-1",
            quantity: 4,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684._621e7f48.buy",
            assetId: "mock-asset-2",
            quantity: 4,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.a4cd0ac9.buy",
            assetId: "mock-asset-3",
            quantity: 4,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.ff3cee29.buy",
            assetId: "mock-asset-4",
            quantity: 2,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "USD",
            assetId: "USD",
            quantity: 0,
            portfolioId: "mock-portfolio-id"
          }
        ]
      }),
      orders: []
    }),
    priceAssetHandler,
    createGetUserHandler({
      institutionId: "mock-institution-id",
      id: "mock-user-id",
      userType: UserType.ADMIN,
      first: "mock",
      last: "user",
      policies: [
        {
          resource: "/apis/investor/v1/investors/mock-investor-id*",
          actions: ["*"]
        }
      ],
      email: "mock@email.com",
      terms: true
    }),
    internalFundTransferHandler({
      portfolioId: "mock-portfolio-id",
      investorId: "mock-investor-id"
    }),
    createGetPortfolioInstructionHandler({
      portfolioId: "mock-portfolio-id",
      investorId: "mock-investor-id",
      externalEntityId: "mock-apex-id",
      id: "mock-instructions-id",
      cashOnly: false
    }),
    createGetOrdersHandler({
      portfolioId: "mock-portfolio-id",
      orders: [
        {
          id: "",
          portfolioId: "mock-portfolio-id",
          assetId: "mock-asset-1",
          quantity: 4,
          createdAt: dayjs().toISOString()
        },
        {
          id: "",
          portfolioId: "mock-portfolio-id",
          assetId: "mock-asset-2",
          quantity: 4,
          createdAt: dayjs().toISOString()
        },
        {
          id: "",
          portfolioId: "mock-portfolio-id",
          assetId: "mock-asset-3",
          quantity: 4,
          createdAt: dayjs().toISOString()
        },
        {
          id: "",
          portfolioId: "mock-portfolio-id",
          assetId: "mock-asset-4",
          quantity: 2,
          createdAt: dayjs().toISOString()
        }
      ]
    }),
    createGetPortfolioHandler(
      createPortfolioObject({
        app: AppType.CUSTOM,
        id: "mock-portfolio-id",
        name: "MOCK BOND PORTFOLIO",
        positions: [
          {
            id: "USD",
            assetId: "USD",
            quantity: 900_000,
            settled: 900_000,
            portfolioId: "mock-portfolio-id"
          }
        ]
      })
    ),
    rest.post(
      `/apis/order-management/v1/portfolios/mock-portfolio-id/orders`,
      (req, res, ctx) => {
        return res(ctx.status(200));
      }
    )
  ];
  worker.use(...mockCustomHandlers);
}
