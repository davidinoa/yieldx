import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import { mediaQuery } from "theme/breakpoints.style";

export const Root = styled(Container).attrs({
  fluid: true
})`
  border: 2px solid var(--border-new);
  border-radius: 10px;
  min-height: 32rem;
  padding-bottom: 2rem;
`;

export const ProgressDisplay = styled.div`
  background: var(--dark);
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: var(--subtext-3);
  margin-top: 6px;
  height: 26px;
`;

export const StepTracker = styled.div`
  &::after {
    // content: '';
    // border-left: 1px solid var(--subtext-3);
    // position: absolute;
    // height: 32px;
    // display: inline-block;
    // left: 51px;
  }
`;

export const StepLine = styled.div`
  //position: absolute;
  //right: 48%;
  //top: 1rem;
  width: 2px;
  background: var(--border-new);
  &.organization {
    height: 30rem;
  }
  &.individual {
    height: 24rem;
  }
`;

export const StepLabel = styled(Col)`
  &.disabled {
    color: var(--subtext-3);
  }
  &.large {
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
  }
  &.small {
    font-size: 12px;
    line-height: 15px;
  }
`;

type Props = {
  last?: boolean;
  first?: boolean;
  isInTerms: boolean;
};

export const StepPoint = styled(Row)<Props>`
  .first-step::before {
    top: 65px;
  }
  .should-show::before {
    display: block;
  }
  ::before {
    display: none;
    top: auto;
    position: absolute;
    border-left: 1px solid var(--light);
    width: 0;
    height: 66px;
    content: "";
    left: 123px;
    ${mediaQuery("xxl")} {
      left: 132px;
    }
    z-index: 1;
    margin-left: -71px;
  }
`;
