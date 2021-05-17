import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Root = styled(Col).attrs({
  className: "d-flex flex-column"
})`
  > p {
    font-size: 11px;
    line-height: 165%;
    color: var(--subtext-3);
  }
`;

export const Container = styled.div`
  > div {
    width: 50%;
    margin: 1rem 0;
  }
  ::before {
    content: "";
    display: block;
    background: var(--dark);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 24px;
    margin-top: 6px;
  }
  border: 2px solid var(--border-new);
  border-radius: 10px;
  min-height: 500px;
  max-height: 600px;
  & > div:first-child {
    border-right: 2px solid var(--border-new);
  }
`;

export const Card = styled.div`
  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  &:hover {
    border: double 1px transparent;
    background-image: linear-gradient(var(--page), var(--page)), var(--gradient);
    background-origin: border-box;
    background-clip: content-box, border-box;
    > svg.individual > path {
      stroke: var(--primary);
    }
    > svg.organization > path {
      fill: var(--primary);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: inherit;
  border: 1px solid var(--border-new);
  border-radius: 10px;
  width: 350px;
  height: 300px;
  text-align: center;

  > h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 21px;
    line-height: 26px;
  }
  > span {
    width: 280px;
    font-size: 16px;
    line-height: 165%;
    color: var(--subtext-3);
    margin-bottom: 1rem;
  }
  > button {
    background-image: none !important;
    :hover:enabled {
      border: 1px solid var(--subtext-3);
    }
    background: inherit;
    width: 200px;
    border-radius: 5px;
    height: 40px;
    border: 1px solid var(--border-new);
  }
`;
