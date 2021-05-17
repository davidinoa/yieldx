import styled from "styled-components";
import { Form as FormikForm } from "formik";
import { Row } from "react-bootstrap";

export const Form = styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  max-width: 790px;
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled(Row)`
  justify-content: space-between;
  & + & {
    margin-top: 40px;
  }
`;
