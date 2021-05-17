import { CashFlow } from "providers/graphql/hooks";
import {
  Analysis,
  AnalyzePortfolioRequest,
  PortfolioAnalyzerApi
} from "@bondhouse/rover-portfolio-analyzer";
import YieldXPortfolio from "models/YieldXPortfolio";

interface AnalyzePortfolioOptions {
  enableEstimatedPerformance?: boolean;
}

export class PortfolioAnalysisService {
  private portfolioAnalyzerApi: PortfolioAnalyzerApi;

  constructor() {
    this.portfolioAnalyzerApi = new PortfolioAnalyzerApi();
  }

  /**
   * Analyze a portfolio using Rover Portfolio Analyzer
   *
   * @param portfolio - The portfolio to analyze
   * @param options - In general, you only need to enable estimated performance if you will use maximum drawdown
   */
  async analyzePortfolio(
    portfolio: YieldXPortfolio,
    options?: AnalyzePortfolioOptions
  ): Promise<Analysis> {
    const request: AnalyzePortfolioRequest = {
      portfolio: portfolio.asPmsPortfolio()
    };
    const response = await this.portfolioAnalyzerApi.analyzePortfolio(
      options?.enableEstimatedPerformance ?? false,
      undefined,
      request
    );
    return response.data.analysis;
  }

  async projectCashflows(portfolio: YieldXPortfolio): Promise<Array<CashFlow>> {
    try {
      const response = await this.portfolioAnalyzerApi.projectCashFlows({
        portfolio: portfolio.asPmsPortfolio()
      });
      return response.data.cashFlows;
    } catch (error) {
      throw new Error(error);
    }
  }
}
