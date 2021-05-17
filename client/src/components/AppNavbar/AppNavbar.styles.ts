import styled from "styled-components";
import { navbar } from "theme/theme.style";
import { mediaQuery } from "theme/breakpoints.style";

export const Nav = styled.nav.attrs({
  className: "container-fluid"
})`
  background: var(--dark);
  padding: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: var(--zindex-navbar);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${navbar.height.xs};

  ${mediaQuery("xxl")} {
    height: ${navbar.height.xxl};
  }
`;
export const AppLogo = styled.button`
  display: flex;
  background: none;
  height: ${navbar.components.logo.height.xs};
  width: ${navbar.components.logo.width.xs};
  align-items: center;
  justify-content: flex-start;
  align-self: center;
  position: absolute;
  top: 0;
  left: 0.5rem;
  z-index: 10;

  ${mediaQuery("xxl")} {
    width: ${navbar.components.logo.width.xxl};
  }

  i {
    &.logo-full {
      display: none;
      ${mediaQuery("sm")} {
        display: flex;
      }
    }
    &.logo-icon {
      display: flex;
      ${mediaQuery("sm")} {
        display: none;
      }
    }
  }
`;

export const TitleContainer = styled.div.attrs({})`
  //background: #f00;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;

  > h1 {
    margin: 0 0 0 0.5rem;
    font-weight: bold;
    font-size: ${navbar.components.title.fontSize.xs};
    ${mediaQuery("xxl")} {
      font-size: ${navbar.components.title.fontSize.xxl};
    }
  }
  > svg {
    height: ${navbar.components.title.iconSize.xs};
    width: ${navbar.components.title.iconSize.xs};

    ${mediaQuery("xxl")} {
      height: ${navbar.components.title.iconSize.xxl};
      width: ${navbar.components.title.iconSize.xxl};
    }
  }
  > svg > path {
    fill: white;
  }
`;

export const ExitButton = styled.button.attrs({
  type: "button"
})`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--medium);
  width: auto;
  padding: 0 1.25rem;
  height: 100%;
  font-weight: bold;
  font-size: ${navbar.components.exitButton.fontSize.xs};
  margin-left: 1rem;

  ${mediaQuery("sm")} {
    padding: 0 2.25rem;
  }
  ${mediaQuery("xxl")} {
    padding: 0 3.5rem;
    font-size: ${navbar.components.exitButton.fontSize.xxl};
  }
`;
