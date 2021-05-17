// jest.mock("services");
import React from "react";
import { render } from "../../../test/utils";
// import BestFitNav from "./BestFitNav";

test("should render", () => {
  const { container } = render(<div />);
  expect(container).toBeInTheDocument();
});
