import styled from "styled-components";
import { Col } from "react-bootstrap";
import { mediaQuery } from "../../theme/breakpoints.style";

export const Root = styled(Col).attrs({
  xs: 24,
  md: 8,
  className: "col-xxl-7"
})``;

export const ValueTotal = styled(Col).attrs({
  xs: 24
})`
  //background: rgba(0,255,255,.3);
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;

  ${mediaQuery("xxl")} {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  span {
    display: block;
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
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
