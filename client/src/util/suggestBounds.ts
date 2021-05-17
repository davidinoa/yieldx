import YieldXPortfolio, { YieldXPosition } from "../models/YieldXPortfolio";

interface Bounds {
  minimum: number;
  maximum: number;
}

export default function suggestBounds(portfolio: YieldXPortfolio): Bounds {
  const positionCount = portfolio.positions.length;
  if (positionCount === 0) {
    return { minimum: 0, maximum: 1 };
  }
  const nav = portfolio.totalMarketValue;
  if (nav === 0) {
    return { minimum: 0, maximum: 1 };
  }

  // Requiring at least 1% in each position
  const minimum = 0.5 / positionCount;

  let maximum = Math.max(minimum, 1.5 / positionCount);
  portfolio.positions.forEach((position: YieldXPosition) => {
    const minimumNav =
      (position.minimumDenomination * position.quantityToMarketValueFactor) /
      nav;
    maximum = Math.max(maximum, minimumNav);
  });

  maximum = Math.min(maximum * 2, maximum + (1 - maximum) / 2, 1);
  return { minimum, maximum };
}
