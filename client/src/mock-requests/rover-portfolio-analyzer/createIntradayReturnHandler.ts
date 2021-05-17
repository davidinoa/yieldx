import { MockedRequest, rest } from "msw";
import { Portfolio } from "@bondhouse/position-management";
import {
  CalculateIntradayReturnRequest,
  CalculateIntradayReturnResponse
} from "@bondhouse/rover-portfolio-analyzer";

export const createIntradayReturnHandler: CreateIntradayReturnHandler = totalReturn =>
  rest.post(
    `/apis/rover-portfolio-analyzer/v1/_calculate-intraday-return`,
    (req, res, ctx) => {
      // this will only mock the response if portfolio ID includes "mock"
      if (
        isCalculateIntradayRequest(req.body) &&
        isMockedPortfolio(req.body.portfolio)
      ) {
        const response: CalculateIntradayReturnResponse = {
          totalReturn,
          percentReturn: totalReturn,
          marketValueReturn: totalReturn
        };
        return res(ctx.status(200), ctx.json(response));
      }
      return undefined;
    }
  );

// type guard
function isCalculateIntradayRequest(
  body: MockedRequest["body"]
): body is CalculateIntradayReturnRequest {
  return (body as CalculateIntradayReturnRequest).portfolio !== undefined;
}

function isMockedPortfolio(portfolio: Portfolio): boolean {
  return portfolio.positions.some(it => it.portfolioId.includes("mock"));
}

type CreateIntradayReturnHandler = (
  totalReturn: number
) => ReturnType<typeof rest["post"]>;
