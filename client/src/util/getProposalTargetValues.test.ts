import { Goal } from "@bondhouse/income-portfolios";
import getProposalTargetValues from "./getProposalTargetValues";

describe("getProposalTargetValues", () => {
  it("Should calculate income from yield", () => {
    const mockGoals: Goal = {
      // @ts-expect-error
      yield: 5.0
    };
    const resp = getProposalTargetValues(mockGoals, 120_000);
    expect(resp).toStrictEqual({
      investment: 120_000,
      targetYield: 5.0,
      targetIncome: 500.0
    });
  });

  it("Should calculate income from yield", () => {
    const mockGoals: Goal = {
      income: 500
    };
    const resp = getProposalTargetValues(mockGoals, 120_000);
    expect(resp).toStrictEqual({
      investment: 120_000,
      targetYield: 5.0,
      targetIncome: 500.0
    });
  });
});
