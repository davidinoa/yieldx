import { PortfolioAnalyzerApi } from "@bondhouse/rover-portfolio-analyzer";
import dayjs from "dayjs";
import YieldXPortfolio from "../../../../../models/YieldXPortfolio";

const analyzerApi = new PortfolioAnalyzerApi();

export default function totalGainCallback(portfolio: YieldXPortfolio) {
  return async () => {
    const {
      data: {
        estimatedPerformance: { timeSeries }
      }
    } = await analyzerApi.calculateReturns({
      startDate: dayjs(portfolio.getCreatedAt()).format("YYYY-MM-DD"),
      endDate: dayjs().format("YYYY-MM-DD"),
      portfolio: portfolio.asPmsPortfolio()
    });
    return timeSeries[timeSeries.length - 1]?.cumulativeReturn ?? 0;
  };
}
