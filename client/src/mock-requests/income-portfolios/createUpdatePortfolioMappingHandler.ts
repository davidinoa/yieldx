import { rest } from "msw";
import { CreateOrReplacePortfolioMappingResponse } from "@bondhouse/income-portfolios";

export const createUpdatePortfolioMappingHandler = (
  response: CreateOrReplacePortfolioMappingResponse
) =>
  rest.post(
    `/apis/income-portfolios/v1/portfolio-mappings/*`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
    }
  );
