import styled from "styled-components";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { mediaQuery } from "../../theme/breakpoints.style";
import dontForward from "../../util/dontForward";

export const StyledModal = styled(Modal).withConfig(dontForward("nopadding"))`
  .modal-content {
    background: var(--page);
    border: 1px solid #6980a6;
    border-radius: 8px;
    position: relative;
    min-height: 250px;
    > button.close-modal {
      background: inherit;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      z-index: 1;
      svg {
        width: 1rem;
        height: 1rem;
      }
    }

    .body {
      text-align: ${props => (props.small === "true" ? "left" : "center")};

      h1 {
        font-weight: bold;
        font-size: 1.65rem;
        line-height: 145%;
        margin: 0 0 0.5rem;
      }

      input {
        margin-bottom: 0.5rem;
      }
      p {
        color: var(--subtext-3);
      }
    }

    padding: ${props => {
      if (props.small === "true") return "2rem";
      if (props.nopadding) return "0";
      return "2.5rem 1rem 2rem";
    }};

    ${mediaQuery("sm")} {
      padding: ${props => {
        if (props.small === "true") return "1rem";
        if (props.nopadding) return "0";
        return "2rem 5rem";
      }};
    }
  }
`;

export const BalanceList = styled(Container).attrs({
  fluid: true
})`
  padding-top: 0.75rem;
  padding-bottom: 1.25rem;
`;

export const BalanceListTitle = styled(Col).attrs({
  xs: 14
})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 2rem;

  b {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.125rem;
    color: var(--subtext-3);
  }
`;
export const BalanceListValue = styled(Col).attrs({
  xs: 10
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2rem;

  span {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--white);
  }
`;

export const ContinueButton = styled.button.attrs({
  type: "submit",
  "data-testid": "continue-button",
  className: "full-width"
})<{
  small?: "true" | "false";
}>`
  border-radius: 5px;
  width: ${props => (props.small === "true" ? "95px" : "248px")};
  height: 42px;
  background: var(--primary);
  font-weight: bold;
  margin-bottom: 0.75rem;

  :hover {
    background: var(--primary-hover);
  }

  &.full-width {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const CancelButton = styled.button.attrs({
  type: "button",
  className: "full-width"
})`
  width: 248px;
  height: 42px;
  background: var(--primary);
  font-weight: bold;
  border: 1px solid var(--light);
  background: transparent;
  border-radius: 5px;
  :hover {
    border: 1px solid var(--subtext-3);
  }
  &.full-width {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const InfoText = styled.span`
  font-size: 16px;
  line-height: 165%;
  color: var(--subtext-3);
  margin-bottom: 0.5rem;
`;

export const ButtonContainer = styled.div.attrs({
  className: "d-flex justify-content-between mt-4"
})`
  > button {
    width: 144px;
    height: 40px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  }
  > button:first-child {
    margin-right: 0.5rem;
  }
`;

export const MinimumLabel = styled.div.attrs({})`
  display: flex;
  justify-content: space-between;
  height: 25px;
  align-items: center;
  background: var(--dark);
  padding: 0 10px;
  flex-grow: 0;

  > span:first-child {
    color: var(--subtext-3);
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-right: 0.5rem;
  }
  > span:last-child {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const InvestmentModalWrapper = styled.div.attrs({})`
  max-width: 280px;
  margin: 0 auto;

  form {
    margin: 1rem 0 0;
    label {
      text-align: left;
    }
  }

  h1 {
    font-size: 1.65rem;
    margin: 0;
  }

  i {
    position: absolute;
    top: 50%;
    transform: translate(0, -65%);
    margin: 0;
    left: 0.75rem;
  }
`;

export const InviteUserWrapper = styled.div`
  min-height: 270px;
  form {
    padding: 0 40px;
    width: 100%;
  }
  h1,
  h2 {
    margin: 0 0 1rem;
    font-size: 1.65rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const AssetDetails = styled(Container).attrs({
  fluid: true,
  size: "lg"
})`
  padding: 2rem 1.5rem 2rem;
  ${mediaQuery("xxl")} {
    padding: 2.5rem 2.5rem 2.5rem;
  }

  h2 {
    font-size: 1.35rem;
    line-height: normal;

    small {
      display: block;
      font-size: 0.65em;
      color: var(--subtext-3);
      margin-bottom: 0.35rem;
      letter-spacing: 0.125em;
      font-family: var(--font-secondary);

      b {
        color: var(--primary);
      }
    }
  }
  p {
    font-size: 0.9rem;
    color: var(--subtext-3);
    position: relative;
    padding: 0.75rem 0;
    margin: 0.75rem 0;

    &.description {
      text-align: left;

      &::before,
      &::after {
        content: "";
        background: var(--lightest);
        width: 2rem;
        height: 1px;
        display: block;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
    }
  }
  button {
    margin: 1.5rem 0 0;
    padding: 0.5rem 1rem;
    background: none;
    border: solid 1px var(--border-new);
    border-radius: 0.25rem;
    font-size: 0.85rem;
    font-weight: bold;
    display: flex;

    i {
      margin: -0.1rem 0.5rem 0 0;
      svg {
        > path {
          fill: var(--white);
          stroke: var(--white);
        }
      }
    }
    &.btn-favorite-remove {
      svg {
        > path {
          fill: none;
          stroke: var(--white);
        }
      }
    }
  }
`;
export const AssetDetailsItem = styled(Row).attrs({
  xs: 24
})`
  border-bottom: solid 1px var(--border-new);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  ${mediaQuery("sm")} {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  &:last-of-type {
    border: none;
  }
`;
export const AssetDetailsLabel = styled(Col).attrs({
  xs: 24,
  sm: 14
})`
  text-align: left;
  b {
    font-family: var(--font-secondary);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.65rem;
    letter-spacing: 0.125rem;
    color: var(--subtext-3);
  }
`;
export const AssetDetailsValue = styled(Col).attrs({
  xs: 24,
  sm: 10
})`
  text-align: left;
  ${mediaQuery("sm")} {
    text-align: right;
  }

  p {
    color: var(--white);
    margin: 0;
    padding: 0;
  }
`;
