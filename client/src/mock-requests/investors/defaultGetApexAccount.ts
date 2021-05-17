import { rest } from "msw";

export const defaultGetApexAccount = rest.get(
  "/apis/apex/v1/investors/mock-*/account",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        apexAccount: {
          id: "mock-apex-id",
          investorId: "mock-investor-id",
          apexRequestId: "d38ff864-c1d3-416c-9b7f-5a05e4ae7849",
          apexAccountNumber: "7XL10400",
          status: "ACTIVE",
          createdAt: "2020-09-01T13:16:22.787148Z",
          updatedAt: "2020-09-01T13:16:40.937198Z",
          metadata: { aleMessageId: "34642098" }
        }
      })
    );
  }
);
