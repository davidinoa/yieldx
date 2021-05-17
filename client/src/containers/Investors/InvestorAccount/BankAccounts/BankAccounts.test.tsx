import React from "react";
import { Route } from "react-router-dom";
import { render } from "../../../../test/utils";
import BankAccounts from "./BankAccounts";
import { TD_SAVINGS_ACTIVE } from "../../../../__mocks__/@bondhouse/investor/__fixtures__";

jest.mock("../../../../components/NoItemsMessage", () => ({
  __esModule: true,
  default: () => <div data-testid="no-items-message"/>
}));

const mockBanks = [TD_SAVINGS_ACTIVE];

describe("investor bank list tests", () => {

  test("should render bank list", async () => {
    const { container, queryByTestId } = render(<Route>
      <BankAccounts investorId="mockId" data={mockBanks}/>
    </Route>, {
      route: "/yieldx/investors/investorId#linked-banks"
    });
    const noItems = queryByTestId("no-items-message");
    expect(noItems).not.toBeInTheDocument();
    expect(container).toBeDefined();
  });

  test("should show no items message when no data is passed", async () => {
    const { container, queryByTestId } = render(<Route>
      <BankAccounts investorId="mockId"/>
    </Route>, {
      route: "/yieldx/investors/investorId#linked-banks"
    });
    const noItems = queryByTestId("no-items-message");
    expect(noItems).toBeInTheDocument();
    expect(container).toBeDefined();
  });
});
