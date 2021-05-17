import { setupServer } from "msw/native";
import { client } from "providers/graphql";
import { render, screen, waitForElementToBeRemoved } from "test/utils";
import SelectInvestorCard from "containers/PortfolioExecution/SelectInvestor/SelectInvestorList/SelectInvestorCard/SelectInvestorCard";
import { getInvestorName } from "containers/PortfolioExecution/SelectInvestor/SelectInvestorList/SelectInvestorList";
import React from "react";
import {
  ExternalEntityType,
  InvestorType,
  PortfolioStatus
} from "providers/graphql/hooks";
import createMockHandler from "mock-requests/graphql/createMockHandler";
import mockUser from "test/mock-data/mockUser";

const INVESTOR_EXAMPLE = {
  investorType: InvestorType.Individual,
  id: "1234",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  investorInfo: { givenName: "Frank", familyName: "Abagnale" }
};
const server = setupServer();
describe("SelectInvestorCard", () => {
  beforeAll(() => server.listen());
  beforeEach(() => client.clearStore());
  afterAll(() => server.close());

  test("Available cash > desired portfolio should not be disabled", async () => {
    server.use(
      createMockHandler({
        iamGetCurrentUser: mockUser({}),
        positionManagementGetPortfolio: {
          portfolio: {
            id: "mock-cash-id",
            createdAt: "11/16/2020",
            updatedAt: "11/16/2020",
            currency: "USD",
            name: "CASH_ONLY_PORTFOLIO",
            status: PortfolioStatus.Ready,
            accountNumber: null,
            app: null,
            metadata: null,
            description: null,
            positions: [
              {
                id: "CASH-USD",
                assetId: "USD",
                quantity: 100_000,
                settled: 100_000,
                portfolioId: "mock-cash-id",
                metadata: null,
                costBasis: null,
                createdAt: null,
                tradeDate: null,
                unsettled: null,
                updatedAt: null,
                __typename: "Position2"
              }
            ],
            __typename: "Portfolio3"
          },
          __typename: "GetPortfolioResponse2"
        },
        investorGetDeliveryInstructionsById: {
          deliveryInstructions: [
            {
              cashOnly: true,
              id: "mock-id",
              createdAt: "2020-11-13T14:27:29.298880Z",
              investorId: "1234",
              portfolioId: "mock-cash-id",
              metadata: null,
              instructions: [
                {
                  externalEntityId: "mock-id",
                  externalEntityType: ExternalEntityType.Apex,
                  __typename: "ExternalEntity"
                }
              ],
              updatedAt: "2020-11-13T14:27:29.298880Z",
              __typename: "PortfolioDeliveryInstruction"
            }
          ],
          __typename: "GetDeliveryInstructionsByInvestorIdResponse"
        }
      })
    );
    render(
      <SelectInvestorCard
        investor={INVESTOR_EXAMPLE}
        name="Frank Abagnale"
        onSelect={() => null}
        isSelected={false}
        portfolioValue={50_000}
      />,
      {
        route: "/yieldx/execute-portfolio/investors"
      }
    );

    expect(getInvestorName(INVESTOR_EXAMPLE)).toBe("Frank Abagnale");
    expect(await screen.findByText(/Frank Abagnale/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));
    expect(await screen.findByText(/\$100,000\.00/i)).toBeInTheDocument();
    const button = await screen.findByTestId("select-investor-1234");
    expect(button.getAttribute("disabled")).toBe(null);
  });

  test("Available cash < desired portfolio should be disabled", async () => {
    server.use(
      createMockHandler({
        iamGetCurrentUser: mockUser({}),
        positionManagementGetPortfolio: {
          portfolio: {
            id: "mock-cash-id",
            createdAt: "11/16/2020",
            updatedAt: "11/16/2020",
            currency: "USD",
            name: "CASH_ONLY_PORTFOLIO",
            status: PortfolioStatus.Ready,
            positions: [
              {
                id: "CASH-USD",
                assetId: "USD",
                quantity: 1_000,
                portfolioId: "mock-cash-id"
              }
            ]
          },
          __typename: "GetPortfolioResponse2"
        },
        investorGetDeliveryInstructionsById: {
          deliveryInstructions: [
            {
              cashOnly: true,
              id: "mock-id",
              createdAt: "11/16/2020",
              investorId: "1234",
              portfolioId: "mock-cash-id",
              metadata: null,
              instructions: [
                {
                  externalEntityId: "mock-id",
                  externalEntityType: ExternalEntityType.Apex,
                  __typename: "ExternalEntity"
                }
              ],
              updatedAt: "11/16/2020"
            }
          ],
          __typename: "GetDeliveryInstructionsByInvestorIdResponse"
        }
      })
    );
    const { findByTestId } = render(
      <SelectInvestorCard
        investor={INVESTOR_EXAMPLE}
        name="Frank Abagnale"
        onSelect={() => null}
        isSelected={false}
        portfolioValue={50000}
      />,
      {
        route: "/yieldx/execute-portfolio/investors"
      }
    );
    const button = await findByTestId("select-investor-1234");
    expect(button).toBeDisabled();
  });
});
