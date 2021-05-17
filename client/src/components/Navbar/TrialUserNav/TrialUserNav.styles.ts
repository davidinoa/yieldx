import styled from "styled-components";
import { mediaQuery } from "theme/breakpoints.style";
import { navbar } from "theme/theme.style";

export const TrialUserMenuButton = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    width: ${navbar.components.trialUserButton.iconSize.xs};
    height: ${navbar.components.trialUserButton.iconSize.xs};

    ${mediaQuery("xxl")} {
      width: ${navbar.components.trialUserButton.iconSize.xxl};
      height: ${navbar.components.trialUserButton.iconSize.xxl};
    }
  }
`;
