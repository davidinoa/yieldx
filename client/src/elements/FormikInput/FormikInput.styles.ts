import styled from "styled-components";
import { mediaQuery } from "../../theme/breakpoints.style";

export const Label = styled.label`
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: white;
  font-size: 11px;

  ${mediaQuery("xxl")} {
    font-size: 0.775rem;
  }
`;

export const HelperText = styled.span`
  display: inline-block;
  margin: 10px;
  font-size: 0.65rem;
  line-height: 15px;
  color: var(--lightest);

  ${mediaQuery("xxl")} {
    font-size: 0.75rem;
  }
`;

export const Input = styled.input.attrs((props: { disabled: boolean }) => ({
  disabled: props.disabled
}))`
  display: inline-block;
  border-radius: 0.25rem;
  border: 1px solid var(--lightest);
  background: var(--darkest);
  color: var(--white);
  font-weight: bold;
  width: 100%;
  height: 40px;
  font-size: 0.85rem;
  padding: 6px 14px;

  ${mediaQuery("xxl")} {
    font-size: 1rem;
    padding: 10px 20px;
    height: 50px;
  }

  :focus {
    outline-style: none;
    border-color: var(--white);
  }
`;

export const Error = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: var(--invalid) !important;
`;

export const Container = styled.div`
  position: relative;
  * {
    color: ${(props: { disabled: boolean }) => {
      return props.disabled ? "var(--lightest)" : "var(--text)";
    }};
  }
  label {
    margin-bottom: 10px;
  }
  input,
  .dropdown,
  .input {
    border: ${({ touched, invalid, disabled }: Props) =>
      getBorder({ touched, invalid, disabled })};
  }
  p {
    display: ${({ touched, invalid }: Props) =>
      invalid && touched ? "block" : "none"};
  }
`;

interface Props {
  touched: boolean;
  invalid?: boolean;
  disabled: boolean;
}

function getBorder({ touched, invalid, disabled }: Props) {
  const beenTouched = touched;
  if (invalid === undefined) return undefined;
  if (disabled) return "1px solid var(--light)";
  if (!invalid && beenTouched) return "1px solid var(--valid)";
  if (invalid && beenTouched) return "1px solid var(--invalid)";
  return undefined;
}
