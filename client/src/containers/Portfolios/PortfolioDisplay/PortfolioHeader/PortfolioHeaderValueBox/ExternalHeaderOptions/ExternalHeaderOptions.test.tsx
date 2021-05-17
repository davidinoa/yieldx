import React from "react";
import { render } from "../../../../../../test/utils";
import ExternalHeaderOptions from "./ExternalHeaderOptions";
import { mockMultiAssetPortfolio } from "../../../../../../__mocks__/models/mockYieldXPortfolio";

describe("ExternalHeaderOptions", () => {
  test("Should render", () => {
    const { container } = render(
      <ExternalHeaderOptions
        portfolio={mockMultiAssetPortfolio}
        setShowHoursModal={jest.fn()}
        setShowInvestModal={jest.fn()}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
