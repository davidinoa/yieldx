/* eslint-disable cypress/no-unnecessary-waiting */
import priceAssetHandler from "../../src/mock-requests/prices/priceAssetHandler";

describe("BestFit", () => {
  const { baseUrl } = Cypress.config();
  const bestFitUrl = `${baseUrl}/best-fit`;
  const qualityUrl = `${bestFitUrl}/preferences/quality`;
  const maturityUrl = `${bestFitUrl}/preferences/maturity`;
  const weightingUrl = `${bestFitUrl}/preferences/weighting`;
  const esgUrl = `${bestFitUrl}/preferences/esg`;
  const quantityUrl = `${bestFitUrl}/preferences/quantity`;
  const investmentUrl = `${bestFitUrl}/preferences/investment`;
  const portfolioReviewUrl = `${baseUrl}/best-fit/portfolio-review`;

  beforeEach(() => {
    cy.server();
    cy.route({
      url: "/iam/api/v1/users/current-user",
      response: {
        user: {
          createdAt: "2020-01-15T15:25:22.271918Z",
          email: "david@bondhouse.com",
          first: "David",
          id: "auth0|5e1f2ee24d58ca0e75dcbae5",
          institutionId: "adbedc86-e795-4334-b1bd-7cbdf1fbe3bf",
          last: "Inoa",
          terms: true,
          updatedAt: "2020-05-21T17:06:21.669708Z",
          userType: "ADMIN"
        }
      }
    }).as("current-user");
    cy.route({
      method: "GET",
      url: "/apis/rover-preferences/v1/users/*/watchlist",
      response: { data: { watchlist: [] } }
    });

    cy.route("POST", "**/apis/rover-optimizer/**").as("rover-optimizer");

    cy.route({
      method: "POST",
      url: "/apis/prices/v1/_price-asset",
      response: { prices: [] }
    }).as("_prices");

    cy.route({
      method: "POST",
      url: "/apis/rover-whitelist/v1/whitelists/_generate-best-fit"
    }).as("generate-bestfit");

    cy.route("POST", "**/apis/rover-portfolio-analyzer/**").as(
      "rover-portfolio-analyzer"
    );
    cy.route("/apis/rover-preferences/v1/users/*/cart").as("cart");
    cy.route({
      method: "GET",
      url: "/apis/investor/v1/investors"
    }).as("investors");
    cy.route({
      method: "POST",
      url: "/apis/prices/v1/_price-asset"
    }).as("prices");

    cy.route({
      url:
        "http://localhost:3000/apis/rover-universe/v1/institutions/*/inventories",
      response: { inventories: [] }
    }).as("rover-inventories");
    cy.route("POST", "apis/rover-portfolio-analyzer/v1/_project-cash-flows").as(
      "cashflow-projections"
    );
    cy.route({
      url: "/iam/api/v1/institutions/*/inventories",
      response: { inventories: [] }
    }).as("iam-inventories");
  });

  describe("navigation", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "/iam/api/v1/institutions/*/inventories",
        response: {
          inventoryMapping: {}
        }
      }).as("inventory-mapping");
    });

    it("can be entered via the sidebar", () => {
      cy.visit("/");
      cy.contains("BestFit", {
        timeout: 20_000
      }).click();
      cy.contains("Start BestFit").click();

      cy.url().should("eq", qualityUrl);
    });

    it("can be entered via homepage links", () => {
      cy.visit("/");
      cy.wait("@inventory-mapping");
      cy.contains(".link-card-content", "BestFit").contains("Open app").click();
      cy.contains("Start BestFit").click();
      cy.url().should("eq", qualityUrl);
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
    });
  });

  describe("credit quality step", () => {
    it("should not contain a previous button", () => {
      cy.visit(qualityUrl);

      cy.get("[data-testid=AppBottomNav-BackButton]").should("not.exist");
    });

    it("disables continue button until a credit quality option is selected", () => {
      cy.visit(qualityUrl);

      cy.get("[data-testid=AppBottomNav-NextButton]", {
        timeout: 20000
      }).should("be.disabled");
      cy.get("[data-testid=investment-grade-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
    });

    it("should have mutually exclusive options", () => {
      cy.visit(qualityUrl);

      const highestQuality = () =>
        cy.get("[data-testid=highest-quality-option]", {
          timeout: 20_000
        });
      const investmentGrade = () =>
        cy.get("[data-testid=investment-grade-option]");
      const highYield = () => cy.get("[data-testid=high-yield-option]");

      highestQuality().click().should("have.attr", "data-selected", "true");
      investmentGrade().should("have.attr", "data-selected", "false");
      highYield().should("have.attr", "data-selected", "false");

      investmentGrade().click().should("have.attr", "data-selected", "true");
      highestQuality().should("have.attr", "data-selected", "false");
      highYield().should("have.attr", "data-selected", "false");

      highYield().click().should("have.attr", "data-selected", "true");
      highestQuality().should("have.attr", "data-selected", "false");
      investmentGrade().should("have.attr", "data-selected", "false");
    });
  });

  describe("maturity step", () => {
    beforeEach(() => {
      cy.visit(qualityUrl);

      cy.get("[data-testid=investment-grade-option]", {
        timeout: 20_000
      }).click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
    });

    it("should follow the preferences step", () => {
      cy.url().should("eq", maturityUrl);
    });

    it("should contain a previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").should("exist");
    });

    it("should navigate back to the quality step when clicking the previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").click();
      cy.url().should("equal", qualityUrl);
    });
  });

  describe("weighting step", () => {
    beforeEach(() => {
      cy.visit(qualityUrl);

      cy.get("[data-testid=investment-grade-option]", {
        timeout: 20_000
      }).click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
    });

    it("should follow the quality and maturity steps", () => {
      cy.url().should("eq", weightingUrl);
    });

    it("should contain a previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").should("exist");
    });

    it("disables continue button until a weighting option is selected", () => {
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.get("[data-testid=maximize-yield-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
    });

    it("should navigate back to the maturity step when clicking the previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").click();
      cy.url().should("equal", maturityUrl);
    });

    it("should have mutually exclusive options", () => {
      const maximizeYield = () => cy.get("[data-testid=maximize-yield-option]");
      const minimizeRisk = () => cy.get("[data-testid=minimize-risk-option]");
      const balance = () => cy.get("[data-testid=balance-option]");

      maximizeYield().click().should("have.attr", "data-selected", "true");
      minimizeRisk().should("have.attr", "data-selected", "false");
      balance().should("have.attr", "data-selected", "false");

      minimizeRisk().click().should("have.attr", "data-selected", "true");
      maximizeYield().should("have.attr", "data-selected", "false");
      balance().should("have.attr", "data-selected", "false");

      balance().click().should("have.attr", "data-selected", "true");
      maximizeYield().should("have.attr", "data-selected", "false");
      minimizeRisk().should("have.attr", "data-selected", "false");
    });
  });

  describe("ESG step", () => {
    beforeEach(() => {
      cy.visit(qualityUrl);
      cy.get("[data-testid=investment-grade-option]", {
        timeout: 20_000
      }).click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=maximize-yield-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
    });

    it("should follow the quality, maturity and weighting steps", () => {
      cy.url().should("eq", esgUrl);
    });

    it("should contain a previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").should("exist");
    });

    it("should navigate back to the weighting step when clicking the previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").click();
      cy.url().should("equal", weightingUrl);
    });
  });

  describe("quantity step", () => {
    beforeEach(() => {
      cy.visit(qualityUrl);

      cy.get("[data-testid=investment-grade-option]", {
        timeout: 20_000
      }).click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=maximize-yield-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
    });

    it("should follow the quality, maturity, weighting and ESG steps", () => {
      cy.url().should("eq", quantityUrl);
    });

    it("should contain a previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").should("exist");
    });

    it("should navigate back to the ESG step when clicking the previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").click();
      cy.url().should("equal", esgUrl);
    });
  });

  describe("investment step", () => {
    beforeEach(() => {
      cy.visit(qualityUrl);
      cy.get("[data-testid=investment-grade-option]", {
        timeout: 20_000
      }).click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=maximize-yield-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
    });

    it("should follow the quality, maturity, weighting, ESG and quantity steps", () => {
      cy.url().should("eq", investmentUrl);
    });

    it("should contain a previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").should("exist");
    });

    it("should navigate back to the quantity step when clicking the previous button", () => {
      cy.get("[data-testid=AppBottomNav-BackButton]").click();
      cy.url().should("equal", quantityUrl);
      cy.findByRole("textbox").type("30");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.url().should("eq", investmentUrl);
      // cy.findByText(/75/).should("be.visible");
    });
  });

  describe("e2e", () => {
    const landingUrl = `${baseUrl}/best-fit`;

    beforeEach(() => {
      cy.visit(landingUrl, {
        onLoad: window => {
          const { worker } = window.msw;
          worker.use(priceAssetHandler);
        }
      });
    });

    it("it allows execution", () => {
      cy.visit("/best-fit/preferences/quality");
      cy.get('[data-testid="investment-grade-option"] > b', {
        timeout: 30_000
      }).click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=balance-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=exclude-sector-option]").click();
      cy.get("[data-testid=telephone-option]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.wait("@rover-optimizer");
      cy.wait("@rover-portfolio-analyzer");
      cy.wait("@prices");
      cy.wait("@cashflow-projections");
      cy.url().should("eq", portfolioReviewUrl, { timeout: 30_000 });
      // cy.findByRole("button", { name: /pdf/i }).should("be.enabled");
      // cy.get("[data-testid=Card-EditLink]").click();
      // cy.get("[data-testid=AppBottomNav-NextButton]").click();
      // cy.get("[data-testid=duration-toggle]").click();
      // cy.get("[data-testid=slider]").type("8");
      // cy.get("[data-testid=slider]").click();
      // cy.get("[data-testid=AppBottomNav-NextButton]").click();
      // cy.get("[data-testid=AppBottomNav-NextButton]").click();
      // cy.get("[data-testid=oil-and-gas-option]").click();
      // cy.get("[data-testid=AppBottomNav-NextButton]").click();
      // cy.get("[data-testid=AppBottomNav-NextButton]").click();
      // cy.get("[data-testid=NumberInput-investment]").click();
      // cy.get("[data-testid=NumberInput-investment]").click();
      // cy.get("[data-testid=NumberInput-investment]").type("250,000.00");
      // cy.get("[data-testid=AppBottomNav-NextButton]").click();
      // cy.wait("@rover-optimizer");
      // cy.wait("@rover-portfolio-analyzer");
      // cy.wait("@prices");
      // cy.wait("@cashflow-projections");
      // cy.url().should("eq", portfolioReviewUrl);
    });
  });
});
