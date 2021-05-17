import styled from "styled-components";
import { Container, Row,Col } from "react-bootstrap";
import { Form as FormikForm } from "formik";
import { mediaQuery } from "../../../theme/breakpoints.style";
import { FormGroup } from "../InvestorForms/elements/elements";

export const InvestorContainer = styled(Container).attrs({
  fluid: true
})`
  margin-top: 10px;
  margin-bottom: 8rem;
  max-width: 1200px;

  ${mediaQuery("xxl")} {
      max-width: 1440px;
  }

`;

export const InvestorSteps = styled(Col).attrs({
  xs: 5
})``;
export const InvestorForm = styled(Col).attrs({
  xs: 19
})`

`;
export const InvestorFormRow = styled(Row).attrs({

})`
  min-height: 32rem;

`;


export const FormContainer = styled(Col).attrs({
  xs: 24
})`
  border: 2px solid var(--border-new);
  border-radius: 10px;
  min-height: 100%;
  padding-bottom: 3rem;

  &::before {
    content: "";
    display: block;
    background: var(--dark);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 24px;
    margin-top: 6px;
  }
`;

export const Form = styled(FormikForm)`
  margin: auto;
  margin-top: 30px;
  max-width: 790px;
  display: flex;
  flex-direction: column;

  .bordered-section {
    margin-top: .75rem;
    margin-bottom: 2rem;
    height: 1px;
    background: var(--border-new);
  }


`;


export const FormRow = styled(Row)`
  justify-content: space-between;
  margin-bottom: 2rem;

  ${FormGroup} {
    //max-width: 350px;
  }
`;

export const FormField = styled(Col).attrs({
  xs: 24,
  sm: 12,

})`

  label{
    margin-top: 0;
    margin-bottom:13px;
  }
`;

export const FormFieldFull = styled(Col).attrs({
  xs: 24,
  sm: 24,
})``;

export const SectionTitle = styled.span`
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
`;



export const ErrorAlert = styled(Col).attrs({
  xs: 24
})`
  border-radius: 0.25rem;
  background: rgba(248, 117, 132, 0.75);
  margin-top: 1rem;
  margin-bottom: 1rem;

  > div {
    padding: 0.5rem 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p,
  b {
    display: flex;
    font-size: 0.9rem;
    color: var(--white);
    margin: 0;
    text-align: center;
  }
`;

export const FormLegalContent = styled(Col).attrs({
  xs: 24
})`
  margin-top: 1rem;
  margin-bottom: 1rem;

  p,
  b {
    font-size: 0.9rem;
    color: var(--subtext-3);
  }
  p {
    display: block;
  }
`;
