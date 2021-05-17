import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitForElementToBeRemoved } from "test/utils";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import MultiAssetView from "./MultiAssetView";

test("renders", async () => {
  render(
    <MultiAssetView editPositions={jest.fn} portfolio={mockYieldXPortfolio} />
  );
  await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));
  const sectionHeadings = screen.getAllByRole("heading");
  expect(sectionHeadings).toHaveLength(3);
  const editPositionButton = screen.getByRole("button", {
    name: /edit positions/i
  });
  userEvent.click(editPositionButton);
});
