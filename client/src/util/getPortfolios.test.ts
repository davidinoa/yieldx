import { UserStatus, UserType } from "@bondhouse/iam";
import { userService } from "services";
import getPortfolios from "./getPortfolios";

describe("test getting portfolios function", () => {
  test("testing empty response", async () => {
    const modifiedGetUser = userService.getUser as jest.Mock;
    jest.mock("services", () => jest.fn());
    modifiedGetUser.mockImplementationOnce(() => ({
      id: "auth0|5ec6119474dfa00cbf1d53cb",
      first: "Institution",
      last: "New User",
      userType: UserType.ADMIN,
      email: "test4@bondhouse.com",
      terms: true,
      institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
      createdAt: "2020-05-21T05:28:52.982380Z",
      updatedAt: "2020-05-21T05:28:52.982380Z",
      status: UserStatus.ACTIVE,
      policies: []
    }));
    const data = await getPortfolios();
    expect(data).toBeDefined();
    expect(modifiedGetUser).toHaveBeenCalledTimes(1);
    expect(data.livePortfolios.length).toBe(0);
    expect(data.investors.length).toBe(0);
    expect(data.externalPortfolios.length).toBe(0);
  });
});
