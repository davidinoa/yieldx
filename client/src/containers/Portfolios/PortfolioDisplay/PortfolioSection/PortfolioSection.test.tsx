import React from "react";
import { render, screen } from "test/utils";
import PortfolioSection from "containers/Portfolios/PortfolioDisplay/PortfolioSection/PortfolioSection";

describe("PortfolioSection", () => {
  it("Should render title prop", () => {
    render(<PortfolioSection title="Portfolio Section" />);
    expect(screen.queryByText(/portfolio section/i)).toBeVisible();
  });

  it("Should render a single child", () => {
    render(
      <PortfolioSection title="Portfolio Section">
        <div data-testid="mock-child">child div</div>
      </PortfolioSection>
    );
    expect(screen.queryByTestId("mock-child")).toBeVisible();
  });

  it("Should render a single child", () => {
    render(
      <PortfolioSection title="Portfolio Section">
        <div data-testid="mock-child">child div</div>
        <div data-testid="mock-child">child div</div>
        <div data-testid="mock-child">child div</div>
      </PortfolioSection>
    );
    expect(screen.queryAllByTestId("mock-child").length).toBe(3);
  });

  it("Should not render edit positions button if no prop for edit", () => {
    render(<PortfolioSection title="test" />);
    expect(
      screen.queryByTestId("edit-positions-button")
    ).not.toBeInTheDocument();
  });

  it("Should render edit positions button if prop for edit provided", () => {
    render(
      <PortfolioSection title="Positions" onEditPositions={jest.fn()}>
        <div>test</div>
      </PortfolioSection>
    );
    expect(screen.queryByTestId("edit-positions-button")).toBeInTheDocument();
  });
});
