import styled from "styled-components";
import { navbar, sideMenu } from "../../theme/theme.style";
import { mediaQuery } from "../../theme/breakpoints.style";

export const OuterContainer = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
`;

export const InnerContainer = styled.div`
  flex-grow: 1;
  width: calc(100vw - ${sideMenu.width.default.xs});
  ${mediaQuery("xxl")} {
    width: calc(100vw - ${sideMenu.width.default.xxl});
  }

  &.expanded {
    //background:  #0f0;
    width: calc(100vw - ${sideMenu.width.expanded.xs});
    transition: width 300ms ease-out;
    ${mediaQuery("xxl")} {
      width: calc(100vw - ${sideMenu.width.expanded.xxl});
    }
  }
`;

export const ContentWrapper = styled.div`
  height: calc(100vh - ${navbar.height.xs});
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  padding-bottom: 3rem;

  ${mediaQuery("xxl")} {
    height: calc(100vh - ${navbar.height.xxl});
  }

  &.app-container {
    padding: 0;
    height: 100vh;
    ${mediaQuery("xxl")} {
      height: 100vh;
    }
  }
`;
