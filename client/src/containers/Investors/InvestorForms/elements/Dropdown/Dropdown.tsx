import React, { useEffect, useState } from "react";
import { useField } from "formik";
import clsx from "clsx";
import { DropdownContainer, Item, Menu, Toggle } from "./Dropdown.styles";
import { FormGroup, Label } from "../elements";
import { Error } from "../TextInput/TextInput.styles";

interface Props {
  style?: Record<string, string>;
  inline?: boolean;
  name: string;
  label: string;
  hint?: string;
  error?: string;
  items: { value: string; label: string }[];
  onSelectCallBack?: (val: string) => void;
  xs?: number;
}

function Dropdown({
  style,
  inline,
  name,
  label,
  hint,
  error,
  items,
  onSelectCallBack,
  xs
}: Props) {
  const [field, meta, helpers] = useField(name);
  const [toggleText, setToggleText] = useState("");
  useEffect(() => {
    setToggleText(
      (items.find(cv => field.value === cv.value)?.label || hint) ?? ""
    );
  }, [field.value, items, hint]);
  return (
    <FormGroup
      style={style}
      className={clsx({ inline })}
      invalid={error || meta.error}
      touched={String(meta.touched)}
      xs={xs}
    >
      <Label htmlFor={name}>{label}</Label>
      <DropdownContainer>
        <Toggle data-testid={`dropdownToggle-${name.replace(/\./g, "-")}`}>
          {toggleText}
        </Toggle>
        <Menu data-testid={`dropdown-${name.replace(/\./g, "-")}`}>
          {items.map(item => {
            return (
              <Item
                key={item.value}
                selected={item.value === field.value}
                onClick={() => {
                  helpers.setValue(item.value);
                  if (onSelectCallBack) onSelectCallBack(item.value);
                }}
              >
                {item.label}
              </Item>
            );
          })}
        </Menu>
      </DropdownContainer>
      <div style={{ position: "relative" }}>
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </div>
    </FormGroup>
  );
}

export default Dropdown;
