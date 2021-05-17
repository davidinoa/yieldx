import React from "react";
import userEvent from "@testing-library/user-event";
import BondsView from "./BondsView";
import { render, screen } from "../../../../../test/utils";
import mockYieldXPortfolio from "../../../../../__mocks__/models/mockYieldXPortfolio";

test.skip("mounts", async () => {
  render(
    <BondsView
      editPositions={jest.fn}
      portfolio={mockYieldXPortfolio.getBondSleeve()}
    />
  );
  const editPositionButton = await screen.findByRole("button", {
    name: /edit positions/i
  });
  userEvent.click(editPositionButton);
});
