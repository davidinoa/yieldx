import { rest } from "msw";
import { GetCartResponse } from "@bondhouse/rover-preferences";

export const createGetCartHandler: CreateGetCartHandler = assetIds =>
  rest.get(`/apis/rover-preferences/v1/users/*/cart`, (req, res, ctx) => {
    const cartResponse: GetCartResponse = {
      cart: {
        id: "mock-cart-id",
        items: assetIds.map(it => ({
          assetId: it,
          quantity: 0
        }))
      }
    };
    return res(ctx.status(200), ctx.json(cartResponse));
  });

type CreateGetCartHandler = (
  assetIds: string[]
) => ReturnType<typeof rest["get"]>;
