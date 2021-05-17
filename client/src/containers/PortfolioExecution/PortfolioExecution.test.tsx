import React from "react";
import PortfolioExecution from "./PortfolioExecution";
import { render } from "../../test/utils";

describe("PortfolioExecution", () => {
  test("mounts", () => {
    const { container } = render(<PortfolioExecution />);
    expect(container).toBeInTheDocument();
  });
});
