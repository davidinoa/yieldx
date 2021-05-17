import React from "react";
import { Cart } from "@bondhouse/rover-preferences";
import { useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { ReactComponent as ShoppingCart } from "assets/svg/shopping-cart.svg";
import { ReactComponent as PortfolioIcon } from "assets/svg/portfolio.svg";
import { cartService } from "services";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { CartButton } from "components/Navbar/ShoppingCartNav/ShoppingCartNav.styles";
import CartWindow from "components/Navbar/ShoppingCartNav/CartWindow/CartWindow";

function ShoppingCartNav() {
  const { search } = useLocation();
  const portfolioEditParams = parsePortfolioQuery(search);
  const [showModal, setShowModal] = React.useState(false);
  const [cart, setCart] = React.useState<Cart>();
  const { cartContext } = useRecoilValue(portfolioCreateOrEditState);
  const shouldUsePortfolioCart =
    portfolioEditParams !== null || cartContext === "portfolio-cart";
  React.useEffect(() => {
    if (shouldUsePortfolioCart) {
      const unsubId = cartService.subscribeToPortfolioCart(nextCart =>
        setCart(nextCart)
      );
      return () => cartService.unsubscribeFromPortfolioCart(unsubId);
    }
    const unsubId = cartService.subscribe(nextCart => setCart(nextCart));
    return () => cartService.unsubscribe(unsubId);
  }, [shouldUsePortfolioCart]);
  const toggleModal = () => setShowModal(prev => !prev);
  return (
    <>
      <CartButton
        data-testid={
          shouldUsePortfolioCart ? "portfolio-cart-button" : "cart-button"
        }
        onClick={toggleModal}
      >
        <i>
          {shouldUsePortfolioCart ? (
            <PortfolioIcon width="29" height="28" className="portfolio-cart" />
          ) : (
            <ShoppingCart />
          )}
        </i>
        <span className="badge">{cart?.items.length ?? 0}</span>
      </CartButton>

      <CartWindow
        cart={cart}
        toggleModal={toggleModal}
        show={showModal}
        isUsingPortfolioCart={shouldUsePortfolioCart}
      />
    </>
  );
}

export default ShoppingCartNav;
