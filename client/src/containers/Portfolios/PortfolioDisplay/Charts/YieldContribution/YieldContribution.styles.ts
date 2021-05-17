import styled from "styled-components";
import { Card } from "elements/Card/Card";

const Root = styled(Card).attrs({ title: "yield contribution" })`
  height: 100%;
  li > span {
    display: inline-block;
    margin: 0 15px;
  }
`;

export default Root;
