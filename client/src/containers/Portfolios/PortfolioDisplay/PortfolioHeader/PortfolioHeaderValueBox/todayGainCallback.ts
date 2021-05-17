import { PortfolioAnalyzerApi } from "@bondhouse/rover-portfolio-analyzer";
import YieldXPortfolio from "models/YieldXPortfolio";

const analyzerApi = new PortfolioAnalyzerApi();

export default function todayGainCallback(portfolio: YieldXPortfolio) {
  return async () => {
    const {
      data: { marketValueReturn }
    } = await analyzerApi.calculateIntradayReturn({
      portfolio: portfolio.asPmsPortfolio()
    });
    return marketValueReturn;
  };
}
