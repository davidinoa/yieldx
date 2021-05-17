import React from "react";
import { IconWrapper, LabelWrapper, TextWrapper } from "./Label.styles";

export interface LabelProps {
  text: string;
  color?: "green" | "yellow" | "red" | "grey" | "default";
  disabled?: boolean;
  icon?: React.ReactElement;
}

export function Label({
  icon: Icon,
  text,
  color = "default",
  disabled
}: LabelProps) {
  return (
    <LabelWrapper color={color} className={disabled ? "disabled" : ""}>
      {Icon && <IconWrapper>{Icon}</IconWrapper>}
      <TextWrapper>{text}</TextWrapper>
    </LabelWrapper>
  );
}
