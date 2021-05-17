import React from "react";
import PortfolioFootNote from "./PortfolioFootNote";
import { render } from "../../../../test/utils";

test("renders", () => {
  const { container } = render(<PortfolioFootNote />);
  expect(container).toBeInTheDocument();
});
