import styled from "styled-components";
import { Card } from "elements/Card/Card";

export const Root = styled(Card).attrs({
  title: "sector allocation"
})`
  height: 100%;
  li > span {
    display: inline-block;
    margin: 0 15px;
  }
`;

export const ChartWrapper = styled.div`
  margin: 0;
  padding: 0;
`;
