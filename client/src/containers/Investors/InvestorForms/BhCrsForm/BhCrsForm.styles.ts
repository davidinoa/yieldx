import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Form as FormikForm } from "formik";

export const FormRow = styled(Row)`
  justify-content: space-between;
  &.divider {
    border-top: 1px solid var(--border-new);
    padding-top: 30px;
  }
`;

export const Form = styled(FormikForm)`
  margin: auto;
  padding: 30px 20px;
  max-width: 790px;
  display: flex;
  flex-direction: column;
  ${FormRow} + ${FormRow} {
    margin-top: 30px;
  }
`;

export const Heading = styled.h3`
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  margin-bottom: 20px;
`;

export const Terms = styled.div`
  p,
  ul,
  li,
  ol,
  b,
  span {
    font-size: 14px;
    line-height: 165%;
  }
  h2,
  h3,
  h4 {
    color: white;
  }
  h5,
  p,
  ul,
  li,
  ol,
  b,
  span {
    color: var(--subtext-3);
  }
  ul {
    padding-left: 16px;
    margin-bottom: 0;
  }
  li {
    padding: 10px 0 10px 0;
  }

`;

export const Questions = styled.div`
  padding: 30px 44px 20px 44px;
  ul {
    padding-left: 16px;
    margin-bottom: 0;
  }
  li {
    padding: 10px 0 10px 0;
  }
  border: 1px solid var(--border-new);
`
