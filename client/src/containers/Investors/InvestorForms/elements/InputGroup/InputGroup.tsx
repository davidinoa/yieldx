import React from "react";
import { Col } from "react-bootstrap";
import { useField } from "formik";
import { Group, TextInput, Button } from "./InputGroup.styles";
import { Label } from "../elements";

type Props = {
  name: string;
  inputLabel: string;
  buttonLabel: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

function InputGroup({
  name,
  inputLabel,
  buttonLabel,
  onClick,
  disabled
}: Props) {
  const [field] = useField(name);
  return (
    <Col>
      <Label className="d-block" htmlFor={name}>
        {inputLabel}
      </Label>
      <Group>
        <TextInput
          id={field.name}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          data-testid={`${name}-input-group-text`}
        />
        <Button
          onClick={onClick}
          disabled={disabled}
          data-test-id={`${name}-input-group-button`}
        >
          {buttonLabel}
        </Button>
      </Group>
    </Col>
  );
}

export default InputGroup;
