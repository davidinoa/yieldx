import { MockedRequest, rest } from "msw";
import {
  OptimizePortfolioRequest,
  OptimizePortfolioResponse
} from "@bondhouse/rover-optimizer";
import { Portfolio } from "@bondhouse/position-management";

export const createOptimizePortfolioHandler: CreateOptimizePortfolioHandler = mockedResponse =>
  rest.post(`/apis/rover-optimizer/v1/_optimize-portfolio`, (req, res, ctx) => {
    // Check if request includes mocked properties
    if (isOptimizePortfolioRequest(req.body) && isMockedRequest(req.body)) {
      if (mockedResponse) return res(ctx.status(200), ctx.json(mockedResponse));
      const portfolio: Portfolio = JSON.parse(
        JSON.stringify(req.body.portfolio)
      );
      req.body.whitelist?.forEach((it, i) => {
        portfolio.positions.push({
          id: `random-id-${i}`,
          assetId: it.assetId,
          portfolioId: portfolio.id,
          quantity: 4
        });
        portfolio.positions[0].quantity -= 200_000;
        if (portfolio.positions[0].settled)
          portfolio.positions[0].settled -= 200_000;
      });
      const response: OptimizePortfolioResponse = {
        portfolio,
        orders: []
      };
      return res(ctx.status(200), ctx.json(response));
    }
    // If no mocked properties, returning undefined continues fetch request to backend
    return undefined;
  });

// type guard
function isOptimizePortfolioRequest(
  body: MockedRequest["body"]
): body is OptimizePortfolioRequest {
  return (body as OptimizePortfolioRequest).portfolio !== undefined;
}

function isMockedRequest(req: OptimizePortfolioRequest): boolean {
  return (
    req.whitelist?.some(it => it.assetId.includes("mock")) ??
    req.portfolio.id.includes("mock")
  );
}

type CreateOptimizePortfolioHandler = (
  mockedResponse?: OptimizePortfolioResponse
) => ReturnType<typeof rest["post"]>;
