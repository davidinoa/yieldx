import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import { mediaQuery } from "theme/breakpoints.style";

export const Root = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  &.disabled {
    opacity: 0.2;
  }
  .field-description {
    font-weight: 300;
    font-size: 14px;
    line-height: 145%;
  }
`;

export const InPaaSBoxContainer = styled(Container)`
  padding: 2rem 1rem 0.75rem;
  display: flex;
  flex-flow: column;
  height: 100%;
  ${mediaQuery("xxl")} {
    padding: 2.5rem 2.5rem 1rem;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: inherit;
  font-weight: bold;
  border: 1px solid var(--border-new);
  width: 1.15rem;
  height: 1.15rem;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;

  ${mediaQuery("xxl")} {
    font-size: 1.075rem;
    width: 1.45rem;
    height: 1.45rem;
  }

  &.active {
    color: var(--primary);
  }
`;

export const Heading = styled(Col)`
  //background: rgba(255,0,55,.3);
  display: flex;
  width: 100% !important;
  height: auto;
  min-height: 2.5rem;
  margin-bottom: 0.5rem;

  h2 {
    margin: 0;
    line-height: 145%;
    font-weight: 300;
    font-size: 1.25rem;
    width: 100%;

    ${mediaQuery("xxl")} {
      font-size: 1.5rem;
    }

    i {
      display: inline-block;
      z-index: 1000;
      position: relative;
    }
  }
`;

export const Subheading = styled.p`
  font-size: 1rem;
`;
