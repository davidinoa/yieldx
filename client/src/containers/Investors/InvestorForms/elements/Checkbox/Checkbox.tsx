import React from "react";
import { useField } from "formik";
import { Col } from "react-bootstrap";
import StyledCheckbox from "./Checkbox.styles";

interface Props {
  name: string;
  label: string;
  disabled?: boolean;
}

function Checkbox({ name, label, disabled = false }: Props) {
  const [field] = useField(name);
  return (
    <Col>
      <StyledCheckbox
        id={name}
        label={label}
        checked={field.value}
        disabled={disabled}
        onChange={field.onChange}
      />
    </Col>
  );
}

export default Checkbox;
