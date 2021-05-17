import { YieldXPosition } from "../models/YieldXPortfolio";

export function calculateYieldContributions(
  positions: Array<YieldXPosition>,
  totalYield?: number
) {
  if (!totalYield) {
    return { names: [], values: [] };
  }

  return positions
    .map(position => {
      const {
        asset: { name },
        weight
      } = position;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const assetYield = position.asset.analytics?.yield ?? 0;
      const yieldContributionWeight = (weight * assetYield) / totalYield;
      return {
        name,
        value: yieldContributionWeight
      };
    })
    .sort((a, b) => b.value - a.value)
    .reduce<{ names: string[]; values: number[] }>(
      (acc, cv, i) => {
        if (i === 5) {
          acc.names.push("Other");
          acc.values.push(cv.value);
        } else if (i > 5) acc.values[5] += cv.value;
        else {
          acc.names.push(cv.name || "n/a");
          acc.values.push(cv.value);
        }
        return acc;
      },
      { names: [], values: [] }
    );
}
