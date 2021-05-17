import { Goal } from "@bondhouse/income-portfolios";

function convertGoals(investmentAmount: number, goal: Goal) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { yield: targetYield, income } = goal;

  if (income && targetYield === undefined)
    return {
      targetYield: ((income * 12) / investmentAmount) * 100,
      targetIncome: income || (investmentAmount * (targetYield / 100)) / 12
    };
  return {
    targetYield: Number(targetYield),
    targetIncome: income || (investmentAmount * (targetYield / 100)) / 12
  };
}

export default convertGoals;
