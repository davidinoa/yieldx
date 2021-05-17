import { rest } from "msw";
import createPortfolioObject from "./util/createMockPortfolio";

export const getCashPortfolio = rest.get(
  "/apis/position-management/v1/portfolios/mock-cash-portfolio-id",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        portfolio: createPortfolioObject({
          name: "CASH_ONLY_PORTFOLIO",
          id: "mock-cash-portfolio-id"
        })
      })
    );
  }
);

export const getCashPortfolioHandler = ({
  portfolioId,
  cashAvailable
}: GetCashPortfolioHandlerParams) =>
  rest.get(
    `/apis/position-management/v1/portfolios/${portfolioId}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          portfolio: createPortfolioObject({
            name: "CASH_ONLY_PORTFOLIO",
            id: portfolioId,
            positions: [
              {
                id: "CASH-USD",
                assetId: "USD",
                quantity: cashAvailable,
                portfolioId,
                settled: cashAvailable,
                unsettled: 0,
                createdAt: "2020-09-16T22:58:00.541907Z",
                updatedAt: "2020-09-16T22:58:00.541907Z",
                metadata: {}
              }
            ]
          })
        })
      );
    }
  );

interface GetCashPortfolioHandlerParams {
  portfolioId: string;
  cashAvailable: number;
}
