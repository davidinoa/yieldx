import React from "react";
import { Asset } from "@bondhouse/rover-universe";
import { Col } from "react-bootstrap";
import { cartService } from "services";
import { RowRoot } from "components/Navbar/ShoppingCartNav/CartWindow/CartWindow.styles";
import { ReactComponent as X } from "assets/svg/delete-cart-item.svg";
import Decimal from "util/Decimal";
import getAssetType from "components/Navbar/ShoppingCartNav/CartWindow/getAssetType";
import { Spinner } from "elements/Spinner/Spinner";

interface Props {
  asset?: Asset;
  isUsingPortfolioCart: boolean;
}

const CartItemRow = ({ asset, isUsingPortfolioCart }: Props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { yield: yld } = asset?.analytics || {};

  if (!asset) return <Spinner />;
  return (
    <RowRoot>
      <Col xs className="name">
        {asset.name}
      </Col>
      <Col xs={4} className="property">
        <span>{yld ? Decimal.format(yld) : "-"}&nbsp;%</span>
        <span>yield</span>
      </Col>
      <Col xs={4} className="property">
        <span>{getAssetType(asset)}</span>
        <span>type</span>
      </Col>
      <Col xs={2} className="delete">
        <button
          type="button"
          onClick={() =>
            isUsingPortfolioCart
              ? cartService.deletePortfolioCartItem(asset.id)
              : cartService.deleteCartItem(asset.id)
          }
        >
          <X />
        </button>
      </Col>
    </RowRoot>
  );
};

export default CartItemRow;
