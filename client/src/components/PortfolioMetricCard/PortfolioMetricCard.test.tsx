import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "test/utils";
import { ToolTipContent } from "assets/content";
import PortfolioMetricCard from "./PortfolioMetricCard";

describe("PortfolioMetricCard", () => {
  it("Should render card with title and children", () => {
    const { asFragment } = render(
      <PortfolioMetricCard label="Risk comparison">
        <h1>mock content</h1>
      </PortfolioMetricCard>
    );
    expect(screen.queryByText(/risk comparison/i)).toBeInTheDocument();
    expect(screen.queryByText(/mock content/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render card with title, children, and tooltip", () => {
    const { asFragment } = render(
      <PortfolioMetricCard
        label="Risk comparison"
        tooltipContent="mock tooltip"
      >
        <h1>mock content</h1>
      </PortfolioMetricCard>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render with single value", () => {
    const { asFragment } = render(
      <PortfolioMetricCard
        xs={6}
        value={{
          tooltipContent: ToolTipContent.targetYield,
          label: "Yield",
          number: 5.0,
          format: "%"
        }}
      />
    );
    expect(screen.queryByText(/yield/i)).toBeInTheDocument();
    expect(screen.queryByText(/5.00/i)).toBeInTheDocument();
    expect(screen.queryByText(/%/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render with two values and text button to switch", async () => {
    const { asFragment } = render(
      <PortfolioMetricCard
        xs={6}
        value={{
          tooltipContent: ToolTipContent.targetYield,
          label: "Income",
          number: 525,
          format: "$",
          toggleLabel: "Annual",
          helperText: "monthly"
        }}
        secondValue={{
          tooltipContent: ToolTipContent.targetIncome,
          label: "Income",
          number: 525 * 12,
          format: "$",
          toggleLabel: "Monthly",
          helperText: "yearly"
        }}
      />
    );
    expect(screen.queryByText(/Income/i)).toBeInTheDocument();
    expect(screen.queryByText(/\$525/i)).toBeInTheDocument();
    expect(screen.queryByText(/\/monthly/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
    const textButton = await screen.findByText(/annual/i);
    expect(textButton).toBeInTheDocument();
    userEvent.click(textButton);

    expect(screen.queryByText(/monthly/i)).toBeInTheDocument();
    expect(screen.queryByText(/\/yearly/i)).toBeInTheDocument();
    expect(screen.queryByText(/\$6,300/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
