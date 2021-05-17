import calculateBpsSaved from "components/InpaasAnalytics/ExpenseRatioComparison/calculateBpsSaved";
import { mockComparisons } from "components/InpaasAnalytics/ExpenseRatioComparison/calculateCashSaved.test";

describe("calculateBpsSaved", () => {
  it("Should calculate correctly", () => {
    expect(
      calculateBpsSaved(mockComparisons[1].average, mockComparisons[1].inpaas)
    ).toBe(102.84085456183712);
    expect(
      Math.round(
        calculateBpsSaved(mockComparisons[1].average, mockComparisons[1].inpaas)
      )
    ).toBe(103);
  });
});
