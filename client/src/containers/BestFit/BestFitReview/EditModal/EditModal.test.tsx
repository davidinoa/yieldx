import React from "react";
import { RecoilRoot } from "recoil";
import { buildMockPortfolio, render, screen } from "test/utils";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { INDIVIDUAL_INVESTOR } from "__mocks__/@bondhouse/investor/__fixtures__";
import { portfolioState } from "__mocks__/services/PortfolioService";
import { AppType } from "@bondhouse/income-portfolios";
import EditModal from "./EditModal";

const mockInpaasPortfolio = buildMockPortfolio({
  appType: AppType.INPAAS
});
test("modal is hidden", () => {
  render(
    <RecoilRoot
      initializeState={({ set }) => {
        set(portfolioState, {
          portfolioId: "",
          status: "reviewing",
          currentPortfolio: mockYieldXPortfolio,
          originalPortfolio: mockYieldXPortfolio,
          orders: []
        });

        set(portfolioCreateOrEditState, {
          status: "reviewing",
          portfolioId: mockYieldXPortfolio.getId(),
          selectedInvestor: INDIVIDUAL_INVESTOR,
          currentPortfolio: mockYieldXPortfolio
        });
      }}
    >
      <EditModal
        isOpen={false}
        portfolio={mockYieldXPortfolio}
        onClose={jest.fn}
      />
    </RecoilRoot>,
    {
      route: "/inpaas/portfolio-review"
    }
  );
});

test("editing positions for a paper-inpaas portfolio", async () => {
  render(
    <RecoilRoot
      initializeState={({ set }) => {
        set(portfolioCreateOrEditState, {
          portfolioId: mockInpaasPortfolio.getId(),
          status: "editing",
          currentPortfolio: mockInpaasPortfolio,
          originalPortfolio: mockInpaasPortfolio,
          selectedInvestor: INDIVIDUAL_INVESTOR
        });
      }}
    >
      <EditModal isOpen onClose={jest.fn} portfolio={mockInpaasPortfolio} />
    </RecoilRoot>,
    {
      route: "/portfolios/external/#edit-positions"
    }
  );
  const continueButton = await screen.findByRole("button", {
    name: /continue/i
  });
  expect(continueButton).toBeInTheDocument();
});
