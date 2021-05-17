import React from "react";
import LandingPage from "./LandingPage";
import { render } from "../../test/utils";

test("should render", () => {
  const { container } = render(
    <LandingPage tag="" link="" text="" title="BestFit" />
  );
  expect(container).toBeDefined();
});
