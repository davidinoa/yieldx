import React from "react";
import {
  BootstrapSpinner,
  SpinnerContainer,
  SpinnerWrapper
} from "./Spinner.styles";

export type SpinnerProps = {
  small?: boolean;
  height?: string;
  fullPage?: boolean;
};

export function Spinner({ small, height = "100%", fullPage }: SpinnerProps) {
  return (
    <SpinnerWrapper height={fullPage ? "85vh" : height}>
      <SpinnerContainer>
        <BootstrapSpinner
          data-testid="spinner"
          className={(small && "spinner-border-sm") || undefined}
        />
      </SpinnerContainer>
    </SpinnerWrapper>
  );
}
