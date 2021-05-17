import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mediaQuery } from "../../../theme/breakpoints.style";

export const CreateUniverseButton = styled(Link)`
  width: 142;
  height: 40px;
  border-radius: 5px;
  background: var(--light);
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const CardsContainer = styled(Row)`
  border: 1px solid var(--light);
  box-sizing: border-box;
  border-radius: 10px;
  height: auto;
  margin-bottom: 5rem;
  ${mediaQuery("xl")} {
    height: calc(100vh - 32vh + 3.75rem);
    margin-bottom: 0;
  }
  ${mediaQuery("xxl")} {
    height: calc(100vh - 32vh);
    margin-bottom: 0;
  }
`;

export const AppCard = styled.div`
  display: flex;
  position: relative;
  padding: 4rem;
  width: 382px;
  h1 {
    font-weight: bold;
    font-size: 21px;
    line-height: 26px;
  }
  p {
    font-size: 16px;
    line-height: 165%;
    color: var(--lightest);
  }
  svg > path {
    fill: white;
  }
`;

export const BorderWrapper = styled.div`
  border: 1px solid var(--border-new);
  border-radius: 0.5rem;
  &.active {
    &.active > div > svg > path {
      fill: var(--primary);
    }
    border: double 1px transparent;
    border-radius: 0.75rem;
    background-image: linear-gradient(var(--page), var(--page)), var(--gradient);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`;
