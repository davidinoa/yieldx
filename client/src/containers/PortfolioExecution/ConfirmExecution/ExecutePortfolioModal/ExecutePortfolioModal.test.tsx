import React from "react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import { render, screen } from "test/utils";
import { INDIVIDUAL_INVESTOR } from "__mocks__/@bondhouse/investor/__fixtures__";
import { MOCK_BESTFIT_PORTFOLIO_ASSETS } from "__mocks__/@bondhouse/position-management/__fixtures__";
import YieldXPortfolio from "models/YieldXPortfolio";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import ExecutePortfolioModal from "./ExecutePortfolioModal";

const customPortfolio = YieldXPortfolio.fromAssets(
  "mockBestFitPortfolioId",
  MOCK_BESTFIT_PORTFOLIO_ASSETS
);

describe("ExecutePortfolioModal", () => {
  test("should render error with no selected investor", async () => {
    const { container } = render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(portfolioCreateOrEditState, {
            status: "reviewing",
            portfolioId: "",
            selectedInvestor: INDIVIDUAL_INVESTOR,
            currentPortfolio: customPortfolio
          });
        }}
      >
        <ExecutePortfolioModal
          isOpen
          onHide={jest.fn()}
          executionPreferences={{
            goodTillCancel: true,
            fullFillRequired: true
          }}
          selectedInvestor={INDIVIDUAL_INVESTOR}
          currentPortfolio={customPortfolio}
        />
      </RecoilRoot>,
      {
        route: "/execute-portfolio/investors"
      }
    );
    expect(container).toBeInTheDocument();
    const closeButton = await screen.findByRole("button", { name: /x\.svg/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("input test", async () => {
    const { container, getByLabelText, getByText } = render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(portfolioCreateOrEditState, {
            status: "reviewing",
            portfolioId: "",
            selectedInvestor: INDIVIDUAL_INVESTOR,
            currentPortfolio: customPortfolio
          });
        }}
      >
        <ExecutePortfolioModal
          isOpen
          onHide={jest.fn()}
          executionPreferences={{
            goodTillCancel: true,
            fullFillRequired: true
          }}
          selectedInvestor={INDIVIDUAL_INVESTOR}
          currentPortfolio={customPortfolio}
        />
      </RecoilRoot>,
      {
        route: "/yieldx/execute-portfolio/investors"
      }
    );
    expect(container).toBeInTheDocument();
    const nameInput = getByLabelText("portfolio name");
    expect(nameInput).toBeInTheDocument();
    expect(getByText("Confirm and execute")).toBeDisabled();
    // await act(() => userEvent.type(nameInput, "test input"));
    await userEvent.type(nameInput, "test input");
    expect(nameInput.getAttribute("value")).toBe("test input");
    expect(getByText("Confirm and execute")).not.toBeDisabled();
    userEvent.click(getByText("Confirm and execute"));
  });
});
