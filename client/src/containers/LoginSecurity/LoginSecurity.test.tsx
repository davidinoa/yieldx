import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitForElementToBeRemoved } from "test/utils";
import LoginSecurity from "./LoginSecurity";

test("renders", async () => {
  render(<LoginSecurity />, { route: "#reset-password" });
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));

  const personalInfoLink = screen.getByRole("link", {
    name: "Personal information"
  });

  expect(personalInfoLink).toBeInTheDocument();
  userEvent.click(personalInfoLink);

  expect(screen.getAllByRole("button")).toHaveLength(2);
});
