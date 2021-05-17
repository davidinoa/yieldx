import React from "react";
import EmptyListFallback from "./EmptyListFallback";
import { render } from "../../../../test/utils";

test("renders", () => {
  const { container } = render(<EmptyListFallback />);
  expect(container).toBeInTheDocument();
});
