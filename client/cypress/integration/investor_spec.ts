import { rest, setupWorker } from "msw";
import {
  CreateInvestorCashPortfolioResponse,
  ExternalEntityType
} from "@bondhouse/position-management";
import { CreateInvestorMappingResponse } from "@bondhouse/iam";
import { CreateInvestorResponse } from "@bondhouse/investor";
import { defaultGetInvestor } from "../../src/mock-requests/investors/defaultGetInvestor";
import { defaultGetInvestorInstructions } from "../../src/mock-requests/investors/defaultGetInvestorInstructions";
import { defaultGetApexAccount } from "../../src/mock-requests/investors/defaultGetApexAccount";
import { INDIVIDUAL_INVESTOR } from "../../src/__mocks__/@bondhouse/investor/__fixtures__";
import { getCashPortfolioHandler } from "../../src/mock-requests/position-management/getCashPortfolio";
import createPortfolioObject from "../../src/mock-requests/position-management/util/createMockPortfolio";

describe("Create investor flow", () => {
  const { baseUrl } = Cypress.config();
  const createUrl = `${baseUrl}/investors/create/investor-type`;
  const investorListUrl = `${baseUrl}/investors`;
  const personalInfoUrl = `${baseUrl}/investors/create/personal-info`;
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
      url: "/apis/apex/v1/investors/*/account"
    }).as("apex-account");
    cy.route({
      method: "GET",
      url: "/apis/investor/v1/investors"
    }).as("investors");
    cy.route({
      method: "POST",
      url: "/apis/investor/v1/investors"
    }).as("create-investor");
  });

  describe("Should be able to reach the end of the new individual investor flow", () => {
    it("simple individual flow", () => {
      // Open Create Investor
      cy.visit(createUrl, {
        onLoad: window => {
          // Reference global instances set in "src/__mocks__/browser.ts".
          const { worker } = window.msw;
          setupInvestorMocks(worker);
        }
      });
      cy.wait("@current-user");
      cy.url().should("eq", createUrl);

      // Select investor type
      cy.get("[data-testid=individual]", { timeout: 10000 }).click();

      // Personal info
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.get("#first").type("0test0");
      cy.get("#last").type("0last0");
      cy.get("#ssn").type("666009999");
      cy.get("#birthdate").type("07251995");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Contact info
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.get("#email").type("test@test.com");
      cy.get("#address").type("2531 86th Street");
      cy.get("#city").type("Brooklyn");
      cy.contains("Select a state").click();
      cy.contains("NY").click();
      cy.get("#zip").type("11214");
      cy.get("#phone").type("3471234567");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Employment info
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("STUDENT").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Public trade info
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("No").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Sec/finra
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("No").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // public-person
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("No").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Trusted contact
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // investment profile
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("Select an objective").click();
      cy.contains("Income").click();
      cy.contains("Select an experience level").click();
      cy.contains("None").click();
      cy.contains("Select a liquidity need").click();
      cy.contains("Somewhat important").click();
      cy.contains("Select a time horizon").click();
      cy.contains("Short").click();
      cy.contains("Select an annual income range").click();
      cy.contains("$100k - $200k").click();
      cy.contains("Select a liquid net worth").click();
      cy.get(`[data-testid="dropdown-investmentProfile-liquidNetWorthUSD"]`)
        .contains("$100k - $200k")
        .click();
      cy.contains("Select a total net worth").click();
      cy.get(`[data-testid="dropdown-investmentProfile-totalNetWorthUSD"]`)
        .contains("$100k - $200k")
        .click();
      cy.contains("Select a risk tolerance").click();
      cy.contains("High").click();
      cy.get(`#investmentProfile\\.federalTaxBracketPercent`).type("1200");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // crs agreement
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains(
        "I confirm that I've read the Client Relationship Summary above"
      ).click();
      cy.contains("I agree to electronic signatures and delivery").click();
      cy.get("#digitalSignature").type("0test0 0test0");
      cy.get("#signedDate").type("090920");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // terms and conditions
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("I agree to the terms & conditions").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Click edit personal info and check that fields are entered
      cy.get(`[data-testid="edit-Personal-information"]`).click();
      cy.url().should("eq", personalInfoUrl);
      cy.get("#first").should("have.value", "0test0");
      cy.get("#last").should("have.value", "0last0");
      cy.get("#ssn").should("have.value", "666-00-9999");
      cy.get("#birthdate").should("have.value", "07/25/1995");

      // Navigate back to the end to submit
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      cy.wait("@create-investor");
      cy.url().should("eq", investorListUrl);
    });
  });

  describe.skip("Should be able to reach the end of the new organizational investor flow", () => {
    it("simple organizational flow", () => {
      cy.visit(createUrl);
      cy.wait("@current-user");
      cy.url().should("eq", createUrl);

      // Select investor type
      cy.get("[data-testid=organization]", { timeout: 10000 }).click();

      // Organizational Info
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.get("#name").type("Test Org");
      cy.get("#taxId").type("222334444");
      cy.contains("Select an entity type").click();
      cy.contains("C-Corporation").click();
      cy.contains("Select an account holder type").click();
      cy.contains("Institutional Customer").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Organization representative information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.get("#first").type("0test");
      cy.get("#last").type("0investor");
      cy.get("#ssn").type("666009999");
      cy.get("#birthdate").type("07251995");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Organizations contact information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.get("#email").type("test@test.com");
      cy.get("#phone").type("2566747342");
      cy.get("#address").type("5401 Veterans Memorial Dr");
      cy.get("#address2").type("Address 2");
      cy.get("#city").type("Adamsville");
      cy.contains("Select a state").click();
      cy.contains("AL").click();
      cy.get("#zip").type("30005");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Public trade information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("No").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // SEC/FINRA information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("No").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Public official information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("No").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Issuers communication
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Select investment profile
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("Select a liquidity need").click();
      cy.contains("Very important").click();
      cy.contains("Select a time horizon").click();
      cy.contains("Average").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // W-9 information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.get("#digitalSignature").type("0test test");
      cy.get("#digitalSignatureDate").type("090920");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Organization background information (W-9 upload)
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("No").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Organization background information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Legal customer exemption verification
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Beneficial ownership information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("Select an industrial classification").click();
      cy.contains("Agriculture, Forestry, and Fishing").click();
      cy.contains("first name").siblings("input").type("test0");
      cy.contains("last name").siblings("input").type("test0");
      cy.contains("date of birth").siblings("input").type("072595");
      cy.contains("ssn/tin").siblings("input").type("666009999");
      cy.get("#street").type("Dr Street");
      cy.get("#street").siblings("button").click();
      cy.contains("city").siblings("input").type("Adamsville");
      cy.contains("Select a state").click();
      cy.contains("AL").click();
      cy.contains("zip").siblings("input").type("30005");
      cy.get(":nth-child(9) button").click();
      cy.get("[data-testid=officer-name-givenName-input-text]").type("0test");
      cy.get("[data-testid=officer-name-familyName-input-text]").type("0test");
      cy.get("[data-testid=officer-dateOfBirth-input-text]").type("072595");
      cy.get("[data-testid=officer-socialSecurityNumber-input-text]").type(
        "666009999"
      );
      cy.get("[data-testid=street2-input-group-text]").type("Dr Street");
      cy.get("[data-testid=street2-input-group-text]")
        .siblings("button")
        .click();
      cy.get("[data-testid=officer-address-city-input-text]").type("Brooklyn");
      cy.get("[data-testid=dropdownToggle-officer-address-state]").click();
      cy.get("[data-testid=dropdown-officer-address-state]")
        .contains("AL")
        .click();
      cy.get("[data-testid=officer-address-postalCode-input-text]").type(
        "30005"
      );
      cy.get("[data-cy=officer-add]").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Additional information
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("No").click();
      cy.contains("Select an activity").click();
      cy.contains("Active Trading").click();
      cy.contains("Select a frequency").click();
      cy.contains("Frequent").click();
      cy.get(
        "[data-testid=accountActivity-initialDepositAmount-input-text]"
      ).type("3000");
      cy.get(
        "[data-testid=accountActivity-initialDepositSource-input-text]"
      ).type("depo source");
      cy.contains("Certify that entity does not issue bearer shares").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Accept account agreement
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.get(
        "[data-testid=cashAccountAgreement-authorizedOfficerName-input-text]"
      ).type("test0");
      cy.get(
        "[data-testid=cashAccountAgreement-authorizedOfficerTitle-input-text]"
      ).type("officer");
      cy.contains("Does Authorized Officer agree to terms").click();
      cy.get(
        "[data-testid=cashAccountAgreement-secretaryName-input-text]"
      ).type("test");
      cy.contains("Does Secretary agree to terms?").click();
      const fileName = "pdfs/test-pdf.pdf";
      cy.get('[data-cy="file-input"]').attachFile(fileName);
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // BondHouse customer relationship summary
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains(
        "I confirm that I've read the Client Relationship Summary above"
      ).click();
      cy.contains("I agree to electronic signatures and delivery.").click();
      cy.get("[data-testid=digitalSignature-input-text").type("test0");
      cy.get("[data-testid=signedDate-input-text").type("090920");
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();

      // Accept the term & conditions
      cy.get("[data-testid=AppBottomNav-NextButton]").should("be.disabled");
      cy.contains("I agree to the terms & conditions").click();
      cy.get("[data-testid=AppBottomNav-NextButton]").should("not.be.disabled");
      cy.get("[data-testid=AppBottomNav-NextButton]").click();
    });
  });
});

function setupInvestorMocks(worker: ReturnType<typeof setupWorker>) {
  const mockCustomHandlers = [
    defaultGetInvestor,
    defaultGetInvestorInstructions,
    defaultGetApexAccount,
    rest.post("/apis/investor/v1/investors", (req, res, ctx) => {
      const response: CreateInvestorResponse = {
        investor: {
          ...INDIVIDUAL_INVESTOR,
          id: "mock-investor-id",
          createdAt: new Date().toISOString()
        }
      };
      return res(ctx.status(200), ctx.json(response));
    }),
    rest.post("/iam/api/v1/institutions/*/investors", (req, res, ctx) => {
      const response: CreateInvestorMappingResponse = {
        investorMapping: {
          institutionId: "mock-institution-id",
          investorId: "mock-investor-id"
        }
      };
      return res(ctx.status(200), ctx.json(response));
    }),
    getCashPortfolioHandler({
      portfolioId: "mock-cash-portfolio-id",
      cashAvailable: 900_000
    }),
    rest.post(
      "/apis/position-management/v1/investors/*/portfolios/cash-portfolio",
      (req, res, ctx) => {
        const response: CreateInvestorCashPortfolioResponse = {
          portfolio: createPortfolioObject({
            name: "CASH_ONLY_PORTFOLIO",
            id: "mock-cash-portfolio-id",
            positions: [
              {
                id: "CASH-USD",
                assetId: "USD",
                quantity: 900_000,
                portfolioId: "mock-cash-portfolio-id",
                settled: 900_000,
                unsettled: 0,
                createdAt: "2020-09-16T22:58:00.541907Z",
                updatedAt: "2020-09-16T22:58:00.541907Z",
                metadata: {}
              }
            ]
          }),
          externalAccounts: [
            {
              externalEntityId: "mock-apex-id",
              externalEntityType: ExternalEntityType.APEX
            }
          ]
        };
        return res(ctx.status(200), ctx.json(response));
      }
    )
  ];
  worker.use(...mockCustomHandlers);
}
