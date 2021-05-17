import React from "react";
import Alert from "./Alert";
import { render } from "../../test/utils";

describe("Alert", () => {
  test("mounts", () => {
    const { container } = render(<Alert message="" />);
    expect(container).toBeInTheDocument();
  });
});
