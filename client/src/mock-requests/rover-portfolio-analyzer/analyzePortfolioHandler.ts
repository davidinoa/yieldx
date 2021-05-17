import { MockedRequest, rest } from "msw";
import {
  AnalyzePortfolioRequest,
  AnalyzePortfolioResponse
} from "@bondhouse/rover-portfolio-analyzer";
import { Portfolio } from "@bondhouse/position-management";
import mockAnalysis from "../../__mocks__/models/mockAnalysis";

export const analyzePortfolioHandler = rest.post(
  "/apis/rover-portfolio-analyzer/v1/_analyze-portfolio",
  (req, res, ctx) => {
    // this will only mock the response if portfolio ID includes "mock"
    if (
      isAnalyzePortfolioRequest(req.body) &&
      isMockedPortfolio(req.body.portfolio)
    ) {
      const response: AnalyzePortfolioResponse = {
        analysis: mockAnalysis
      };
      return res(ctx.status(200), ctx.json(response));
    }
    return undefined;
  }
);

// type guard
function isAnalyzePortfolioRequest(
  body: MockedRequest["body"]
): body is AnalyzePortfolioRequest {
  return (body as AnalyzePortfolioRequest).portfolio !== undefined;
}

function isMockedPortfolio(portfolio: Portfolio): boolean {
  return portfolio.positions.some(it => it.assetId.includes("mock"));
}
