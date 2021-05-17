import styled from "styled-components";
import { Card } from "elements/Card/Card";

const Root = styled(Card).attrs({
  title: "Preferences"
})`
  .col:nth-child(n + 4) {
    margin-top: 30px;
  }
  .preference-name {
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0.25rem;
    margin-bottom: 0.15rem;
  }
  .preference-text {
    width: 90%;
    font-size: 15px;
    line-height: 165%;
    color: var(--subtext-3);
  }
  .preference-value {
    font-weight: bold;
    color: var(--primary);
    text-transform: lowercase;
    background-color: rgba(1, 92, 255, 0.15);

    &::after {
      content: ", ";
    }

    &:last-of-type {
      &::after {
        content: "";
      }
    }
  }
`;

export default Root;
