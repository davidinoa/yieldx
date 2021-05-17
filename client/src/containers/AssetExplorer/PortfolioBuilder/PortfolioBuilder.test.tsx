import React from "react";
import { Cart } from "@bondhouse/rover-preferences";
import { Analysis } from "@bondhouse/rover-portfolio-analyzer";
import { fireEvent, render, screen, waitFor } from "test/utils";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import debounce from "util/debounce";
import PortfolioBuilder from "./PortfolioBuilder";
import AnalyticSummaryItem from "./components/AnalyticSummaryItem";
import { analyzeCallback } from "./util/analysis";

export const mockCart: Cart = { id: "mockCart", items: [] };

describe("PortfolioBuilder", () => {
  test("mounts with a portfolio", async () => {
    render(
      <PortfolioBuilder
        setPortfolio={jest.fn}
        portfolio={mockYieldXPortfolio}
        investmentAmount={0}
        setInvestmentAmount={jest.fn}
      />
    );
    await waitFor(() => screen.getByText(/cash/i), { timeout: 5000 });
    expect(
      screen.getByRole("heading", { name: "Build your portfolio" })
    ).toBeInTheDocument();
  });

  test("input", async () => {
    render(
      <PortfolioBuilder
        setPortfolio={jest.fn}
        portfolio={mockYieldXPortfolio}
        investmentAmount={59_750.0}
        setInvestmentAmount={jest.fn}
      />
    );
    const investmentInput = await screen.findByRole("textbox");
    expect(investmentInput).toHaveValue("59,750.00");
    fireEvent.change(investmentInput, { target: { value: "" } });
    expect(investmentInput.nodeValue).toBeFalsy();
  });

  test("analytics", async () => {
    render(
      <>
        <AnalyticSummaryItem name="Yield" value={0} suffix="%" />
        <AnalyticSummaryItem name="Risk" value={0} suffix="%" />
      </>
    );
  });

  test("debounce and analyze utils", () => {
    const debounced = debounce(jest.fn, 0);
    const mockFn = jest.fn((_analysis: Analysis) => undefined);
    const analyzeResult = analyzeCallback(mockYieldXPortfolio, mockFn);
    expect(analyzeResult).toBeUndefined();
    expect(debounced).toBeInstanceOf(Function);
  });
});
