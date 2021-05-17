import { rest } from "msw";
import { PriceAssetResponse } from "@bondhouse/prices";

export default rest.post(`/apis/prices/v1/_price-asset`, (req, res, ctx) => {
  const response: PriceAssetResponse = {
    prices: []
  };
  return res(ctx.status(200), ctx.json(response));
});
