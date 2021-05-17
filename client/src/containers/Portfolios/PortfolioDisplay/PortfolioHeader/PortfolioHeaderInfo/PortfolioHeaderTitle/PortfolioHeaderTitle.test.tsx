import React from "react";
import { render, screen } from "../../../../../../test/utils";
import PortfolioHeaderTitle from "./PortfolioHeaderTitle";

describe("PortfolioHeaderTitle", () => {
  it("Should render properly if review for custom (best fit / asset explorer)", () => {
    const { asFragment } = render(<PortfolioHeaderTitle isInpaas={false} isReview />);
    expect(screen.queryByText(/review your portfolio/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  it("Should render properly if review for inpaas", () => {
    const { asFragment } = render(<PortfolioHeaderTitle isInpaas isReview />);
    expect(screen.queryByText(/review your proposal/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  it("Should render portfolio name and edit button if not review", () => {
    const { asFragment } = render(<PortfolioHeaderTitle portfolioName="Mock portfolio" />);
    expect(screen.queryByText(/mock portfolio/i)).toBeInTheDocument();
    expect(screen.queryByTestId("edit-name-button")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
