import React from "react";
import { waitFor } from "@testing-library/react";
import Favorites from "./Favorites";
import { render, screen } from "../../test/utils";

test("renders", async () => {
  render(<Favorites />);
  await waitFor(() => screen.getByTestId(/spinner/i));
  expect(screen.getByRole("heading")).toHaveTextContent(/favorites/i);
});
