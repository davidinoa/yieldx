import styled from "styled-components";
import { Col } from "react-bootstrap";
import { mediaQuery } from "theme/breakpoints.style";
import { Form } from "formik";

// See screenshots for removal expln.
export const FormContainer = styled.main`
  &.submitting {
    display: none;
  }
  position: relative;
  border: 1px solid var(--border-new);
  background: var(--page);
  padding: 3rem 0.25rem 1.5rem;
  border-radius: 0.45rem;
  margin: 0 auto;
  max-width: 900px;
  ${mediaQuery("lg")} {
    max-width: 1300px;
  }
  ${mediaQuery("xxl")} {
    border-radius: 0.65rem;
    border-width: 2px;
    padding: 4rem 0.35rem 2.5rem;
    max-width: 1484px;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 0.25rem;
    left: 0.25rem;
    background: var(--dark);
    border-radius: 0.35rem 0.35rem 0 0;
    width: calc(100% - 0.5rem);
    height: 1rem;

    ${mediaQuery("xxl")} {
      border-radius: 0.5rem 0.5rem 0 0;
      height: 1.25rem;
    }
  }
`;

export const InPaaSBoxCol = styled(Col)`
  margin-bottom: 0.5rem;
  padding: 0 1rem;
  &:not(:last-of-type) {
    border-right: 1px solid var(--border-new);
  }

  ${mediaQuery("sm")} {
    margin-bottom: 0;
  }
`;

export const Divider = styled.div.attrs({})`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1px;
  background: var(--border-new);

  ${mediaQuery("xxl")} {
    margin: 3rem 0;
  }

  &.vertical {
    ${mediaQuery("sm")} {
      width: 1px;
      height: 100%;
      margin: 0;
    }
  }
`;

export const InputGroup = styled.div`
  .goalInput input {
    text-align: right;
  }
`;

export const Label = styled.label`
  text-align: left;
  display: block;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6a7a9f;
`;

// See screenhots (small format wrap)
export const StyledForm = styled(Form)`
  .fields-row {
    min-height: 384px;
  }
`;
