import React from "react";
import { Cart } from "@bondhouse/rover-preferences";
import { Asset } from "@bondhouse/rover-universe";
import { Col, Modal, Row } from "react-bootstrap";
import CsvDownloader from "react-csv-downloader";
import styled from "styled-components";
import { ReactComponent as X } from "assets/svg/x.svg";
import { Spinner } from "elements/Spinner/Spinner";
import { assetsService, cartService } from "services";
import { ExportButton } from "elements/AppBottomNav/AppBottomNav.styles";
import CartItemRow from "components/Navbar/ShoppingCartNav/CartWindow/CartItemRow";
import EmptyCartMessage from "components/Navbar/ShoppingCartNav/CartWindow/EmptyCart/EmptyCart";
import {
  Actions,
  BrowseButton,
  CartHeader,
  CartItemList,
  OptimizeButton,
  Root
} from "components/Navbar/ShoppingCartNav/CartWindow/CartWindow.styles";
import rfdc from "rfdc";

interface Props {
  cart?: Cart;
  position?: "bottom left" | "top right";
  toggleModal: () => void;
  show: boolean;
  isUsingPortfolioCart: boolean;
}

const clone = rfdc();

const StyledDialog = styled(Modal.Dialog).attrs({
  className:
    "modal-dialog col-23 col-md-18 col-lg-12 col-xl-7 ml-auto mt-0 mr-0 mb-0 p-0",
  id: "modal-fade-right"
})``;
const CartWindow = ({
  cart,
  toggleModal,
  show,
  isUsingPortfolioCart
}: Props) => {
  const [assets, setAssets] = React.useState<Record<string, Asset> | null>(
    null
  );

  React.useEffect(() => {
    if (cart)
      assetsService
        .getAssets(cart.items.map(cv => cv.assetId))
        .then(data => setAssets(data));
  }, [cart, setAssets]);

  const getCsvDataFromCart = () => {
    if (cart) {
      return cart.items.map(item => {
        const asset = assets?.[item.assetId];
        if (!asset) throw Error("Asset hasn't been fetched");
        const copy: Asset = clone(asset);
        Object.entries(copy).forEach(([key, value]) => {
          if (typeof value === "object") {
            delete copy[key as keyof Asset];
          }
        });
        return copy;
      });
    }
    return [];
  };

  return (
    <Modal
      data-testid="cart-window"
      onHide={toggleModal}
      show={show}
      centered={false}
      dialogAs={StyledDialog}
      dialogClassName="col-23 col-md-18 col-lg-12 col-xl-7 ml-auto mt-0 mr-0 mb-0"
    >
      <Root>
        <button
          data-testid="cart-window-close-button"
          type="button"
          onClick={() => toggleModal()}
        >
          <X />
        </button>

        <Row className="w-100">
          <Col xs={22} className="ml-auto mr-auto">
            {!assets && !cart && <Spinner />}
            {cart && assets && (
              <div data-testid="cart-window-content">
                {cart.items.length === 0 ? (
                  <EmptyCartMessage hideCartWindow={() => toggleModal()} />
                ) : (
                  <>
                    <CartHeader>
                      <h1>{`Your assets (${cart.items.length})`}</h1>
                      <button
                        data-testid="delete-all-button"
                        type="button"
                        onClick={() =>
                          isUsingPortfolioCart
                            ? cartService.clearPortfolioCart()
                            : cartService.clearCart()
                        }
                      >
                        Delete all
                      </button>
                    </CartHeader>

                    <CartItemList>
                      {cart.items.map(cartItem => (
                        <CartItemRow
                          key={cartItem.assetId}
                          asset={assets[cartItem.assetId]}
                          isUsingPortfolioCart={isUsingPortfolioCart}
                        />
                      ))}
                    </CartItemList>
                    <Actions>
                      <div style={{ display: "flex" }}>
                        <CsvDownloader
                          filename="YieldX_shopping_cart"
                          datas={getCsvDataFromCart()}
                        >
                          <ExportButton>Export</ExportButton>
                        </CsvDownloader>
                        <OptimizeButton
                          to="/asset-explorer/portfolio-builder"
                          onClick={toggleModal}
                        >
                          Optimize these assets
                        </OptimizeButton>
                      </div>
                      <BrowseButton
                        data-testid="browse-more"
                        to="/asset-explorer/search"
                        onClick={toggleModal}
                      >
                        Browse more assets
                      </BrowseButton>
                    </Actions>
                  </>
                )}
              </div>
            )}
          </Col>
        </Row>
      </Root>
    </Modal>
  );
};

export default CartWindow;
