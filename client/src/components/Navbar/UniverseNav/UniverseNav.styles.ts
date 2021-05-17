import styled from "styled-components";
import { mediaQuery } from "theme/breakpoints.style";
import { navbar } from "theme/theme.style";

export const UniverseMenuButton = styled.div`
  position: relative;
  margin: 0 0 0 2rem;
  cursor: pointer;

  ${mediaQuery("xxl")} {
    margin: 0 0 0 2rem;
  }

  svg {
    width: ${navbar.components.universeButton.iconSize.xs};
    height: ${navbar.components.universeButton.iconSize.xs};

    ${mediaQuery("xxl")} {
      width: ${navbar.components.universeButton.iconSize.xxl};
      height: ${navbar.components.universeButton.iconSize.xxl};
    }
  }
`;
