import userEvent from "@testing-library/user-event";
import React from "react";
import { render, screen } from "../../../../../../test/utils";
import mockYieldXPortfolio from "../../../../../../__mocks__/models/mockYieldXPortfolio";
import LiveHeaderOptions from "./LiveHeaderOptions";

describe("LiveHeaderOptions", () => {
  test("mounts without errors/warnings", async () => {
    render(<LiveHeaderOptions portfolio={mockYieldXPortfolio} />);
    userEvent.click(screen.getByRole("button"));
    const editPositions = await screen.findByText(/edit positions/i);
    const liquidatePortfolio = await screen.findByText(/liquidate portfolio/i);
    expect(editPositions).toBeVisible();
    expect(liquidatePortfolio).toBeVisible();
    userEvent.click(editPositions);
  });
});
