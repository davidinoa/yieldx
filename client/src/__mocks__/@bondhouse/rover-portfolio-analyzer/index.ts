import { analysisMock } from "./__FIXTURES__";

export function PortfolioAnalyzerApi() {
  return {
    async analyzePortfolio() {
      return {
        data: {
          analysis: analysisMock
        }
      };
    },
    async projectCashFlows() {
      return {
        data: {
          cashFlows: []
        }
      };
    }
  };
}

export { PortfolioStatus } from "@bondhouse/rover-portfolio-analyzer";
