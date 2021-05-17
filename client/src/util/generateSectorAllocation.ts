import { YieldXPosition } from "../models/YieldXPortfolio";

export interface Allocations {
  names: string[];
  values: number[];
}

export function generateSectorAllocation(
  positions: Array<YieldXPosition>,
  cashMarketValue: number,
  totalMarketValue: number,
  options?: { withoutCash: boolean }
): Allocations {
  const sectorWeights: Record<string, number> = {};
  positions.forEach((position: YieldXPosition) => {
    const sector =
      position.asset.fund?.classification ||
      position.asset.bond?.classifications?.datastreamSubtype ||
      "Mixed Asset USD Conservative";
    sectorWeights[sector] = (sectorWeights[sector] ?? 0) + position.weight;
  });
  if (!options?.withoutCash && cashMarketValue !== 0) {
    sectorWeights.Cash = (cashMarketValue / totalMarketValue) * 100;
  }
  const names: string[] = [];
  const values: number[] = [];
  Object.entries(sectorWeights).forEach(([sector, weight]) => {
    names.push(sector);
    values.push(weight);
  });
  return { names, values };
}
