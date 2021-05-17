import styled from "styled-components";
import { Row } from "react-bootstrap";

interface CardProps {
  double?: boolean;
}

export const CardContainer = styled(Row)`
  border: 1px solid var(--border-new);
  border-radius: 10px;
`;
export const Card = styled.div<CardProps>`
  background: var(--page);
  &.right-border{
  border-right: 1px solid var(--border-new);
  border-radius: 10px 0px 0px 10px;
  }
  ${props => (!props.double ? "border: 1px solid var(--border-new);" : "")}
  border-radius: ${props => (props.double ? "0px 10px 10px 0px;" : "10px;")}
  width: 100%;
  height: 600px;
  padding: 10px 10px 0px 10px;
    > div.body-container {
    height: calc(600px - 145px);
  }

  .row-entry {
    padding: 0 20%;
  }

  > div .change-container {
    height: 100px;
    border-top: 1px solid var(--border-new);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardHeading = styled.div`
  width: 100%;
  height: 135px;
  background: var(--dark);
  text-align: center;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > span.title {
    padding: 0.5rem 0px;
    font-family: Roboto Mono;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  > span.bank-name {
    font-weight: bold;
    font-size: 21px;
    line-height: 26px;
  }
  > svg.bank > path {
    fill: var(--primary);
  }
  > svg.individual > path {
    stroke: var(--primary);
  }
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--subtext-3);
`;

export const Value = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  &.small {
    font-size: 12px;
  }
`;

export const ChangeButton = styled.button`
  width: 202px;
  height: 40px;
  border: 1px solid var(--border-new);
  background: var(--page);
  border-radius: 5px;
  color: var(--primary);
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
