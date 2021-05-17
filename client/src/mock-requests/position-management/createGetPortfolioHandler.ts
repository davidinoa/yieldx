import { rest } from "msw";
import {
  GetPortfolioResponse,
  Portfolio
} from "@bondhouse/position-management";
import { PortfolioType } from "@bondhouse/income-portfolios";

export const createGetPortfolioHandler: CreateGetPortfolioHandler = (
  portfolio,
  type = PortfolioType.LIVE
) => {
  const apiUrl =
    type === PortfolioType.LIVE
      ? `/apis/position-management/v1/portfolios/${portfolio.id}`
      : `/apis/position-management/v1/external-portfolios/${portfolio.id}`;
  return rest.get(apiUrl, (req, res, ctx) => {
    const response: GetPortfolioResponse = { portfolio };
    return res(ctx.status(200), ctx.json(response));
  });
};

type CreateGetPortfolioHandler = (
  portfolio: Portfolio,
  type?: PortfolioType
) => ReturnType<typeof rest["get"]>;
