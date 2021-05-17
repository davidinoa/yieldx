import React from "react";
import ExecutingPortfolio from "./ExecutingPortfolio";
import { render } from "../../../../test/utils";
import mockYieldXPortfolio from "../../../../__mocks__/models/mockYieldXPortfolio";

describe("ExecutingPortfolio", () => {
  test("mounts", () => {
    render(<ExecutingPortfolio portfolio={mockYieldXPortfolio} />);
  });
});
