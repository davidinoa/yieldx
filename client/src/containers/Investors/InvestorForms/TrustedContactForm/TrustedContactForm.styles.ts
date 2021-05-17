import styled from "styled-components";
import { Form as FormikForm } from "formik";

export default styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  max-width: 790px;
  display: flex;
  flex-direction: column;
  & .separator {
    border-bottom: solid 2px var(--border-new);
  }
`;
