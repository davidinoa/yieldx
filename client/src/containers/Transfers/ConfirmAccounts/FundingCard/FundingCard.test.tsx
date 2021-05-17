import React from "react";
import { render } from "../../../../test/utils";
import FundingCard from "./FundingCard";
import { TD_SAVINGS_ACTIVE } from "../../../../__mocks__/@bondhouse/investor/__fixtures__";

describe("testing funding card", () => {

  test("testing disabled change funding button", async () => {
    const { container, queryByText, rerender } = render(<FundingCard blockChange changeLink="/"/>, {
      route: "/yieldx/cash-account/investors/investorId/deposit/funding-source"
    });
    const changeLink = queryByText("Change funding source");
    expect(container).toBeDefined();
    expect(changeLink).toHaveClass("disabled");

    rerender(<FundingCard blockChange={false} changeLink="/"/>);
    expect(changeLink).not.toHaveClass("disabled");
  });

  test("should render wire transfer details if no bank account provided", async () => {
    const { container, queryByText, rerender } = render(<FundingCard blockChange changeLink="/"/>, {
      route: "/yieldx/cash-account/investors/investorId/deposit/funding-source"
    });
    expect(container).toBeDefined();

    let bankTitle = queryByText("bank account");
    let wireTitle = queryByText("wire transfer");

    expect(bankTitle).not.toBeInTheDocument();
    expect(wireTitle).toBeInTheDocument();

    rerender(<FundingCard blockChange changeLink="/" bankAccount={TD_SAVINGS_ACTIVE}/>);
    bankTitle = queryByText("bank account");
    wireTitle = queryByText("wire transfer");
    expect(bankTitle).toBeInTheDocument();
    expect(wireTitle).not.toBeInTheDocument();
  });
});
