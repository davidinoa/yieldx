import React from "react";
import userEvent from "@testing-library/user-event";
import SideMenu from "./SideMenu";
import { render, screen } from "../../test/utils";
import { hidePaths } from "../../components/AppLayout/AppLayout";

test("renders", async () => {
  render(<SideMenu expanded hidePaths={hidePaths} />);
  render(<SideMenu expanded={false} hidePaths={hidePaths} />);
  const moreBtns = await screen.findAllByTestId("more-icon");
  expect(moreBtns[0]).toBeInTheDocument();
  userEvent.click(moreBtns[0]);
  expect(screen.getByText(/website/i)).toBeVisible();
  expect(screen.getByRole("link", { name: "Website" })).toHaveAttribute(
    "href",
    "https://www.yieldx.app/"
  );
  userEvent.click(screen.getByText(/website/i));
});
