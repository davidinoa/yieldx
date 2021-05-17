import React, { useState } from "react";
import styled from "styled-components";
import FormikInput from "../FormikInput/FormikInput";
import { ReactComponent as ShowIcon } from "../../assets/svg/eye.svg";

export const ShowText = styled.span({
  paddingLeft: "5px",
  color: "#6980a6",
  fontWeight: "bold",
  fontSize: "13px",
  lineHeight: "16px"
});

type Props = {
  name: string;
  label: string;
  style?: string;
  className?: string;
};

export default function PasswordInput({ name, label }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <FormikInput
        type={showPassword ? "text" : "password"}
        name={name}
        label={label}
      />
      <div
        onClickCapture={() => setShowPassword(!showPassword)}
        style={{ position: "absolute", cursor: "pointer", right: 25, top: 45 }}
      >
        <ShowIcon />
        <ShowText>{showPassword ? "Hide" : "Show"}</ShowText>
      </div>
    </div>
  );
}
