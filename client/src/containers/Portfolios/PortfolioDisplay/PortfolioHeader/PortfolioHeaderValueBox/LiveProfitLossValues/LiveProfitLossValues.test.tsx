import React from "react";
import { buildMockPortfolio, render, screen, waitFor } from "test/utils";
import LiveProfitLossValues from "./LiveProfitLossValues";
import { setupServer } from "msw/node";
import { AppType } from "@bondhouse/position-management";
import { PortfolioType } from "@bondhouse/income-portfolios";
import toInputPortfolio from "util/toInputPortfolio";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { client } from "providers/graphql";
import mockInpaasPortfolioRequests from "mock-requests/graphql/mockInpaasPortfolioRequests";
import createMockHandler from "mock-requests/graphql/createMockHandler";

const server = setupServer();
const portfolio = buildMockPortfolio({
  appType: AppType.INPAAS,
  portfolioType: PortfolioType.EXTERNAL
});
describe("LiveProfitLossValues", () => {
  beforeAll(() => server.listen());
  afterEach(() => client.clearStore());
  afterAll(() => server.close());
  beforeEach(() =>
    server.use(
      createMockHandler({
        roverPortfolioAnalyzerCalculateIntradayReturn: {
          marketValueReturn: 2.5,
          totalReturn: 2.5,
          percentReturn: 1,
          __typename: "CalculateIntradayReturnResponse"
        }
      })
    )
  );
  test("Should render", () => {
    const { container } = render(
      <LiveProfitLossValues portfolioInput={toInputPortfolio(portfolio)} />
    );
    expect(container).toBeInTheDocument();
  });

  test("Should display the value returned from getTodayGain, + $5.50 in this case", async () => {
    const { asFragment } = render(
      <LiveProfitLossValues portfolioInput={toInputPortfolio(portfolio)} />
    );
    await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));
    expect(await screen.findByText("+ $2.50")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
