import React from "react";
import { render } from "../../test/utils";
import ErrorAlert from "./ErrorAlert";

describe("Error Alert", () => {
  test("mounts", () => {
    const { container } = render(<ErrorAlert/>);
    expect(container).toBeInTheDocument();
  });
});
