import React from "react";
import SectorAllocation from "./SectorAllocation";
import { render } from "../../../../../test/utils";
import mockYieldXPortfolio from "../../../../../__mocks__/models/mockYieldXPortfolio";

describe("SectorAllocation", () => {
  test("mounts", () => {
    const { container } = render(
      <SectorAllocation
        type="bonds"
        positions={mockYieldXPortfolio.positions}
        totalMarketValue={mockYieldXPortfolio.totalMarketValue}
        cashMarketValue={mockYieldXPortfolio.cashMarketValue}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
