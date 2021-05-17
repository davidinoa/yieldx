import { rest } from "msw";
import { GetUserResponse, User } from "@bondhouse/iam";

export const createGetUserHandler: CreateGetUserHandler = user =>
  rest.get(`/iam/api/v1/users/current-user`, (req, res, ctx) => {
    const response: GetUserResponse = {
      user
    };
    return res(ctx.status(200), ctx.json(response));
  });

type CreateGetUserHandler = (user: User) => ReturnType<typeof rest["get"]>;
