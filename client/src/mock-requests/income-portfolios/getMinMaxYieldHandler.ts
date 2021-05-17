import { rest } from "msw";
import { GetMinMaxYieldResponse } from "@bondhouse/income-portfolios";

export const getMinMaxYieldHandler = rest.get(
  `/apis/income-portfolios/v1/proposals/_min_max_yield`,
  (req, res, ctx) => {
    const response: GetMinMaxYieldResponse = {
      maxYield: 11.5,
      minYield: 0.5
    };
    return res(ctx.status(200), ctx.json(response));
  }
);
