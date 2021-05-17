import React from "react";
import EmptyCart from "components/Navbar/ShoppingCartNav/CartWindow/EmptyCart/EmptyCart";
import { render } from "test/utils";

test("there is a link to browse for more assets", () => {
  const { getByRole } = render(<EmptyCart hideCartWindow={jest.fn} />);
  const browseLink = getByRole("link");
  expect(browseLink).toBeEnabled();
  expect(browseLink).toHaveTextContent(/browse assets/i);
});
