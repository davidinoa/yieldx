/* eslint-disable */
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { mediaQuery } from "../../../theme/breakpoints.style";
import AXPImage from "../../../assets/image/dashboard-axp-img.png";

export const LinkCardWrapper = styled(Col).attrs({})`
  background: var(--page);
  padding: 1rem 1.5rem;
  position: relative;
  margin-bottom: 0.75rem;
  text-align: center;

  ${mediaQuery("xxl")} {
    padding: 1.5rem 2.5rem;
  }

  .link-app-header {
    h4 {
      padding: 0 0 1rem;
      margin: 0 0 1rem;
      width: 100%;
      background-image: linear-gradient(
        to right,
        var(--lightest) 20%,
        rgba(255, 255, 255, 0) 0%
      );
      background-position: bottom;
      background-size: 5px 1px;
      background-repeat: repeat-x;
      font-size: 0.9rem;
      ${mediaQuery("xxl")} {
        font-size: 1rem;
      }
    }
    svg {
      margin-right: 0.5rem;
      > path {
        fill: var(--primary);
      }
    }
  }

  .link-card-content {
    //min-height: 240px;
    padding: 0.75rem 2rem 1.25rem;

    ${mediaQuery("xxl")} {
      padding: 1rem 3rem 1.25rem;
    }

    h3 {
      color: white;
      font-size: 1.25rem;
      margin: 0 0 0.25rem;

      ${mediaQuery("xxl")} {
        font-size: 1.5rem;
      }
    }
    p {
      color: var(--subtext-3);
      line-height: 1.65em;
      margin: 0 0 1.5rem 0;
      font-size: 0.9rem;
      ${mediaQuery("xxl")} {
        font-size: 0.95rem;
      }
    }

    button {
      color: white;
      background: var(--light);
      padding: 0.45rem 1.5rem;
      width: 200px;
      border-radius: 0.25rem;
      font-weight: bold;
      font-size: 0.85rem;
      ${mediaQuery("xxl")} {
        padding: 0.5rem 2rem;
        width: 250px;
        font-size: 1rem;
      }
    }
  }

  &.app {
    border: solid 1px var(--light);
    border-radius: 0.7rem;

    .link-app-header {
      button {
        background: var(--primary);
      }
    }

    .link-card-content {
      button {
        background: var(--primary);
      }
    }
  }

  &.highlight {
    ${mediaQuery("md")} {
      text-align: left;
      padding: 2rem 3rem 1.25rem 2rem;
    }

    .link-card-content {
      ${mediaQuery("md")} {
        justify-content: flex-start;
        text-align: left;
      }
    }
    &::before {
      content: "";
      position: absolute;
      display: none;
      top: 0.25rem;
      left: 0.25rem;
      background: var(--dark);
      border-radius: 0.35rem 0.35rem 0 0;
      width: calc(100% - 0.5rem);
      height: 1rem;

      ${mediaQuery("md")} {
        display: block;
      }
      ${mediaQuery("xxl")} {
        border-radius: 0.5rem 0.5rem 0 0;
        height: 1.25rem;
      }
    }
  }
`;

export const HighlightImg = styled(Col).attrs({})`
  display: none;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ${mediaQuery("md")} {
    display: flex;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    background: url(${AXPImage}) center center no-repeat;
    background-size: contain;
  }
`;
