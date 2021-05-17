import React from "react";
import { Route } from "react-router";
import { render, screen } from "test/utils";
import { setupServer } from "msw/native";
import createMockHandler from "mock-requests/graphql/createMockHandler";
import { act, waitForElementToBeRemoved } from "@testing-library/react";
import mockPortfolio from "test/mock-data/mockPortfolio";
import { client } from "providers/graphql";
import mockUser from "test/mock-data/mockUser";
import PortfolioList from "./PortfolioList";

const server = setupServer();
describe("PortfolioList", () => {
  beforeAll(() => server.listen());
  afterEach(() => client.clearStore());
  afterAll(() => server.close());

  it("Should render up to 20 portfolios in a list", async () => {
    const mockPortfolios = [...Array(20).keys()].map(i =>
      mockPortfolio({ id: `mock-${i}`, createdAt: "11/1/2020" })
    );
    server.use(
      createMockHandler({
        iamGetCurrentUser: mockUser({}),
        positionManagementGetExternalPortfolios: {
          portfolios: mockPortfolios,
          __typename: "GetExternalPortfoliosResponse"
        },
        positionManagementGetPortfolios: {
          portfolios: [],
          __typename: "GetPortfoliosResponse"
        }
      })
    );

    const { asFragment } = render(
      <Route path="/yieldx/portfolios" component={PortfolioList} />,
      {
        route: "/yieldx/portfolios"
      }
    );
    const spinner = screen.queryByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    await act(async () => {
      await waitForElementToBeRemoved(spinner);
    });
    expect(screen.queryAllByText("MOCK PORTFOLIO").length).toBe(20);
    expect(asFragment()).toMatchSnapshot();
  });
  xit("Should render empty portfolio list properly", async () => {
    server.use(
      createMockHandler({
        iamGetCurrentUser: mockUser({}),
        positionManagementGetExternalPortfolios: {
          portfolios: [],
          __typename: "GetExternalPortfoliosResponse"
        },
        positionManagementGetPortfolios: {
          portfolios: [],
          __typename: "GetPortfoliosResponse"
        }
      })
    );

    const { asFragment } = render(
      <Route path="/yieldx/portfolios" component={PortfolioList} />,
      {
        route: "/yieldx/portfolios"
      }
    );
    const spinner = screen.queryByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    await act(async () => {
      await waitForElementToBeRemoved(spinner);
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
