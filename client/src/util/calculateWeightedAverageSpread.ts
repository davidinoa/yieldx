import YieldXPortfolio, { YieldXPosition } from "../models/YieldXPortfolio";

export default function calculateWeightedAverageSpread(
  portfolio: YieldXPortfolio
) {
  const securitiesMarketValue =
    portfolio.totalMarketValue - portfolio.cashMarketValue;
  if (securitiesMarketValue === 0) {
    return 0;
  }
  let weightedSpread = 0;
  portfolio.positions.forEach((position: YieldXPosition) => {
    const {
      asset: { analytics },
      marketValue
    } = position;
    if (analytics != null) {
      const { optionAdjustedSpread, zSpread, gSpread } = analytics;
      if (optionAdjustedSpread != null) {
        weightedSpread += optionAdjustedSpread * marketValue;
      } else if (zSpread != null) {
        weightedSpread += zSpread * marketValue;
      } else if (gSpread != null) {
        weightedSpread += gSpread * marketValue;
      }
    }
  });
  return weightedSpread / securitiesMarketValue;
}
