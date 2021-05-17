import YieldXPortfolio from "models/YieldXPortfolio";

function calculatePortfolioAllocation(portfolio: YieldXPortfolio) {
  const bondMarketValue = portfolio.getBondSleeve().totalMarketValue;
  const fundMarketValue = portfolio.getFundSleeve().totalMarketValue;
  return {
    bondAllocation: (bondMarketValue / portfolio.totalMarketValue) * 100,
    fundAllocation: (fundMarketValue / portfolio.totalMarketValue) * 100
  };
}
export default calculatePortfolioAllocation;
