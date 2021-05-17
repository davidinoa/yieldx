import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  max-width: 790px;
  display: flex;
  flex-direction: column;
  & .separator {
    border-bottom: solid 2px var(--border-new);
  }
`;

export const SectionTitle = styled.span`
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
`;
