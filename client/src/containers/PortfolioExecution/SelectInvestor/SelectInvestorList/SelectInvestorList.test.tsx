import React from "react";
import { render, screen } from "test/utils";
import { client } from "providers/graphql";
import { setupServer } from "msw/native";
import createMockHandler from "mock-requests/graphql/createMockHandler";
import mockUser from "test/mock-data/mockUser";
import SelectInvestorList from "./SelectInvestorList";

const server = setupServer();
describe("SelectInvestorList", () => {
  beforeAll(() => server.listen());
  afterEach(() => client.clearStore());
  afterAll(() => server.close());

  test("render empty list message", async () => {
    server.use(
      createMockHandler({
        iamGetCurrentUser: mockUser({}),
        investorGets: {
          investors: [],
          __typename: "GetInvestorsResponse"
        }
      })
    );
    render(<SelectInvestorList portfolioValue={50_000} />, {
      route: "/yieldx/execute-portfolio/investors"
    });
    expect(await screen.findByText("No investor accounts")).toBeInTheDocument();
  });
});
