import React from "react";
import CustomToolTip from "./CustomToolTip";
import { render } from "../../../../test/utils";

describe("CustomToolTip", () => {
  test("should mount", () => {
    render(<CustomToolTip value="" />);
  });
});
