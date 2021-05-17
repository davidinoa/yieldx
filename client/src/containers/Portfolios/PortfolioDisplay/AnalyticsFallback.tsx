import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Button from "../../../elements/Button/Button";
import { ReactComponent as Icon } from "../../../assets/svg/piechart.svg";

export const Root = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 26.25rem;
  background: var(--dark);
  border: 1px solid var(--light);
  border-radius: 10px;
`;

export const Heading = styled.h4`
  font-weight: bold;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
`;

export const Body = styled.p`
  max-width: 420px;
  font-size: 15px;
  line-height: 165%;
  text-align: center;
  color: var(--lightest);
`;

interface Props {
  terminated: boolean;
  updating?: boolean;
}

export default function AnalyticsFallback({ terminated, updating }: Props) {
  const history = useHistory();

  let heading: string;
  let body: string;
  if (terminated) {
    body = `No analytics available for a closed portfolio`;
    heading = "Portfolio has been closed";
  } else if (updating) {
    heading = "Executing orders";
    body = `Currently trading positions. Once we settle desired positions, we'll display your analytics here.`;
  } else {
    body = `At the moment, there's only cash in this portfolio. Once we settle the
          first trade, we'll display your analytics here.`;
    heading = "Executing portfolio";
  }

  return (
    <Root>
      <Icon />
      <Heading>{heading}</Heading>
      <Body>{body}</Body>
      <Button
        onClick={() => history.replace("#orders")}
        text="View orders/trades"
      />
    </Root>
  );
}
