import { ProposalRequest } from "@bondhouse/income-portfolios";
import { convertProposalToInpaasGoals } from "util/convertProposalToInpaasGoals";

describe("proposalReqToInpaasForm", () => {
  it("Should work with target income", () => {
    const mockInput: ProposalRequest = {
      investmentAmount: 500_000,
      constraints: {
        maximumWeight: 0.3,
        minimumWeight: 0.05
      },
      goal: {
        income: 500
      }
    };
    const result = convertProposalToInpaasGoals(mockInput);
    expect(result).toEqual({
      goal: "targetIncome",
      targetIncome: 500,
      minimumWeight: 5,
      maximumWeight: 30,
      investmentAmount: 500000
    });
  });

  it("Should work with target yield", () => {
    const mockInput: ProposalRequest = {
      investmentAmount: 500_000,
      constraints: {
        maximumWeight: 0.3,
        minimumWeight: 0.05
      },
      goal: {
        // @ts-expect-error
        yield: 10
      }
    };
    const result = convertProposalToInpaasGoals(mockInput);
    expect(result).toEqual({
      goal: "targetYield",
      targetYield: 10,
      minimumWeight: 5,
      maximumWeight: 30,
      investmentAmount: 500000
    });
  });

  it("Should work with target risk", () => {
    const mockInput: ProposalRequest = {
      investmentAmount: 500_000,
      constraints: {
        maximumWeight: 0.3,
        minimumWeight: 0.05
      },
      goal: {
        risk: 10
      }
    };
    const result = convertProposalToInpaasGoals(mockInput);
    expect(result).toEqual({
      goal: "targetRisk",
      targetRisk: 10,
      minimumWeight: 5,
      maximumWeight: 30,
      investmentAmount: 500000
    });
  });

  it("Optional original value param should overwrite investment amount", () => {
    const mockInput: ProposalRequest = {
      investmentAmount: 500_000,
      constraints: {
        maximumWeight: 0.3,
        minimumWeight: 0.05
      },
      goal: {
        risk: 10
      }
    };
    const result = convertProposalToInpaasGoals(mockInput, 1_000_000);
    expect(result).toEqual({
      goal: "targetRisk",
      targetRisk: 10,
      minimumWeight: 5,
      maximumWeight: 30,
      investmentAmount: 1_000_000
    });
  });
});
