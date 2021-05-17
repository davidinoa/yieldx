import React from "react";
import userEvent from "@testing-library/user-event";
import {
  AppType,
  Portfolio,
  PortfolioStatus
} from "@bondhouse/position-management";
import { buildMockPortfolio, render, screen } from "test/utils";
import YieldXPortfolio from "models/YieldXPortfolio";
import { PROPOSAL_MOCK } from "__mocks__/@bondhouse/income-portfolios/__fixtures__";
import { setupServer } from "msw/node";
import { client } from "providers/graphql";
import { PortfolioType } from "@bondhouse/income-portfolios";
import mockInpaasPortfolioRequests from "mock-requests/graphql/mockInpaasPortfolioRequests";
import { waitForElementToBeRemoved } from "@testing-library/react";
import InpaasPortfolio from "./InpaasPortfolio";

const server = setupServer();
describe("InpaasPortfolio", () => {
  beforeAll(() => server.listen());
  afterEach(() => client.clearStore());
  afterAll(() => server.close());

  const portfolio = buildMockPortfolio({
    appType: AppType.INPAAS,
    portfolioType: PortfolioType.EXTERNAL
  });

  it("Should multiply max drawdown by 100 to display", async () => {
    server.use(mockInpaasPortfolioRequests);
    const { asFragment } = render(<InpaasPortfolio portfolio={portfolio} />);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(await screen.findByText(/Max Drawdown/i)).toBeInTheDocument();
    userEvent.click(await screen.findByText(/Max Drawdown/i));
    expect(asFragment()).toMatchSnapshot();
  });
  test("view for an empty portfolio", async () => {
    const emptyPortfolio: Portfolio = {
      id: "mockPortfolioId",
      currency: "USD",
      createdAt: new Date().toISOString(),
      status: PortfolioStatus.READY,
      name: "Empty PMS Portfolio",
      positions: []
    };
    const emptyWithProposal = YieldXPortfolio.fromInpaasProposal(
      {
        ...PROPOSAL_MOCK,
        portfolio: emptyPortfolio
      },
      []
    );
    render(<InpaasPortfolio portfolio={emptyWithProposal} />);
    expect(await screen.findByText(/no rows to show/i)).toBeInTheDocument();
  });

  it("Should match snapshot", async () => {
    server.use(mockInpaasPortfolioRequests);
    const { asFragment } = render(<InpaasPortfolio portfolio={portfolio} />);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(asFragment()).toMatchSnapshot();
  });
});
