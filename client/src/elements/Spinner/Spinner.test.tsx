import React from "react";
import { render } from "@testing-library/react";
import { Spinner } from "./Spinner";

test("should render", () => {
  const { container } = render(<Spinner />);
  expect(container).toBeDefined();
});
