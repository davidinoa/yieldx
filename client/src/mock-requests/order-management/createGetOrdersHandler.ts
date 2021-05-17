import { rest } from "msw";
import { GetOrdersResponse, Order } from "@bondhouse/order-management";

export const createGetOrdersHandler: CreateGetOrdersHandler = ({
  orders,
  portfolioId
}) =>
  rest.get(
    `/apis/order-management/v1/portfolios/${portfolioId}/orders`,
    (req, res, ctx) => {
      const response: GetOrdersResponse = { orders };
      return res(ctx.status(200), ctx.json(response));
    }
  );

interface CreateGetOrdersHandlerParams {
  orders: Order[];
  portfolioId: string;
}

type CreateGetOrdersHandler = (
  params: CreateGetOrdersHandlerParams
) => ReturnType<typeof rest["get"]>;
