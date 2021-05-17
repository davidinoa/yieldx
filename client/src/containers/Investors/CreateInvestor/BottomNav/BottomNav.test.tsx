import React from "react";
import BottomNav from "./BottomNav";
import { render } from "../../../../test/utils";

test("should render", () => {
  const { container } = render(<BottomNav onPrevious={() => undefined} />);
  expect(container).toBeDefined();
});

test("next button is disabled", () => {
  const { container, queryByText } = render(
    <BottomNav blockNext onPrevious={() => undefined} />
  );
  const nextButton = queryByText(/continue/);
  expect(nextButton).toBeDisabled();
  expect(container).toBeDefined();
});
