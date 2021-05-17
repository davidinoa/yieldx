import styled from "styled-components";
import background from "assets/svg/inpaas-background.svg";
import { mediaQuery } from "theme/breakpoints.style";
import { navbar } from "theme/theme.style";

// See screenshots for expln (vertical align goals & hide border right when sm)
// eslint-disable-next-line import/prefer-default-export
export const InPaaSGoalsContainer = styled.div`
  height: auto;
  background: url("${background}") bottom center no-repeat fixed;
  background-size: cover;
  padding: 2rem 1rem;
  min-height: calc(100vh - ${navbar.height.xs});
  position: relative;
  form > {
    .container,
    .container-fluid,
    .container-xs,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl,
    .container-xxl {
      padding-left: 0;
      padding-right: 0;
    }
  }
  ${mediaQuery("lg")} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ${mediaQuery("xxl")} {
    min-height: calc(100vh - ${navbar.height.xxl});
  }
`;
