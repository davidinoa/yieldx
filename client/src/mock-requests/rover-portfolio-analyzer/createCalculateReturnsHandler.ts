import { MockedRequest, rest } from "msw";
import { Portfolio } from "@bondhouse/position-management";
import {
  CalculateReturnsRequest,
  CalculateReturnsResponse,
  SinglePeriodPerformance
} from "@bondhouse/rover-portfolio-analyzer";

export const createCalculateReturnsHandler: CreateCalculateReturnsHandler = timeSeries =>
  rest.post(
    `/apis/rover-portfolio-analyzer/v1/_calculate-returns`,
    (req, res, ctx) => {
      // this will only mock the response if portfolio ID includes "mock"
      if (
        isCalculateReturnsRequest(req.body) &&
        isMockedPortfolio(req.body.portfolio)
      ) {
        const response: CalculateReturnsResponse = {
          estimatedPerformance: {
            timeSeries,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            estimatedMaximumDrawdown: {
              value: 0,
              startDate: req.body.startDate,
              endDate: req.body.endDate
            }
          }
        };
        return res(ctx.status(200), ctx.json(response));
      }
      return undefined;
    }
  );

// type guard
function isCalculateReturnsRequest(
  body: MockedRequest["body"]
): body is CalculateReturnsRequest {
  return (body as CalculateReturnsRequest).portfolio !== undefined;
}

function isMockedPortfolio(portfolio: Portfolio): boolean {
  return portfolio.positions.some(it => it.portfolioId.includes("mock"));
}

type CreateCalculateReturnsHandler = (
  timeSeries: SinglePeriodPerformance[]
) => ReturnType<typeof rest["post"]>;
