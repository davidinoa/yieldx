import React from "react";
import { AppType } from "@bondhouse/position-management";
import { buildMockPortfolio, render } from "test/utils";
import InpaasAnalytics from "components/InpaasAnalytics/InpaasAnalytics";

const portfolio = buildMockPortfolio({ appType: AppType.INPAAS });

describe("InpaasAnalytics", () => {
  it("Should render", () => {
    const { container } = render(
      <InpaasAnalytics
        positions={portfolio.positions}
        totalMarketValue={portfolio.totalMarketValue}
        cashMarketValue={portfolio.cashMarketValue}
        annualYield={5.102141837493456}
        expenseComparison={{
          comparisonType: "Expense Ratio",
          inpaas: 0.46454842661307716,
          average: 1.04,
          difference: 0.5754515733869229,
          percentageDifference: 55.33188205643489
        }}
        riskComparison={{
          comparisonType: "Risk",
          inpaas: 6.744287242092945,
          average: 12.9,
          difference: 6.155712757907056,
          percentageDifference: 47.7187035496671
        }}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(
      <InpaasAnalytics
        positions={portfolio.positions}
        totalMarketValue={portfolio.totalMarketValue}
        annualYield={5.102141837493456}
        expenseComparison={{
          comparisonType: "Expense Ratio",
          inpaas: 0.46454842661307716,
          average: 1.04,
          difference: 0.5754515733869229,
          percentageDifference: 55.33188205643489
        }}
        riskComparison={{
          comparisonType: "Risk",
          inpaas: 6.744287242092945,
          average: 12.9,
          difference: 6.155712757907056,
          percentageDifference: 47.7187035496671
        }}
        cashMarketValue={portfolio.cashMarketValue}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
