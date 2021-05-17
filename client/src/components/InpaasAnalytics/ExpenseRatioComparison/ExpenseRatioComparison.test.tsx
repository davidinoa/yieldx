import React from "react";
import { render, screen } from "test/utils";
import ExpenseRatioComparison from "components/InpaasAnalytics/ExpenseRatioComparison/ExpenseRatioComparison";
import { mockComparisons } from "components/InpaasAnalytics/ExpenseRatioComparison/calculateCashSaved.test";

describe("ExpenseRatioComparison", () => {
  it("Should render", () => {
    const { container } = render(
      <ExpenseRatioComparison
        comparison={mockComparisons.find(
          it => it.comparisonType === "Expense Ratio"
        )}
        portfolioMarketValue={777_777.77}
      />
    );
    expect(container).toBeInTheDocument();
    expect(screen.queryByText(/EXPENSE RATIO COMPARISON/i)).toBeVisible();
  });

  it("Should render switch with correct options", () => {
    render(
      <ExpenseRatioComparison
        comparison={mockComparisons.find(
          it => it.comparisonType === "Expense Ratio"
        )}
        portfolioMarketValue={777_777.77}
      />
    );
    expect(screen.queryByText(/CASH/i)).toBeVisible();
    expect(screen.queryByText(/BPS/i)).toBeVisible();
  });

  it("Should render correct calculation", () => {
    const { debug } = render(
      <ExpenseRatioComparison
        comparison={mockComparisons.find(
          it => it.comparisonType === "Expense Ratio"
        )}
        portfolioMarketValue={777_777.77}
      />
    );
    debug();
    expect(screen.queryByText("$7,998")).toBeVisible();
    expect(screen.queryByText(/\.\s*73/)).toBeVisible();
  });
  //
  // it("Should render a visible comparison chart", async () => {
  //   render(
  //     <div style={{
  //       width: 2000,
  //       height: 1000
  //     }}>
  //       <ExpenseRatioComparison
  //         comparison={mockComparisons.find(it => it.comparisonType === "Expense Ratio")}
  //         portfolioMarketValue={777_777.77}
  //       />
  //     </div>
  //   );
  //   await waitFor(() => {
  //     expect(screen.getByText(/INPAAS/i)).toBeVisible();
  //   });
  //   expect(screen.queryByText(/AVERAGE/i)).toBeVisible();
  //   expect(screen.queryByText(/1\.86%/i)).toBeVisible();
  //   expect(screen.queryByText(/2\.99%/i)).toBeVisible();
  // });
  //
  // it("Should match snapshot", () => {
  //   const { asFragment } = render(
  //     <ExpenseRatioComparison
  //       comparison={mockComparisons.find(it => it.comparisonType === "Expense Ratio")}
  //       portfolioMarketValue={777_777.77}
  //     />
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
