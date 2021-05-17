import React from "react";
import { User, UserStatus, UserType } from "@bondhouse/iam";
import { userService } from "services";
import InvestorList from "./InvestorList";
import { render, screen } from "../../../test/utils";

describe("ensure correct data is being displayed", () => {
  test("test general empty list display", async () => {
    const mockedFunction = userService.subscribe as jest.Mock;
    mockedFunction.mockImplementation((onUpdate: (user: User) => void) => {
      onUpdate({
        id: "auth0|5ec6119474dfa00cbf1d53cb",
        first: "Institution",
        last: "New User",
        userType: UserType.DEFAULT,
        email: "test4@bondhouse.com",
        terms: true,
        institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
        createdAt: "2020-05-21T05:28:52.982380Z",
        updatedAt: "2020-05-21T05:28:52.982380Z",
        status: UserStatus.ACTIVE,
        policies: []
      });
      return 1;
    });
    const { container } = render(
      <InvestorList apexAccountMap={{}} setApexAccountMap={jest.fn()} />
    );
    expect(container).toBeDefined();
    const Title = await screen.findByText(/Select an investor account/i);
    expect(Title).toBeInTheDocument();
  });
});
