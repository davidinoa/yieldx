import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { mediaQuery } from "../../../../theme/breakpoints.style";
import dontForward from "../../../../util/dontForward";

export const StyledNav = styled(Nav).attrs({
  className: "container-fluid"
})`
  border-bottom: 1px solid var(--border-new);
  margin-bottom: 1.25rem;
  padding-top: 0.75rem;

  ${mediaQuery("xxl")} {
    margin-bottom: 2rem;
    padding-top: 1rem;
  }
`;

export const StyledNavItem = styled(Nav.Item).withConfig(dontForward("active"))`
  width: auto;
  padding: 0 0.5rem 0.25rem;

  ${mediaQuery("xxl")} {
    padding: 0 1rem 0.5rem;
  }

  a {
    font-weight: bold;
    line-height: 1em;
    text-align: center;
    color: var(--subtext-3);
    transition: color 300ms ease-out;
    padding: 0 0.5rem 0.35rem;
    font-size: 1rem;
    margin: 0 1rem 0 0;
    letter-spacing: 0.02em;

    ${mediaQuery("xxl")} {
      font-size: 1.35rem;
      padding: 0 1rem 0.5rem;
      margin: 0 1.5rem 0 0;
    }

    &:hover {
      color: white;
      text-decoration: none;
      transition: color 300ms ease-out;
    }
    &.active {
      color: var(--primary);
      transition: color 300ms ease-out;
      border-bottom: 2px solid var(--primary);
      margin-bottom: -1px;
    }
  }
`;
