import React from "react";
import { render, screen } from "../../test/utils";
import TrialExpired from "./TrialExpired";

describe("TrialExpired", () => {
  test("contact number is present", async () => {
    render(<TrialExpired />);
    expect(screen.getByText(/646/i)).toBeVisible();
  });
});
