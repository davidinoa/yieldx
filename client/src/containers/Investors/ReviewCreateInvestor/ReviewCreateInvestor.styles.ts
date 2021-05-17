import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Form as FormikForm } from "formik";

export const StyledHeading = styled(Row).attrs({
  className: "align-items-center"
})`
  margin-bottom: 2rem;
  border-bottom: solid 2px var(--border-new);
  border-top: solid 2px var(--border-new);
  height: 50px;

  > div > h1 {
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    margin: 0;
  }

  > div > button {
    width: 65px;
    height: 25px;
    background: var(--medium);
    border-radius: 5px;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
  }
`;

export const StyledDataRow = styled(Row)`
  flex-wrap: inherit;
  :last-of-type {
    margin-bottom: 2rem;
  }
  & > :first-child > span {
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }
  & :last-child > span {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const DeepCol = styled(Col)`
  padding-bottom: 15px;
`;

export const Root = styled(Col)`
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
`;

export const Form = styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;
