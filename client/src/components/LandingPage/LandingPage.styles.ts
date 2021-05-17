import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mediaQuery } from "../../theme/breakpoints.style";

export const Container = styled.main.attrs({
  className: "container"
})`
  margin-top: 3rem;
  margin-bottom: 2rem;
  border: 2px solid var(--border-new);
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  min-height: calc(100vh - (var(--navbarHeight) * 3));

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: calc(100% - 0.5rem);
    height: 1.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background: var(--dark);
    margin: 0;
  }
`;

export const Content = styled(Col).attrs({
  className: "col"
})`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;

  .info-text {
    width: 60%;
    text-align: center;

    svg {
      width: 3rem;
      height: 3rem;
      margin-bottom: 1rem;
      > path {
        fill: var(--primary);
      }
    }
  }

  h1 {
    width: 100%;
    font-size: 1.65rem;

    ${mediaQuery("xl")} {
      font-size: 1.75rem;
    }
    ${mediaQuery("xxl")} {
      font-size: 2rem;
    }
  }
  p {
    color: var(--lightest);
    width: 100%;
    font-size: 0.95rem;
    ${mediaQuery("xxl")} {
      font-size: 1rem;
    }
  }
`;

export const StartLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  width: auto;
  border: none;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 0.35rem;
  background: var(--primary);
  color: white;
  font-size: 0.9rem;
  padding: 0.6rem 2.5rem;

  ${mediaQuery("xxl")} {
    padding: 0.75rem 3rem;
    font-size: 0.975rem;
  }

  &:disabled {
    opacity: 0.3;
  }
  &:hover,
  &:focus {
    color: currentColor;
    text-decoration: none;
  }
`;

export const ContentWrapper = styled.div.attrs({
  className: "row d-flex justify-content-center align-items-center"
})``;
