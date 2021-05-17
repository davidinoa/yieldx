import YieldXPortfolio, {
  YieldXPosition
} from "../../../../models/YieldXPortfolio";

const sigma = 0.0001;
const cashBuffer = 0.02;

function calculateScaleFactor(positionCount: number): number {
  if (positionCount < 9) {
    return Math.ceil(9 / positionCount);
  }
  return 1;
}

/**
 * Returns the minimum investment for a portfolio to use the optimizer.
 *
 * @param portfolio
 */
export function calculateMinimumInvestmentToUseOptimizer(
  portfolio?: YieldXPortfolio
): number {
  if (portfolio == null) {
    return 0;
  }
  const minimumInvestment = calculateMinimumInvestmentToBuyAll(portfolio);
  const scaleFactor = calculateScaleFactor(portfolio.positions.length);
  return (
    Math.max(
      0,
      Math.ceil((minimumInvestment * 100) / (1 - cashBuffer) - sigma) / 100
    ) * scaleFactor
  );
}

/**
 * Returns the minimum investment for a portfolio to invest a non-zero amount in all positions.
 *
 * @param portfolio
 */
export function calculateMinimumInvestmentToBuyAll(
  portfolio?: YieldXPortfolio
): number {
  if (portfolio == null) {
    return 0;
  }
  let minimumInvestment = 0;
  portfolio.positions.forEach((position: YieldXPosition) => {
    minimumInvestment +=
      position.minimumDenomination * position.quantityToMarketValueFactor;
  });
  return minimumInvestment;
}

/**
 * Returns whether the portfolio meets the minimum investment to use the optimizer.
 *
 * The minimum investment is a floating point number and thus may have a bit of error, therefore we pad the total market
 * value by an error term, sigma, to ensure we don't fail to have a validated investment amount due to floating point
 * imprecision.
 *
 * @param portfolio
 */
export function meetsMinimumInvestmentToUseOptimizer(
  portfolio?: YieldXPortfolio
): boolean {
  if (portfolio == null) {
    return false;
  }
  const minimumInvestment = calculateMinimumInvestmentToUseOptimizer(portfolio);
  return portfolio.totalMarketValue + sigma >= minimumInvestment;
}

/**
 * Returns whether the portfolio meets the minimum investment to invest a non-zero amount in all positions.
 *
 * @param portfolio
 */
export function meetsMinimumInvestmentToBuyAll(
  portfolio?: YieldXPortfolio
): boolean {
  if (portfolio == null) {
    return false;
  }
  return portfolio.totalMarketValue > 0;
}
