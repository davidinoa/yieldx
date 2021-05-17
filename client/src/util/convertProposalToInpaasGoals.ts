import getProposalTargetValues from "util/getProposalTargetValues";
import { InPaaSFormState } from "recoil-state/inPaaS";
import { ProposalRequest } from "@bondhouse/income-portfolios";

export function convertProposalToInpaasGoals(
  proposalReq: ProposalRequest,
  originalValue?: number
): InPaaSFormState {
  const targets = getProposalTargetValues(
    proposalReq.goal,
    proposalReq.investmentAmount
  );
  let goal: InPaaSFormState["goal"] = "targetYield";
  if (targets?.targetRisk) goal = "targetRisk";
  else if (proposalReq.goal.income) goal = "targetIncome";
  return {
    investmentAmount: originalValue || proposalReq.investmentAmount,
    maximumWeight: (proposalReq.constraints?.maximumWeight || 0.3) * 100,
    minimumWeight: (proposalReq.constraints?.minimumWeight || 0.05) * 100,
    goal,
    [goal]: targets[goal]
  };
}
