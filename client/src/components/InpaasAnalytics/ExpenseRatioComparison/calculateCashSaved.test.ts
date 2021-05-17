import calculateCashSaved from "components/InpaasAnalytics/ExpenseRatioComparison/calculateCashSaved";

export const mockComparisons = [
  {
    comparisonType: "Risk",
    inpaas: 10.639897450120877,
    average: 19,
    difference: 8.360102549879123,
    percentageDifference: 78.5731496856123
  },
  {
    comparisonType: "Expense Ratio",
    inpaas: 0.5015914543816289,
    average: 1.53,
    difference: 1.0284085456183711,
    percentageDifference: 205.02912014045614
  }
];

describe("calculateCashSaved", () => {
  it("Should calculate correctly", () => {
    expect(calculateCashSaved(mockComparisons[1].difference, 777_777.77)).toBe(
      7998.7330526
    );
  });
});
