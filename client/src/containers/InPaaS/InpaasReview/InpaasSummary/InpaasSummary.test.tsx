import React from "react";
import { render, screen } from "../../../../test/utils";
import InpaasSummary from "./InpaasSummary";

describe("InpaasSummary", () => {
  test("Should render correct info for inpaas review", () => {
    const { asFragment } = render(
      <InpaasSummary
        reviewData={{
          risk: 5,
          actualIncome: 550,
          actualYield: .25,
          actualAllocation: {
            maximumWeight: .25,
            minimumWeight: .03
          },
          maxDrawdown: 30
        }}
      />
    );
    expect(screen.queryAllByTestId("Portfolio-Metric-Card").length).toBe(4);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render correct info for saved inpaas portfolio", () => {
    const { asFragment } = render(
      <InpaasSummary
        savedPortfolioData={{
          targetIncome: 550,
          targetYield: .25,
          actualYield: .30,
          actualIncome: 600,
          risk: 5,
          maxDrawdown: 30,
          expenseRatio: 5
        }}
      />
    );
    expect(screen.queryAllByTestId("Portfolio-Metric-Card").length).toBe(4);
    expect(asFragment()).toMatchSnapshot();
  });
});
