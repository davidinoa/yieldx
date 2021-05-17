import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "test/utils";
import { ValueBox } from "components/ValueBox/ValueBox";

test("edit button", async () => {
  render(<ValueBox value={250_000} onEdit={jest.fn} />);
  await waitFor(() => screen.getAllByRole("heading"));
  expect(screen.getByRole("button")).toBeVisible();
  userEvent.click(screen.getByRole("button"));
});
