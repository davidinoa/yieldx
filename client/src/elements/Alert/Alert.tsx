import React from "react";
import { Button, Container, CloseIcon } from "./Alert.styles";
import { ReactComponent as AlertIcon } from "assets/svg/alert.svg";
import { AlertLevel } from "providers/alerts/AlertProvider";

interface Props {
  type?: string | AlertLevel;
  message: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText?: string;
  onClose?: () => void;
  color?: string;
  timeout?: number;
}

const colors: Record<string, string> = {
  warning: "#ffa15e",
  danger: "#FF5252",
  pending: "#FAE369",
  success: "#00e8a0"
};

export default function Alert({
  message,
  onClose,
  onClick,
  buttonText,
  disabled,
  type = "warning",
  color
}: Props) {
  return (
    <Container className="container-fluid" color={color || colors[type]}>
      <>
        <AlertIcon color={type === "pending" ? "black" : colors[type]} />
        <span>{message}</span>
        {onClick && (
          <Button
            data-testid="Alert-OpenButton"
            onClick={onClick}
            disabled={disabled}
          >
            {buttonText}
          </Button>
        )}
        {onClose && (
          <CloseIcon data-testid="Alert-CloseButton" onClick={onClose} />
        )}
      </>
    </Container>
  );
}
