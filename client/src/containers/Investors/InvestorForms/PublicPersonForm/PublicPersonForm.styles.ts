import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Form as FormikForm } from "formik";

export const FormRow = styled(Row)`
  justify-content: space-between;
  .divider {
    border-top: 1px solid var(--border-new);
    padding-top: 30px;
  }
`;

export const Form = styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  max-width: 790px;
  display: flex;
  flex-direction: column;
  ${FormRow} + ${FormRow} {
    margin-top: 30px;
  }
  input {
    max-width: 340px;
  }
`;

export const Relative = styled.li`
  background: var(--dark);
  border-radius: 100px;
  padding: 3px 7px;
  font-weight: bold;
  text-transform: uppercase;

  button {
    border: none;
    background: transparent;
  }
`;

export const Family = styled.ul.attrs({ className: "col-24" })`
  padding: 0;
  display: flex;
  margin-top: 10px;
  list-style: none;
  > ${Relative} + ${Relative} {
    margin-left: 10px;
  }
`;
