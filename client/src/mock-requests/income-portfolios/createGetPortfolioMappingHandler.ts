import { rest } from "msw";
import {
  GetPortfolioMappingResponse,
  PortfolioMapping
} from "@bondhouse/income-portfolios";

export const createGetPortfolioMappingHandler: CreateGetPortfolioMappingHandler = mockMapping =>
  rest.get(
    `/apis/income-portfolios/v1/portfolio-mappings/${mockMapping.portfolioId}`,
    (req, res, ctx) => {
      const response: GetPortfolioMappingResponse = {
        portfolioMapping: mockMapping
      };
      return res(ctx.status(200), ctx.json(response));
    }
  );

type CreateGetPortfolioMappingHandler = (
  params: PortfolioMapping
) => ReturnType<typeof rest["get"]>;
