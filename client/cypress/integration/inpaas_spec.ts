import { setupWorker } from "msw";
import { AppType } from "@bondhouse/position-management";
import {
  Action,
  CreateOrReplacePortfolioMappingRequest,
  PortfolioType,
  RebalanceProposalRequest
} from "@bondhouse/income-portfolios";
import * as dayjs from "dayjs";
import { createGetPortfolioHandler } from "mock-requests/position-management/createGetPortfolioHandler";
import createPortfolioObject from "mock-requests/position-management/util/createMockPortfolio";
import { getFundAssets } from "mock-requests/rover-universe/getFundAssets";
import { analyzePortfolioHandler } from "mock-requests/rover-portfolio-analyzer/analyzePortfolioHandler";
import { createGetPortfolioMappingHandler } from "mock-requests/income-portfolios/createGetPortfolioMappingHandler";
import {
  createGetProposalHandler,
  createMockProposal
} from "mock-requests/income-portfolios/createGetProposalHandler";
import Decimal from "util/Decimal";
import { getMinMaxYieldHandler } from "mock-requests/income-portfolios/getMinMaxYieldHandler";
import { newProposalHandler } from "mock-requests/income-portfolios/newProposalHandler";
import { rebalanceProposalHandler } from "mock-requests/income-portfolios/rebalanceProposalHandler";
import { createUpdateExternalPortfolioHandler } from "mock-requests/position-management/createUpdateExternalPortfolioHandler";
import { createUpdatePortfolioMappingHandler } from "mock-requests/income-portfolios/createUpdatePortfolioMappingHandler";
import { createGetInventoryMappingHandler } from "mock-requests/iam/createGetInventoryMappingHandler";
import { isPortfolioObject } from "util/isPortfolioObject";
import priceAssetHandler from "mock-requests/prices/priceAssetHandler";
import mockInpaasPortfolioRequests from "mock-requests/graphql/mockInpaasPortfolioRequests";

const mockProposal = createMockProposal({
  id: "mock-proposal-id",
  portfolioId: "mock-portfolio-id",
  assetIds: ["mock-asset-1", "mock-asset-2", "mock-asset-3", "mock-asset-4"]
});

function setupMocks(worker: ReturnType<typeof setupWorker>) {
  const mockCustomHandlers = [
    mockInpaasPortfolioRequests,
    getMinMaxYieldHandler,
    priceAssetHandler,
    createGetInventoryMappingHandler({}),
    newProposalHandler(mockProposal),
    createUpdateExternalPortfolioHandler({
      created: false,
      updated: true
    }),
    createUpdatePortfolioMappingHandler({
      created: false,
      updated: true
    }),
    rebalanceProposalHandler(mockProposal, "mock-rebalanced-proposal-id"),
    createGetPortfolioHandler(
      createPortfolioObject({
        app: AppType.INPAAS,
        id: "mock-portfolio-id",
        name: "MOCK INPAAS PORTFOLIO",
        positions: [
          {
            id: "_30d58684.c7283330.buy",
            assetId: "mock-asset-1",
            quantity: 2927,
            settled: 2927,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684._621e7f48.buy",
            assetId: "mock-asset-2",
            quantity: 3324,
            settled: 3324,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.a4cd0ac9.buy",
            assetId: "mock-asset-3",
            quantity: 5107,
            settled: 5107,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.ff3cee29.buy",
            assetId: "mock-asset-4",
            quantity: 7799,
            settled: 7799,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "USD",
            assetId: "USD",
            quantity: 5118.899999999965,
            settled: 5118.899999999965,
            portfolioId: "mock-portfolio-id"
          }
        ]
      }),
      PortfolioType.EXTERNAL
    ),
    createGetPortfolioHandler(
      createPortfolioObject({
        app: AppType.INPAAS,
        id: "mock-stale-portfolio-id",
        name: "MOCK INPAAS PORTFOLIO",
        positions: [
          {
            id: "_30d58684.c7283330.buy",
            assetId: "mock-asset-1",
            quantity: 2927,
            settled: 2927,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684._621e7f48.buy",
            assetId: "mock-asset-2",
            quantity: 3324,
            settled: 3324,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.a4cd0ac9.buy",
            assetId: "mock-asset-3",
            quantity: 5107,
            settled: 5107,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.ff3cee29.buy",
            assetId: "mock-asset-4",
            quantity: 7799,
            settled: 7799,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "USD",
            assetId: "USD",
            quantity: 5118.899999999965,
            settled: 5118.899999999965,
            portfolioId: "mock-portfolio-id"
          }
        ],
        updatedAt: dayjs().subtract(2, "day").toISOString(),
        createdAt: dayjs().subtract(2, "day").toISOString()
      }),
      PortfolioType.EXTERNAL
    ),
    getFundAssets,
    analyzePortfolioHandler,
    createGetPortfolioMappingHandler({
      portfolioId: "mock-stale-portfolio-id",
      proposalId: "mock-proposal-id",
      portfolioType: PortfolioType.EXTERNAL
    }),
    createGetPortfolioMappingHandler({
      portfolioId: "*",
      proposalId: "mock-proposal-id",
      portfolioType: PortfolioType.EXTERNAL
    }),
    createGetPortfolioHandler(
      createPortfolioObject({
        app: AppType.INPAAS,
        id: "*",
        name: "MOCK INPAAS PORTFOLIO",
        positions: [
          {
            id: "_30d58684.c7283330.buy",
            assetId: "mock-asset-1",
            quantity: 2927,
            settled: 2927,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684._621e7f48.buy",
            assetId: "mock-asset-2",
            quantity: 3324,
            settled: 3324,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.a4cd0ac9.buy",
            assetId: "mock-asset-3",
            quantity: 5107,
            settled: 5107,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "_30d58684.ff3cee29.buy",
            assetId: "mock-asset-4",
            quantity: 7799,
            settled: 7799,
            portfolioId: "mock-portfolio-id",
            createdAt: "2020-09-18T13:34:15.214785Z",
            updatedAt: "2020-09-18T13:34:15.214785Z"
          },
          {
            id: "USD",
            assetId: "USD",
            quantity: 5118.899999999965,
            settled: 5118.899999999965,
            portfolioId: "mock-portfolio-id"
          }
        ],
        updatedAt: dayjs().subtract(2, "day").toISOString(),
        createdAt: dayjs().subtract(2, "day").toISOString()
      }),
      PortfolioType.EXTERNAL
    ),
    createGetProposalHandler(mockProposal)
  ];
  worker.use(...mockCustomHandlers);
}

describe("InPaaS", () => {
  const { baseUrl } = Cypress.config();
  const goalsUrl = `${baseUrl}/inpaas/goals`;
  const portfolioSummaryUrl = `${baseUrl}/inpaas/portfolio-review`;
  /* const selectInvestorUrl = `${baseUrl}/execute-portfolio/investors`; */
  beforeEach(() => {
    cy.server();
    cy.route("POST", "/graphql").as("graphql");
    cy.route("POST", "/apis/income-portfolios/v1/proposals/_new").as(
      "new-proposal"
    );
    cy.route({
      method: "POST",
      response: { inventories: [] },
      url:
        "/apis/rover-universe/v1/institutions/b17c644a-30e8-47fb-a26b-f6743786c3ba/inventories"
    }).as("inventories");
    cy.route(
      "POST",
      "/apis/income-portfolios/v1/proposals/portfolios/*/_rebalance"
    ).as("rebalance-proposal");
    cy.route("POST", "/apis/position-management/v1/external-portfolios").as(
      "create-update-external-portfolio"
    );
    cy.route("POST", "/apis/income-portfolios/v1/portfolio-mappings/*").as(
      "create-replace-proposal-mapping"
    );
    cy.route(
      "POST",
      "/apis/rover-portfolio-analyzer/v1/_analyze-portfolio*"
    ).as("analyze-portfolio");
    cy.route("POST", "/apis/rover-universe/v1/assets/_get-assets").as(
      "get-assets"
    );
    cy.route("POST", "/graphql").as("graphql");
    cy.route("GET", "/apis/income-portfolios/v1/proposals/*").as(
      "get-proposal"
    );
    cy.route("GET", "/apis/income-portfolios/v1/portfolio-mappings/*").as(
      "get-proposal-mapping"
    );
    cy.route("GET", "/apis/position-management/v1/external-portfolios/*").as(
      "get-external-portfolio"
    );
    cy.route("/iam/api/v1/users/current-user").as("current-user");
  });

  describe("navigation", () => {
    it("can be entered via the sidebar", () => {
      cy.visit("/");

      // Open InPaaS
      cy.contains("InPaaS", {
        timeout: 20_000
      }).click();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1_000);
      cy.contains("Start InPaaS").click();

      cy.url().should("eq", goalsUrl);
    });

    it("can be entered via homepage links", () => {
      cy.visit("/");
      cy.wait("@current-user");
      // Open InPaaS
      cy.get("[data-testid=LinkCard-Button-IncomePortfoliosAsAService]", {
        timeout: 20_000
      }).click();
      cy.get("[data-testid=LandingPage-StartLink-inpaas]").click();

      cy.url().should("eq", goalsUrl);
    });
  });

  describe("goals form", () => {
    it("continue is disabled until investment amount and target income are provided", () => {
      cy.visit(goalsUrl);

      cy.get("[data-testid=AppBottomNav-NextButton]", {
        timeout: 30000
      }).should("be.disabled");

      cy.get("#investmentAmount").type("10000000");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");

      cy.get("#targetYield").type("1200");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
    });

    it("should work for specific inputs", () => {
      cy.visit(goalsUrl, {
        onLoad: window => {
          // Reference global instances set in "src/__mocks__/browser.ts".
          const { worker } = window.msw;
          setupMocks(worker);
        }
      });
      cy.get("#investmentAmount").type("10000000");
      cy.get("#targetYield").type("1200");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.wait("@new-proposal", { timeout: 35000 });
      cy.wait("@analyze-portfolio", { timeout: 10000 });
      cy.url().should("eq", portfolioSummaryUrl);
    });

    xit("should clear inputs after saving portfolio", () => {
      cy.visit(goalsUrl, {
        onLoad: window => {
          // Reference global instances set in "src/__mocks__/browser.ts".
          const { worker } = window.msw;
          setupMocks(worker);
        }
      });
      cy.get("#investmentAmount").type("10000000");
      cy.get("#targetYield").type("1200");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.wait("@new-proposal", { timeout: 35000 });
      cy.wait("@analyze-portfolio", { timeout: 10000 });
      cy.url().should("eq", portfolioSummaryUrl);
      cy.get("[data-testid=PortfolioReview-AppBottomNav-SaveOrUpdate]")
        .should("have.text", "Save as Paper")
        .click();
      cy.get("#name").type("MOCK INPAAS PORTFOLIO");
      cy.get("[data-testid=continue-button]").click();
      cy.wait("@create-update-external-portfolio").then(xhr => {
        if (isPortfolioObject(xhr.request.body)) {
          assert.equal(xhr.request.body.name, "MOCK INPAAS PORTFOLIO");
        }
      });
      cy.contains("InPaaS").click();
      cy.contains("Start InPaaS").click();
      cy.url().should("eq", goalsUrl);
      cy.get("#investmentAmount").should("have.value", "");
    });
  });

  // temp skip til new graphql mocks are set up
  xdescribe("inpaas paper portfolio", () => {
    it("should be able to rebalance", () => {
      cy.visit(`${baseUrl}/portfolios/external/mock-portfolio-id`).then(
        window => {
          // Reference global instances set in "src/__mocks__/browser.ts".
          const { worker } = window.msw;
          setupMocks(worker);
        }
      );
      cy.wait(5_000);
      cy.get("[data-testid=rebalance-edit-button]").click();
      cy.url().should(
        "eq",
        `${baseUrl}/inpaas/goals/rebalance?portfolioType=EXTERNAL&portfolioId=mock-portfolio-id`
      );
      cy.get("[data-testid=NumberInput-investmentAmount]")
        .should(
          "have.value",
          Decimal.format(mockProposal.proposalRequest.investmentAmount)
        )
        .should("have.class", "validated");
      if (mockProposal.proposalRequest.goal.income !== undefined)
        cy.get("[data-testid=NumberInput-targetIncome]")
          .should(
            "have.value",
            Decimal.format(mockProposal.proposalRequest.goal.income ?? 0)
          )
          .should("have.class", "validated");
      // @ts-expect-error
      else if (mockProposal.proposalRequest.goal.yield !== undefined) {
        cy.get("[data-testid=Inpaas-Target-Field-Switch]").click();
        cy.get("[data-testid=NumberInput-targetYield]")
          .should(
            "have.value",
            // @ts-expect-error
            Decimal.format(mockProposal.proposalRequest.goal.yield)
          )
          .should("have.class", "validated");
      }

      cy.get("[data-testid=NumberInput-investmentAmount]")
        .clear()
        .type("20000000");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      const rebalanceReq: RebalanceProposalRequest = {
        constraints: {
          minimumWeight: 0.05,
          maximumWeight: 0.3
        },
        goal: {
          // @ts-expect-error
          yield: 7.199999999999999
        },
        updateInvestmentAmount: {
          action: Action.ADD,
          amount: 100_000
        }
      };
      cy.wait("@rebalance-proposal").then(xhr => {
        assert.deepEqual(xhr.request.body, rebalanceReq);
      });
      cy.get("[data-testid=PortfolioReview-AppBottomNav-SaveOrUpdate]")
        .should("have.text", "Update Paper")
        .click();
      cy.get("#name")
        .should("have.value", "MOCK INPAAS PORTFOLIO")
        .clear()
        .type("MOCK INPAAS PORTFOLIO -UPDATED");
      cy.get("[data-testid=continue-button]").click();

      cy.wait("@create-update-external-portfolio").then(xhr => {
        if (isPortfolioObject(xhr.request.body)) {
          assert.equal(xhr.request.body.name, "MOCK INPAAS PORTFOLIO -UPDATED");
        }
      });
      const replacePortfolioMapping: CreateOrReplacePortfolioMappingRequest = {
        portfolioType: PortfolioType.EXTERNAL,
        proposalId: "mock-rebalanced-proposal-id"
      };
      cy.wait("@create-replace-proposal-mapping").then(xhr => {
        assert.match(
          xhr.url,
          /\/apis\/income-portfolios\/v1\/portfolio-mappings\/mock-portfolio-id/
        );
        assert.deepEqual(xhr.request.body, replacePortfolioMapping);
      });
      cy.url().should("eq", `${baseUrl}/portfolios/external/mock-portfolio-id`);
      cy.get("h1").should("have.text", "MOCK INPAAS PORTFOLIO -UPDATED");
      cy.get("[data-testid=External-Portfolio-Header-Options]");
    });
    it("should go straight to execution flow if proposal not stale", () => {
      cy.visit(`${baseUrl}/portfolios/external/mock-portfolio-id`, {
        onLoad: window => {
          // Reference global instances set in "src/__mocks__/browser.ts".
          const { worker } = window.msw;
          setupMocks(worker);
        }
      });
      cy.get("[data-testid=invest-button]").click();
      cy.url().should("eq", `${baseUrl}/execute-portfolio/investors`);
    });
    // TODO: Add graphQL mock for stale proposal test
    xit("should trigger confirm window when investing with stale proposal", () => {
      cy.visit(`${baseUrl}/portfolios/external/mock-stale-portfolio-id`, {
        onLoad: window => {
          // Reference global instances set in "src/__mocks__/browser.ts".
          const { worker } = window.msw;
          setupMocks(worker);
        }
      });
      cy.get("[data-testid=invest-button]").click();
      cy.get("[data-testid=PortfolioDisplay-InvestModal-Proposal]");
      cy.url().should("not.eq", `${baseUrl}/execute-portfolio/investors`);
    });
  });
});
