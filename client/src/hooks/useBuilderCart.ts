import React from "react";
import { Cart } from "@bondhouse/rover-preferences";
import { cartService } from "../services";

export default function useBuilderCart(
  cartContext?: "portfolio-cart" | "user-cart"
) {
  const [cart, setCart] = React.useState<Cart>();
  React.useEffect(() => {
    if (cartContext === "portfolio-cart")
      setCart(cartService.getPortfolioCart());
    else cartService.getCart().then(data => setCart(data));
  }, [cartContext]);
  return cart;
}
