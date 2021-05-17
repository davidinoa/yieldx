import React from "react";
import CartWindow from "components/Navbar/ShoppingCartNav/CartWindow/CartWindow";
import { render } from "test/utils";

test("renders", () => {
  const { container } = render(
    <CartWindow
      show
      isUsingPortfolioCart
      cart={{ id: "", items: [] }}
      toggleModal={() => undefined}
    />
  );
  expect(container).toBeInTheDocument();
});
