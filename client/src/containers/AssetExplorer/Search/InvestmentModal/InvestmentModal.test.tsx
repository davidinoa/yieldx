import React from "react";
import { render, screen } from "test/utils";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import InvestmentModal from "./InvestmentModal";

describe("InvestmentModal", () => {
  render(
    <InvestmentModal
      show
      onSubmitInvestment={jest.fn}
      onHide={jest.fn}
      portfolio={mockYieldXPortfolio}
    />
  );

  test("init", () => {
    expect(screen.findAllByText("")).toBeDefined();
  });
});
