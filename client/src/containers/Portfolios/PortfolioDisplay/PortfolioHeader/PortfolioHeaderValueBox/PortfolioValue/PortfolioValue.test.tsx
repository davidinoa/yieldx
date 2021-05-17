import React from "react";
import { render, screen } from "../../../../../../test/utils";
import PortfolioValue from "./PortfolioValue";

describe("PortfolioValue", () => {
  test("Should display title", () => {
    render(<PortfolioValue value={971.26} />);
    expect(screen.queryByText(/portfolio value/i)).toBeInTheDocument();
  });

  test("Should display correct dollar and cent values", () => {
    render(<PortfolioValue value={971.26} />);
    expect(screen.queryByText("$971")).toBeInTheDocument();
    expect(screen.queryByText(".26")).toBeInTheDocument();
  });

  test("Should match snapshot markup", () => {
    const { asFragment } = render(<PortfolioValue value={971.26} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
