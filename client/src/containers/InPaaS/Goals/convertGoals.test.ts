import { Goal } from "@bondhouse/income-portfolios";
import convertGoals from "./convertGoals";

describe("testing convert goals function", () => {
  test("target yield but no target income", () => {
    const testGoal: Goal = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      yield: 10
    };
    const result = convertGoals(100_000, testGoal);
    expect(result.targetYield).toBe(10);
    expect(result.targetIncome).toBe(10_000 / 12);
  });
  test("target income but no target yield", () => {
    const testGoal: Goal = {
      income: 100
    };
    const result = convertGoals(10_000, testGoal);
    expect(result.targetIncome).toBe(100);
    expect(result.targetYield).toBe(12);
  });
});
