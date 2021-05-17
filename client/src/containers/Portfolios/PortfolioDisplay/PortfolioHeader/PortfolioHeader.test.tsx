import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "test/utils";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import { Spinner } from "elements/Spinner/Spinner";
import {
  PortfolioHeaderData,
  usePortfolioHeaderData
} from "hooks/usePortfolioHeaderData";
import PortfolioHeader from "./PortfolioHeader";
import ExecutingPortfolio from "../ExecutingPortfolio/ExecutingPortfolio";

describe("PortfolioHeader", () => {
  test("renders", () => {
    const { container } = render(
      <PortfolioHeader portfolio={mockYieldXPortfolio} />
    );
    expect(container).toBeInTheDocument();
  });

  test.skip("editing positions for live custom", async () => {
    render(<PortfolioHeader portfolio={mockYieldXPortfolio} />);
    const editPositionsLink = await screen.findByText(/edit positions/i);
    userEvent.click(editPositionsLink);
    const continueButton = await screen.findByRole("button", {
      name: /continue/i
    });
    userEvent.click(continueButton);
  });

  test("live with pending orders", async () => {
    render(<ExecutingPortfolio portfolio={mockYieldXPortfolio} />);

    expect(screen.queryByText(/edit\s*positions/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/close/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/close/i)).toBeNull();
  });

  test("should use portfolio header data", async () => {
    let mockData: Partial<PortfolioHeaderData> = {};

    function Mock() {
      const headerData = usePortfolioHeaderData(mockYieldXPortfolio);
      if (headerData) mockData = headerData;
      return mockData ? <div /> : <Spinner />;
    }

    render(<Mock />, { route: "/portfolios/live/portfolioId" });
    expect(mockData).toBeDefined();
  });
});
