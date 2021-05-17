import { rest } from "msw";

export const defaultGetInvestorInstructions = rest.get(
  "/apis/investor/v1/investors/mock-investor-id/delivery-instructions",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        deliveryInstructions: [
          {
            id: "c03420f1-0a1b-4cd7-9e82-7632348f6c1f",
            portfolioId: "mock-cash-portfolio-id",
            investorId: "mock-investor-id",
            instructions: [
              {
                externalEntityType: "APEX",
                externalEntityId: "mock-apex-id"
              }
            ],
            createdAt: "2020-09-01T13:16:22.883463Z",
            updatedAt: "2020-09-01T13:16:22.883463Z",
            cashOnly: true
          }
        ]
      })
    );
  }
);
