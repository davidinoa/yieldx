import React, { useEffect, useState } from "react";
import { Label } from "containers/Investors/InvestorForms/elements/elements";
import { Error } from "containers/Investors/InvestorForms/elements/TextInput/TextInput.styles";
import { DropdownContainer, Item, Menu, Toggle } from "./Dropdown.styles";

interface Props {
  name: string;
  label?: string;
  placeholder: string;
  error?: string;
  items: { value: string; label: string }[];
  value?: string;
  onSelected: (val: string) => void;
}

export function Dropdown({
  name,
  label,
  placeholder,
  error,
  items,
  value,
  onSelected
}: Props) {
  const [toggleText, setToggleText] = useState("");
  useEffect(() => {
    setToggleText(items.find(cv => value === cv.value)?.label || placeholder);
  }, [value, items, placeholder]);
  return (
    <div className="w-100">
      {label && <Label htmlFor={name}>{label}</Label>}
      <DropdownContainer>
        <Toggle data-testid={`dropdownToggle-${name.replace(/\./g, "-")}`}>
          {toggleText}
        </Toggle>
        <Menu data-testid={`dropdown-${name.replace(/\./g, "-")}`}>
          {items.map(item => {
            return (
              <Item
                key={item.value}
                selected={item.value === value}
                onClick={() => {
                  onSelected(item.value);
                }}
              >
                {item.label}
              </Item>
            );
          })}
        </Menu>
      </DropdownContainer>
      <div style={{ position: "relative" }}>
        {error && <Error>{error}</Error>}
      </div>
    </div>
  );
}
