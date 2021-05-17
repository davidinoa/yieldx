import React from "react";
import { render, screen } from "test/utils";
import { mockComparisons } from "components/InpaasAnalytics/ExpenseRatioComparison/calculateCashSaved.test";
import RiskComparison from "components/InpaasAnalytics/RiskComparison/RiskComparison";

describe("RiskComparison", () => {
  it("Should match snapshot", () => {
    const { asFragment } = render(
      <RiskComparison
        comparison={mockComparisons.find(it => it.comparisonType === "Risk")}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render correct risk reduction percentage", () => {
    render(
      <RiskComparison
        comparison={mockComparisons.find(it => it.comparisonType === "Risk")}
      />
    );
    expect(screen.queryByText("78.57")).toBeInTheDocument();
  });

  it("Should render correct risk reduction bps", () => {
    render(
      <RiskComparison
        comparison={mockComparisons.find(it => it.comparisonType === "Risk")}
      />
    );
    expect(screen.queryByText("836")).toBeInTheDocument();
  });
});
