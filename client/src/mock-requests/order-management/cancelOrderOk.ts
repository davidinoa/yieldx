import { rest } from "msw";

export const cancelOrderOk = rest.patch(
  "/apis/order-management/v1/portfolios/mock-*/orders/mock-*/_cancel",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        canceled: true
      })
    );
  }
);
