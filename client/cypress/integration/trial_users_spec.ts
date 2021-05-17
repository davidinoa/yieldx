import { GetCurrentUserResponse, UserType } from "@bondhouse/iam";

describe("Trial users", () => {
  const { baseUrl } = Cypress.config();
  beforeEach(() => {
    cy.server();
    const response: GetCurrentUserResponse = {
      user: {
        institutionId: "mock-institution-id",
        id: "mock-user-id",
        userType: UserType.TRIAL,
        first: "mock",
        last: "user",
        policies: [],
        email: "mock@email.com",
        terms: true
      }
    };
    cy.route({
      method: "GET",
      url: "/iam/api/v1/users/current-user",
      response
    }).as("current-user");
    cy.route({
      method: "GET",
      url: "/apis/rover-preferences/v1/users/mock-user-id/cart",
      response: {
        cart: {
          id: "mock-user-id",
          items: []
        }
      }
    }).as("cart");
    cy.route("/iam/api/v1/institutions/*/inventories").as("inventory-mapping");
  });

  it("Cannot be entered via any homepage links", () => {
    // Checking for dashboard link
    cy.visit(`${baseUrl}/`);
    cy.wait("@cart");
    cy.wait("@inventory-mapping");
    cy.get("[data-testid=LinkCard-Button-OpenInvestmentAccounts]").should(
      "not.exist"
    );

    // Checking for side bar link
    cy.get("[data-testid=SideMenu-Link-Investors]").should("not.exist");
    cy.get("[data-testid=user-icon]").click();

    cy.get("[data-testid=Nav-Item-Investor-accounts]").should("not.exist");
  });

  it("Cannot navigate to investor routes", () => {
    // Checking for dashboard link
    cy.visit(`${baseUrl}/investors`);
    cy.wait("@cart");
    cy.wait("@inventory-mapping");
    cy.url().should("eq", `${baseUrl}/`);
    cy.visit(`${baseUrl}/investors/create`);
    cy.url().should("eq", `${baseUrl}/`);
  });
});
