import React from "react";
import { PortfolioStatus } from "@bondhouse/rover-portfolio-analyzer";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import { render, screen } from "test/utils";
import { INDIVIDUAL_INVESTOR } from "__mocks__/@bondhouse/investor/__fixtures__";
import { Investor } from "providers/graphql/hooks";
import PortfolioHeaderInfo from "./PortfolioHeaderInfo";

describe("PortfolioHeaderInfo", () => {
  test("review should display review title", async () => {
    const { container } = render(
      <PortfolioHeaderInfo portfolio={mockYieldXPortfolio} isReview />
    );
    expect(container).toBeInTheDocument();
    expect(
      screen.queryByTestId("PortfolioHeader-Additional-Info")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("edit-name-button")).not.toBeInTheDocument();
    expect(screen.getByText(/Review your portfolio/i)).toBeInTheDocument();
  });

  test("if not review it should display portfolio name and status", () => {
    const clone = mockYieldXPortfolio.clone();
    clone.setStatus(PortfolioStatus.READY);
    clone.setName("mock portfolio name");
    const { container } = render(<PortfolioHeaderInfo portfolio={clone} />);
    expect(container).toBeInTheDocument();
    expect(screen.queryByTestId("Header-Info-Status")).toBeInTheDocument();
    expect(
      screen.queryByTestId("PortfolioHeader-PortfolioMetadata")
    ).toBeInTheDocument();
    expect(screen.queryByTestId("edit-name-button")).toBeInTheDocument();
    expect(screen.getByText(/mock portfolio name/i)).toBeInTheDocument();
  });

  test("if investor provided, it should display investor info", () => {
    const clone = mockYieldXPortfolio.clone();
    clone.setStatus(PortfolioStatus.READY);
    clone.setName("mock portfolio name");
    const { container } = render(
      <PortfolioHeaderInfo
        portfolio={clone}
        investor={(INDIVIDUAL_INVESTOR as unknown) as Investor}
      />
    );
    expect(container).toBeInTheDocument();
    expect(
      screen.queryByTestId("PortfolioHeader-PortfolioMetadata")
    ).toBeInTheDocument();
    expect(screen.getByText(/Alfredo Alpizar/i)).toBeInTheDocument();
  });
});
