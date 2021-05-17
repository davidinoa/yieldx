import React from "react";
import {
  EmptyBrowseButton,
  EmptyContainer
} from "components/Navbar/ShoppingCartNav/CartWindow/CartWindow.styles";
import { ReactComponent as EmptyCartIcon } from "assets/svg/empty-cart.svg";

type Props = {
  hideCartWindow: () => void;
};

const EmptyCart = ({ hideCartWindow }: Props) => {
  return (
    <EmptyContainer>
      <EmptyCartIcon />
      <br />
      <h1 data-testid="empty-cart-header">Your cart is empty</h1>
      <br />
      <span>
        Looks like you haven&rsquo;t added any assets to your cart yet.
      </span>
      <br />
      <EmptyBrowseButton to="/asset-explorer/search" onClick={hideCartWindow}>
        Browse assets
      </EmptyBrowseButton>
    </EmptyContainer>
  );
};

export default EmptyCart;
