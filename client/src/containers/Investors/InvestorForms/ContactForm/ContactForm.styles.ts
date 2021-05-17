import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Form as FormikForm } from "formik";
import { FormGroup } from "../elements/elements";

export const Form = styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  .bordered-section {
    margin-top: 30px;
    border-top: 1px solid var(--border-new);
    padding-top: 30px;
  }
  .address .col {
    max-width: 100%;
  }
`;

export const FormRow = styled(Row)`
  justify-content: space-between;
  & + & {
    margin-top: 30px;
  }
  ${FormGroup} {
    max-width: 350px;
  }
`;
