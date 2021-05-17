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
  & .radio-group-col > div:not(:last-child) {
    margin-bottom: 1rem;
  }
  & .radio-group-col > div > label {
    font-weight: normal;
    font-size: 16px;
    line-height: 165%;
    letter-spacing: normal;
    text-transform: none;
  }
  & .text-display {
    font-size: 16px;
    line-height: 165%;
  }
  & .icon-button {
    background: inherit;
  }
`;

export const SectionTitle = styled.span`
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
`;
