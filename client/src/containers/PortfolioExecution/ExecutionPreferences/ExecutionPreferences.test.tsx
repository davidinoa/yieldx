import React from "react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { render, waitFor, getAllByRole, screen } from "test/utils";
import ExecutionPreferences from "./ExecutionPreferences";

describe("ExecutionPreferences", () => {
  test("renders a form for preferences", async () => {
    const { getAllByText, getByTestId } = render(<ExecutionPreferences />);
    await waitFor(() => getAllByText(/preferences/i));

    const fullFillField = getByTestId("fullFillRequired");
    const [fullFillBtn, allNoneBtn] = getAllByRole(fullFillField, "radio");
    expect(fullFillBtn).toBeChecked();
    userEvent.click(allNoneBtn);
    expect(allNoneBtn).toBeChecked();

    const goodTillCancelField = getByTestId("goodTillCancel");
    const [yesBtn, noBtn] = getAllByRole(goodTillCancelField, "radio");
    expect(yesBtn).toBeChecked();
    userEvent.click(noBtn);
    expect(noBtn).toBeChecked();

    waitFor(() => expect(yesBtn).not.toBeChecked());
  });

  test("back button is present", async () => {
    const history = createMemoryHistory({
      initialIndex: 1,
      initialEntries: [
        "/execute-portfolio/investors",
        "/execute-portfolio/preferences"
      ]
    });
    const { getAllByText, getByRole } = render(<ExecutionPreferences />, {
      history
    });
    await waitFor(() => getAllByText(/preferences/i));
    const backButton = getByRole("button", { name: /previous/i });
    expect(backButton).toBeVisible();

    userEvent.click(backButton);
    expect(history.location.pathname).toBe("/execute-portfolio/investors");

    await waitFor(() => screen.getAllByRole("heading"));
  });
});
