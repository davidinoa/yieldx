describe("Users", () => {
  beforeEach(() => {
    cy.server();
    cy.route("/iam/api/v1/users/current-user").as("current-user");
    cy.route({ url: "/apis/investor/v1/investors", response: [] }).as(
      "investors"
    );
    cy.route("/iam/api/v1/institutions/*/inventories").as("inventory-mapping");
    cy.route({
      method: "POST",
      url:
        "/iam/api/v1/institutions/e7c0fda9-2af9-47ce-bdd0-648a90224224/users",
      response: {}
    }).as("invitationResponse");
  });

  it("should display a user friendly error when attempting to reset a password", () => {
    cy.visit("/login-security#reset-password");
    cy.wait("@inventory-mapping");
    // cy.wait("@cart");
    cy.get("[data-testid=LoginSecurity_ResetPassword]").should("be.disabled");
  });

  it("should allow invitations only for admin users", () => {
    cy.visit("/users");
    cy.wait("@inventory-mapping");
    cy.findByRole("button", { name: /invite/i }).click();
    cy.findByRole("textbox").type("test4@yieldx.app");
    cy.findByRole("button", { name: "Invite" }).click();
    // TODO: this test doesn't make success assertions
    // cy.findByRole("button", { name: "Invite another user" }).click();
    // cy.findByRole("button", { name: /cancel/i }).click();
  });
});
