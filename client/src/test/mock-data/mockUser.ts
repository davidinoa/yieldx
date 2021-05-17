import { GetCurrentUserResponse, UserType } from "providers/graphql/hooks";

interface Options {
  createdAt?: string;
  updatedAt?: string;
  id?: string;
  userType?: UserType;
  institutionId?: string;
}

function mockUser({
  userType = UserType.Admin,
  createdAt = new Date().toISOString(),
  updatedAt = new Date().toISOString(),
  institutionId = "mock-institution-id",
  id = "mock-user-id"
}: Options): GetCurrentUserResponse {
  return {
    user: {
      createdAt,
      email: "alfredo@bondhouse.com",
      first: "Alfredo",
      id,
      institutionId,
      last: "Alpizar",
      metadata: null,
      policies: [],
      status: null,
      terms: false,
      updatedAt,
      userType,
      __typename: "User"
    },
    __typename: "GetCurrentUserResponse"
  };
}

export default mockUser;
