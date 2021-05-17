import React from "react";
import YieldContribution from "./YieldContribution";
import { render } from "../../../../../test/utils";

describe("YieldContribution", () => {
  test("mounts", () => {
    const { container } = render(
      <YieldContribution contribution={{ names: [], values: [] }} />
    );
    expect(container).toBeInTheDocument();
  });
});
