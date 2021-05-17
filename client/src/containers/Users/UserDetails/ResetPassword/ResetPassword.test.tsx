import React from "react";
import ResetPassword from "./ResetPassword";
import { render } from "../../../../test/utils";

test("renders", () => {
  const { container } = render(
    <ResetPassword show onHide={() => jest.fn()} email="user@bondhouse.com" />
  );
  expect(container).toBeInTheDocument();
});
