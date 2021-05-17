import styled from "styled-components";
import { mediaQuery } from "theme/breakpoints.style";
import { navbar } from "theme/theme.style";

export const NavButton = styled.button`
  position: relative;
  margin: 0 1rem 0 2rem;

  ${mediaQuery("xxl")} {
    margin: 0 4rem 0 2rem;
  }

  svg {
    width: ${navbar.components.userButton.iconSize.xs};
    height: ${navbar.components.userButton.iconSize.xs};

    ${mediaQuery("xxl")} {
      width: ${navbar.components.userButton.iconSize.xxl};
      height: ${navbar.components.userButton.iconSize.xxl};
    }
  }
`;
