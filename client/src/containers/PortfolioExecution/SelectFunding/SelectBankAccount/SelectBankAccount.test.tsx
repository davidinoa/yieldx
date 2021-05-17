import React from "react";
import { render, RenderResult } from "test/utils";
import SelectBankAccount from "./SelectBankAccount";
import { setupServer } from "msw/node";
import { client } from "providers/graphql";
import createMockHandler from "mock-requests/graphql/createMockHandler";
import { AccountType, LinkedBankAccountStatus } from "providers/graphql/hooks";

jest.mock("components/NoItemsMessage", () => ({
  __esModule: true,
  default: () => <div data-testid="no-portfolios" />
}));

const server = setupServer();

let utils: RenderResult;
describe("test select bank account view", () => {
  beforeAll(() => server.listen());
  afterEach(() => client.clearStore());
  afterAll(() => server.close());
  beforeEach(() => {
    server.use(
      createMockHandler({
        investorGetLinkedBankAccounts: {
          linkedBankAccounts: [
            {
              __typename: "LinkedBankAccount",
              accountType: AccountType.Checking,
              bankName: "mock-bank-name",
              createdAt: "12/18/2020",
              id: "mock-linked-bank-id",
              investorId: "investor-id",
              mask: "4321",
              status: LinkedBankAccountStatus.Active,
              updatedAt: "12/18/2020"
            }
          ]
        }
      })
    );
    utils = render(<SelectBankAccount investorId="mock-investor-id" />, {
      route: "/yieldx/execute-portfolio/funding-source/linked-bank"
    });
  });

  test("should render the component", async () => {
    const { container, queryByTestId } = utils;
    expect(container).toBeInTheDocument();
    const noItemDisplay = queryByTestId(/no-portfolios/i);
    // default mock bank list is one item
    expect(noItemDisplay).not.toBeInTheDocument();
  });
});
