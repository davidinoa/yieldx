import React from "react";
import { render, screen } from "../../../../../../../test/utils";
import ProfitLossValue from "./ProfitLossValue";

describe("ProfitLossValue", () => {
  test("Should render label correctly", () => {
    render(<ProfitLossValue label="today gain/loss:" />);
    expect(screen.queryByText(/today gain\/loss:/i)).toBeInTheDocument();
  });

  test("Should render spinner if value undefined", () => {
    render(<ProfitLossValue label="today gain/loss:" />);
    expect(screen.queryByTestId("spinner")).toBeInTheDocument();
  });

  test("Should render formatted value prop with correct class", () => {
    const { rerender, asFragment } = render(
      <ProfitLossValue label="today gain/loss:" value={3.5} />
    );
    expect(asFragment()).toMatchSnapshot();
    rerender(<ProfitLossValue label="today gain/loss:" value={0} />);
    expect(asFragment()).toMatchSnapshot();
    rerender(<ProfitLossValue label="today gain/loss:" value={-3.5} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render error icon if error prop is true", () => {
    const { asFragment } = render(
      <ProfitLossValue label="today gain/loss:" error />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
