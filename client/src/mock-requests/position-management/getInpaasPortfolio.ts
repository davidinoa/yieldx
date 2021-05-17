import { rest } from "msw";
import { AppType } from "@bondhouse/position-management";
import createPortfolioObject from "./util/createMockPortfolio";

export const getInpaasPortfolio = rest.get(
  "/apis/position-management/v1/external-portfolios/mock-portfolio-id",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        portfolio: createPortfolioObject({
          app: AppType.INPAAS,
          id: "mock-portfolio-id",
          name: "MOCK INPAAS PORTFOLIO",
          positions: [
            {
              id: "_30d58684.c7283330.buy",
              assetId: "mock-asset-1",
              quantity: 2927,
              portfolioId: "mock-portfolio-id",
              createdAt: "2020-09-18T13:34:15.214785Z",
              updatedAt: "2020-09-18T13:34:15.214785Z"
            },
            {
              id: "_30d58684._621e7f48.buy",
              assetId: "mock-asset-2",
              quantity: 3324,
              portfolioId: "mock-portfolio-id",
              createdAt: "2020-09-18T13:34:15.214785Z",
              updatedAt: "2020-09-18T13:34:15.214785Z"
            },
            {
              id: "_30d58684.a4cd0ac9.buy",
              assetId: "mock-asset-3",
              quantity: 5107,
              portfolioId: "mock-portfolio-id",
              createdAt: "2020-09-18T13:34:15.214785Z",
              updatedAt: "2020-09-18T13:34:15.214785Z"
            },
            {
              id: "_30d58684.ff3cee29.buy",
              assetId: "mock-asset-4",
              quantity: 7799,
              portfolioId: "mock-portfolio-id",
              createdAt: "2020-09-18T13:34:15.214785Z",
              updatedAt: "2020-09-18T13:34:15.214785Z"
            },
            {
              id: "USD",
              assetId: "USD",
              quantity: 5118.899999999965,
              portfolioId: "mock-portfolio-id"
            }
          ]
        })
      })
    );
  }
);
