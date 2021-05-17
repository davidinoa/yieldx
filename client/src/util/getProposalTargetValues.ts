import { Goal } from "@bondhouse/income-portfolios";

export default function getProposalTargetValues(
  goal: Goal,
  investment: number
) {
  const targets: { income?: number; yield?: number; risk?: number } = goal;
  let targetIncome = 0;
  let targetYield = 0;

  if (targets.yield) {
    targetYield = targets.yield;
    targetIncome = (targets.yield / 100 / 12) * investment;
    return { investment, targetYield, targetIncome };
  }

  if (targets.income) {
    targetIncome = targets.income;
    targetYield = ((targets.income * 12) / investment) * 100;
    return { investment, targetYield, targetIncome };
  }
  return { investment, targetYield, targetIncome, targetRisk: targets.risk };
}
