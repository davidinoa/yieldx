import { rest } from "msw";

export const createGetPortfolioInstructionHandler: CreateGetPortfolioInstructionHandler = ({
  investorId,
  externalEntityId,
  cashOnly,
  id,
  portfolioId
}) =>
  rest.get(
    `/apis/investor/v1/portfolios/${portfolioId}/delivery-instruction`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          portfolioDeliveryInstruction: {
            id,
            portfolioId,
            investorId,
            instructions: [
              {
                externalEntityType: "APEX",
                externalEntityId
              }
            ],
            createdAt: "2020-09-16T22:58:01.332553Z",
            updatedAt: "2020-09-16T22:58:01.332553Z",
            cashOnly
          }
        })
      );
    }
  );

interface CreateGetPortfolioInstructionParams {
  id: string;
  investorId: string;
  externalEntityId: string;
  cashOnly: boolean;
  portfolioId: string;
}

type CreateGetPortfolioInstructionHandler = (
  params: CreateGetPortfolioInstructionParams
) => ReturnType<typeof rest["get"]>;
