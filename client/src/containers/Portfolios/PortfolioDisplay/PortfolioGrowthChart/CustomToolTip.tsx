import React from "react";
import styled from "styled-components";
import Decimal from "../../../../util/Decimal";

const Root = styled.div`
  background: var(--page);
  border: 1px solid var(--border-new);
  border-radius: 5px;
  width: 158px;
  height: 100px;
  padding: 0 7px;
  position: relative;
`;

const Value = styled.div`
  > span {
    font-family: Roboto Mono;
    font-size: 16px;
    line-height: 19px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  height: 70px;
`;

const Label = styled.div`
  border-top: 1px solid var(--border-new);
  width: 100%;
  > span {
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

const Arrow = styled.div`
  width: 70px;
  height: 16px;
  overflow: hidden;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: -16px;
  :after {
    content: "";
    position: absolute;
    top: -20px;
    right: 48%;
    width: 20px;
    height: 20px;
    transform: rotate(45deg) translateX(50%);
    background: var(--page);
    border: 1px solid var(--border-new);
    border-radius: 2px;
  }
`;

type Props = {
  title?: string;
  value: string;
};

export default function CustomToolTip({ title, value }: Props) {
  return (
    <Root>
      <Value>
        <span>{`$${Decimal.format(parseFloat(value))}`}</span>
      </Value>
      <Label>
        <span>{!title ? "now" : title}</span>
      </Label>
      <Arrow />
    </Root>
  );
}
