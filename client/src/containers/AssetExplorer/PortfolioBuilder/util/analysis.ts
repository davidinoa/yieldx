import {
  Analysis,
  PortfolioAnalyzerApi
} from "@bondhouse/rover-portfolio-analyzer";
import debounce from "util/debounce";
import YieldXPortfolio from "models/YieldXPortfolio";

const analysisApi = new PortfolioAnalyzerApi();

export const analyzeCallback = (
  portfolio: YieldXPortfolio,
  setAnalysis: (analysis: Analysis) => void
) => {
  if (!portfolio.isEmpty()) {
    const pmsPortfolio = portfolio.asPmsPortfolio();
    analysisApi
      .analyzePortfolio(false, undefined, {
        portfolio: pmsPortfolio
      })
      .then(({ data }) => {
        console.warn(setAnalysis);
        setAnalysis(data.analysis);
      });
  }
};

export const analyzePortfolio = debounce(analyzeCallback, 500);
