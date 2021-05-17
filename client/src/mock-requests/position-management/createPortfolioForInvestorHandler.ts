import { rest } from "msw";
import {
  AppType,
  CreatePortfolioResponse
} from "@bondhouse/position-management";
import createPortfolioObject from "./util/createMockPortfolio";

export const createPortfolioForInvestorHandler: CreatePortfolioForInvestorHandler = ({
  investorId,
  name,
  app,
  portfolioId
}) =>
  rest.post(
    `/apis/position-management/v1/investors/${investorId}/portfolios`,
    (req, res, ctx) => {
      const response: CreatePortfolioResponse = {
        portfolio: createPortfolioObject({
          positions: [
            {
              id: "CASH-USD",
              assetId: "USD",
              quantity: 900_000,
              portfolioId,
              settled: 900_000,
              unsettled: 0,
              createdAt: "2020-09-16T22:58:00.541907Z",
              updatedAt: "2020-09-16T22:58:00.541907Z",
              metadata: {}
            }
          ],
          app,
          name,
          id: portfolioId
        })
      };
      return res(ctx.status(200), ctx.json(response));
    }
  );
interface CreatePortfolioForInvestorHandlerParams {
  investorId: string;
  name: string;
  app: AppType;
  portfolioId: string;
}

type CreatePortfolioForInvestorHandler = (
  params: CreatePortfolioForInvestorHandlerParams
) => ReturnType<typeof rest["post"]>;
