import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQuery } from "theme/breakpoints.style";
import { ReactComponent as Edit } from "assets/svg/edit.svg";

export const DeleteButton = styled.button.attrs({
  type: "button"
})``;

export const EditIcon = styled(Edit)``;

// PORTFOLIO - VALUE
export const ValueContainer = styled.div.attrs({
  className: "container-fluid"
})`
  border: 1px solid var(--border-new);
  border-radius: 0.35rem;
  padding: 0.5rem 0.75rem;

  ${mediaQuery("xxl")} {
  }
`;

export const ValueTitle = styled.div.attrs({
  className: "col-24"
})`
  background: rgba(0, 0, 255, 0.3);
  border-radius: 0.35rem 0.35rem 0 0;
  background: var(--dark);
  padding: 0.35rem;
  h3 {
    color: var(--lightest);
    text-align: center;
    line-height: 1em;
    margin: 0;
    font-size: 0.75rem;

    ${mediaQuery("xxl")} {
      font-size: 0.75rem;
    }
  }
`;

export const ValueTotal = styled.div`
  position: relative;
  padding-top: 0.85rem;
  ${mediaQuery("xxl")} {
    padding-top: 1.25rem;
  }
  span {
    display: block;
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
    padding-bottom: 0.45rem;
    ${mediaQuery("xxl")} {
      font-size: 2rem;
    }

    > sup {
      font-size: 0.55em;
      line-height: 22px;
      padding: 0.25rem;
    }
  }
`;

export const ValuePnL = styled.div.attrs({
  className: "col-24 d-flex justify-content-around"
})`
  padding-top: 0.85rem;

  ${mediaQuery("xxl")} {
    padding-top: 1.25rem;
  }
  border-top: 1px solid var(--border-new);
  span.label {
    display: inherit;
    font-weight: bold;
    text-transform: uppercase;

    letter-spacing: 0.2em;
    font-weight: bold;
    font-family: var(--font-primary);
    color: var(--subtext-3);
    font-size: 0.6rem;

    ${mediaQuery("xxl")} {
      font-size: 0.75rem;
    }
  }
  span.value {
    display: inherit;
    text-align: center;
    font-family: var(--font-secondary);
    font-weight: normal;
    font-size: 0.7rem;
    ${mediaQuery("xxl")} {
      font-size: 0.85rem;
    }
    &.positive {
      color: var(--active);
    }
    &.negative {
      color: var(--issue);
    }
  }
  .divider {
    border-right: 1px solid var(--border-new);
  }
`;

export const ValueCTAs = styled.div.attrs({
  className: "col-24 d-flex flex-row justify-content-around"
})`
  //display: none;
  border-top: solid 1px var(--border-new);
  text-align: center;

  button,
  a {
    display: flex;
    border: none;
    background: none;
    text-decoration: underline;
    margin: 0.5rem 0 0;
    color: var(--lightest);
    width: auto;
    position: relative;
    padding: 0 0.65rem;
    font-size: 0.7rem;

    ${mediaQuery("xxl")} {
      padding: 0 1rem;
      font-size: 0.8rem;
    }

    &.invest-cta {
      background: var(--primary);
      color: white;
      border-radius: 0.15rem;
      text-decoration: none;
      padding: 0.15rem 0.75rem;
      font-weight: bold;
    }
    &:last-of-type {
      border: none;
    }
  }
  span {
    margin: 0.5rem 0 0;
    display: flex;
    border-right: solid 1px var(--border-new);
  }
`;

export const InfoName = styled.div.attrs({
  className: "col-24"
})`
  h1 {
    line-height: 1.1em;
    margin: 0;
    font-size: 1.5rem;

    ${mediaQuery("xxl")} {
      font-size: 1.95rem;
    }

    svg {
      margin-left: 0.5rem;
    }
  }
  button {
    background: none;
    border: none;
    padding: 0;
    margin-left: 0.25rem;
  }
`;

export const Container = styled.div.attrs({
  className: "container-fluid"
})`
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${mediaQuery("xxl")} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Info = styled.div.attrs({
  className: "col-16 col-xxl-17"
})`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Value = styled.div.attrs({
  className: "col-8 col-xxl-7"
})``;

export const LiquidateLink = styled(Link)`
  display: flex;
  border: none;
  background: none;
  text-decoration: underline;
  margin: 0.5rem 0 0;
  color: var(--lightest);
  width: auto;
  position: relative;
  padding: 0 0.65rem;
  font-size: 0.7rem;

  ${mediaQuery("xxl")} {
    padding: 0 1rem;
    font-size: 0.8rem;
  }

  &.invest-cta {
    background: var(--primary);
    color: white;
    border-radius: 0.15rem;
    text-decoration: none;
    padding: 0.15rem 0.75rem;
    font-weight: bold;
  }
  &:last-of-type {
    border: none;
  }
`;

interface MoreButtonProps {
  display?: "none";
}

export const MoreButton = styled.button.attrs({
  type: "button"
})`
  display: ${(props: MoreButtonProps) => props.display};
  right: 5%;
  top: 25%;
  transform: translate(0%, 75%);
  border: none;
  background: none;
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: radial-gradient(
    circle,
    var(--light) 2px,
    transparent 2.5px
  );
  background-size: 100% 33.33%;
`;
