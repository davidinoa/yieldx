/* eslint-disable cypress/no-unnecessary-waiting */
import { createGetInventoryMappingHandler } from "../../src/mock-requests/iam/createGetInventoryMappingHandler";

describe("AssetExplorer", () => {
  const { baseUrl } = Cypress.config();
  const searchUrl = `${baseUrl}/asset-explorer/search`;

  beforeEach(() => {
    cy.server();
    cy.route("/iam/api/v1/users/current-user").as("current-user");
    cy.route("/apis/rover-preferences/v1/users/*/cart").as("cart");
    cy.route("/apis/rover-universe/v1/assets/*").as("get-asset");
    cy.route("POST", "/apis/rover-preferences/v1/users/*/cart/items").as(
      "add-to-cart"
    );
    cy.route("POST", "/apis/search/v1/assets/_search").as("search-assets");
    cy.route("/iam/api/v1/institutions/*/inventories").as("inventory-mapping");
    cy.route("POST", "/apis/rover-universe/v1/assets/_get-assets").as(
      "get-assets"
    );
    cy.route("DELETE", "/apis/rover-preferences/v1/users/*/cart").as(
      "delete-cart"
    );
    cy.route({
      method: "POST",
      url: "/apis/rover-portfolio-analyzer/v1/_analyze-portfolio*"
    }).as("analyze-portfolio");
    cy.route({
      method: "GET",
      url: "/apis/ice-data/v1/cusips/*",
      response: {}
    }).as("ice-data");
    cy.visit("/");
    // https://www.cypress.io/blog/2020/08/17/when-can-the-test-navigate/

    cy.window().then(window => {
      // Reference global instances set in "src/__mocks__/browser.ts".
      const { worker } = window.msw;
      worker.use(createGetInventoryMappingHandler({}));
    });
  });

  it("can be entered via the sidebar", () => {
    cy.location("pathname").should("match", /\/$/);
    cy.wait("@inventory-mapping");
    cy.get("[data-testid=SideMenu-Link-AssetExplorer]").click();
    cy.wait(1000);
    cy.get("[data-testid=LandingPage-StartLink-asset-explorer]").click();

    cy.url().should("eq", searchUrl);
  });

  it("can be entered via homepage links", () => {
    // Open AssetExplorer
    cy.wait("@inventory-mapping");
    cy.contains(".link-card-content", "Asset Explorer", {
      timeout: 20_000
    })
      .contains("Open app")
      .click();
    cy.wait(2000);
    cy.get("[data-testid=LandingPage-StartLink-asset-explorer]").click();

    cy.url().should("eq", searchUrl);
  });

  it("returns results for HYG", () => {
    cy.visit(searchUrl);

    cy.wait("@current-user");
    cy.wait("@current-user");
    cy.wait("@current-user");

    // Filter on ETF products
    cy.get("[data-testid=product-type-dropdown]", {
      timeout: 20_000
    })
      .click()
      .contains("Exchange Traded Funds")
      .click();

    // Search for HYG
    cy.get(".axp-search-input").type("HYG");

    // Verify that search results contain HYG
    cy.contains("iShares iBoxx $ High Yield");
  });

  describe("given an empty cart", () => {
    beforeEach(() => {
      cy.wait("@current-user");
      cy.wait("@cart");

      // Click the cart button
      cy.get("[data-testid=cart-button]").click();

      // Clear it if there are any contents
      cy.get("[data-testid=cart-window-content]").then($content => {
        if ($content.find("[data-testid=empty-cart-header]").length === 0) {
          cy.get("[data-testid=delete-all-button]").click();
          cy.wait("@delete-cart");
        }
      });

      // Close the cart
      cy.get("[data-testid=cart-window-close-button]").click();
    });

    it("disables navigation to Portfolio Builder if cart is empty", () => {
      cy.visit(searchUrl);
      cy.wait("@inventory-mapping");
      cy.get("[data-testid=AppBottomNav-NextButton]", {
        timeout: 20_000
      }).should("be.disabled");
    });

    it("allows navigation to Portfolio Builder once you have an item in your cart", () => {
      cy.route("POST", "/apis/search/v1/assets/_search", "fixture:search").as(
        "search"
      );
      cy.visit(searchUrl);
      cy.wait("@cart");
      // Wait to ensure ag-grid has fully rendered
      cy.get(".ag-center-cols-container .ag-row", { timeout: 20_000 }).should(
        "be.visible"
      );

      // Filter on ETF products
      cy.get("[data-testid=product-type-dropdown]")
        .click()
        .contains("Exchange Traded Funds")
        .click();

      // Wait to ensure ag-grid has fully rendered
      cy.waitFor("ready");

      // Search for HYG
      cy.get(".axp-search-input").type("HYG");

      cy.get(".ag-overlay-loading-center");
      cy.get(".ag-row");
      // Add HYG to your cart
      cy.contains(".ag-row", "iShares iBoxx $ High Yield").should("be.visible");
      cy.wait(2000);
      cy.get("[data-testid=AddToCartButton").first().click();
      cy.wait("@add-to-cart");
      cy.wait("@get-asset");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Enter an investment amount of $100,000
      cy.get("[name=amount]").type("10000000");
      cy.get("[data-testid=continue-button]");
    });
  });

  describe("searching", () => {
    it("should hide illiquid/non-tradable by default", () => {
      cy.visit("/asset-explorer/search");
      cy.location("pathname").should("match", /\/asset-explorer\/search$/);
      cy.wait("@cart");
      cy.findByRole("checkbox").should("be.checked");
      cy.get(".axp-search-input").type("88160RAE1");
      cy.findByText(/no rows/i).should("be.visible");
      cy.findByRole("checkbox", { timeout: 20_000 }).click();
      cy.contains('.ag-row .ag-cell[col-id="name"]', "TSLA").should(
        "be.visible"
      );
      cy.findByRole("checkbox").click();
      cy.findByText(/no rows/i).should("be.visible");
    });
  });
});
