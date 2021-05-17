import React from "react";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { AppType, PortfolioType } from "@bondhouse/income-portfolios";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { buildMockPortfolio, render, screen } from "test/utils";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import PortfolioReview from "./PortfolioReview";

describe("PortfolioReview", () => {
  describe("back button", () => {
    test("inpaas review", async () => {
      const history = createMemoryHistory({
        initialEntries: ["/inpaas/portfolio-review"]
      });
      const mockInpaasPortfolio = buildMockPortfolio({
        appType: AppType.INPAAS
      });
      mockInpaasPortfolio.portfolioType = PortfolioType.EXTERNAL;

      render(<PortfolioReview portfolio={mockInpaasPortfolio} />, {
        history,
        route: "/inpaas/portfolio-review"
      });

      await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
      expect(screen.getByText(/review your proposal/i)).toBeVisible();
      const backButton = screen.getByRole("button", {
        name: "chevron-left.svg Previous"
      });
      expect(backButton).toBeVisible();

      userEvent.click(backButton);
      expect(history.location.pathname).toBe("/inpaas/goals");
    });

    test("best-fit review", async () => {
      const history = createMemoryHistory({
        initialEntries: ["/best-fit/portfolio-review"]
      });
      render(<PortfolioReview portfolio={mockYieldXPortfolio} />, {
        history,
        route: "/best-fit/portfolio-summary"
      });

      await waitFor(() => screen.getAllByRole("heading"));
      expect(screen.getByText(/review your portfolio/i)).toBeVisible();
      const backButton = screen.getByRole("button", {
        name: "chevron-left.svg Previous"
      });
      expect(backButton).toBeVisible();

      userEvent.click(backButton);
      expect(history.location.pathname).toBe(
        "/best-fit/preferences/investment"
      );
    });
  });

  describe("modals", () => {
    test("save as paper (bonds)", async () => {
      const history = createMemoryHistory();

      render(<PortfolioReview portfolio={mockYieldXPortfolio} />, {
        history,
        route: "/asset-explorer/portfolio-review"
      });

      await waitFor(() => screen.getAllByRole("button"));

      userEvent.click(screen.getByText(/save as paper/i));
      expect(await screen.findByText(/confirm and save/i)).toBeVisible();
      expect(screen.getByText(/cancel/i)).toBeVisible();

      userEvent.click(screen.getByText(/cancel/i));
    });
  });

  test("execute button in review page", async () => {
    const history = createMemoryHistory();

    render(<PortfolioReview portfolio={mockYieldXPortfolio} />, {
      history,
      route: "/asset-explorer/portfolio-review"
    });
    const executeButton = screen.getByText(/execute/i);
    userEvent.click(executeButton);
  });
});
