import styled from "styled-components";
import { Col } from "react-bootstrap";

export { default as Checkbox } from "./Checkbox/Checkbox";
export { default as Dropdown } from "./Dropdown/Dropdown";
export { default as TextInput } from "./TextInput/TextInput";
export { default as RadioGroup } from "./RadioGroup/RadioGroup";
export { default as InputGroup } from "./InputGroup/InputGroup";
export { default as NumberInput } from "./NumberInput/NumberInput";

export const Label = styled.label`
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text);
`;

export const OptionalLabel = styled.label`
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  color: var(--subtext-3);
  padding-left: 4px;
`;

export const FormGroup = styled(Col)`
  &.inline {
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    label {
      margin-bottom: 0;
      margin-right: 0.5rem;
    }
    label + * {
      flex-grow: 1;
    }
  }
  margin-bottom: 0.75rem;

  label {
    margin-bottom: 13px;
  }
  input,
  .dropdown,
  .investor-input {
    border: ${({ touched, invalid }: GroupProps) =>
      getBorder({ touched, invalid })};
  }
  p {
    display: ${({ touched, invalid }: GroupProps) =>
      invalid && touched === "true" ? "block" : "none"};
  }
`;

function getBorder({ touched, invalid }: GroupProps) {
  const beenTouched = touched === "true";
  if (!invalid && beenTouched) return "1px solid var(--valid)";
  if (invalid && beenTouched) return "1px solid var(--invalid)";
  return undefined;
}

interface GroupProps {
  touched: "true" | "false";
  invalid: boolean;
}
