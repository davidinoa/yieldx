import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";

type Props = {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  style?: Record<string, string>;
};

const backgrounds: { [variant: string]: string } = {
  primary: "var(--primary)",
  secondary: "transparent"
};

export const Root = styled(BootstrapButton)`
  padding: 6px 22px;
  border: none;
  border-radius: 5px;
  background: ${({ variant }: { variant: string }) => backgrounds[variant]};
`;

export default function Button({
  text,
  onClick,
  style,
  variant = "primary"
}: Props) {
  return (
    <Root
      data-testid={`Button-${text}`}
      style={style}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Root>
  );
}
