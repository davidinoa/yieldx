import React from "react";
import userEvent from "@testing-library/user-event";
import FundsView from "./FundsView";
import { render, screen } from "../../../../../test/utils";
import { mockMultiAssetPortfolio } from "../../../../../__mocks__/models/mockYieldXPortfolio";

describe("FundsView", () => {
  it("Should match snapshot", () => {
    const { asFragment } = render(
      <FundsView
        editPositions={jest.fn}
        portfolio={mockMultiAssetPortfolio.getFundSleeve()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders funds view", async () => {
    render(
      <FundsView
        editPositions={jest.fn}
        portfolio={mockMultiAssetPortfolio.getFundSleeve()}
      />
    );
    const editPositionButton = await screen.findByRole("button", {
      name: /edit positions/i
    });
    userEvent.click(editPositionButton);
  });
});
