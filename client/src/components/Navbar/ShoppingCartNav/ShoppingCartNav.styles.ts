import styled from "styled-components";
import { Button } from "react-bootstrap";
import { mediaQuery } from "theme/breakpoints.style";
import { navbar } from "theme/theme.style";

export const Root = styled.div`
  position: relative;
  //background: rgba(255,0,0,.3);
  display: flex;
`;

export const CartButton = styled(Button)`
  border: none;
  display: flex;
  position: relative;
  height: ${navbar.height.xs};
  width: ${navbar.height.xs};
  //background: rgba(255,0,0,.3) !important;
  background: none !important;
  align-items: center;
  justify-content: center;
  z-index: 100;
  margin: 0 0 0 2rem;

  ${mediaQuery("sm", true)} {
    position: absolute;
    left: 2.15rem;
  }
  ${mediaQuery("xxl")} {
    width: ${navbar.height.xxl};
    height: ${navbar.height.xxl};
  }

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
      width: 95%;
      height: 95%;
    }
    svg.portfolio-cart {
      > path {
        fill: white;
      }
    }
  }
  .badge {
    position: absolute;
    width: ${navbar.components.shoppingCart.badge.size.xs};
    height: ${navbar.components.shoppingCart.badge.size.xs};
    background: var(--primary);
    top: 50%;
    right: 50%;
    transform: translate(115%, -90%);
    line-height: normal;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px var(--dark);
    cursor: pointer;
    font-size: 0.65rem !important;

    ${mediaQuery("xxl")} {
      font-size: 0.75rem !important;
      width: ${navbar.components.shoppingCart.badge.size.xxl};
      height: ${navbar.components.shoppingCart.badge.size.xxl};
    }
  }
`;
