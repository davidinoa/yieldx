import { Constraints } from "@bondhouse/income-portfolios";

export default function getPortfolioAllocation(positions: Array<{ marketValue: number; }>, totalMarketValue: number): Required<Constraints> {
  const allocation: Required<Constraints> = {
    minimumWeight: Infinity,
    maximumWeight: -Infinity
  };
  return positions.reduce<Required<Constraints>>((acc, curr) => {
    return {
      minimumWeight: Math.min(curr.marketValue / totalMarketValue, acc.minimumWeight),
      maximumWeight: Math.max(curr.marketValue / totalMarketValue, acc.maximumWeight)
    };
  }, allocation);
}
