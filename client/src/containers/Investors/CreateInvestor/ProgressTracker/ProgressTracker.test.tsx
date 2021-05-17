import React from "react";
import { render } from "../../../../test/utils";
import ProgressTracker from "./ProgressTracker";

describe("ProgressTracker", () => {
  test("mounts", () => {
    render(<ProgressTracker />, {
      route: "/personal-info"
    });
  });
});
