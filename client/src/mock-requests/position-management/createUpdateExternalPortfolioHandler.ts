import { rest } from "msw";
import { CreateOrReplaceExternalPortfolioResponse } from "@bondhouse/position-management";

export const createUpdateExternalPortfolioHandler = (
  response: CreateOrReplaceExternalPortfolioResponse
) =>
  rest.post(
    `/apis/position-management/v1/external-portfolios`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
    }
  );
