import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { Root, BackButton, NextButton } from "./AppBottomNav.styles";
import { ReactComponent as BackIcon } from "assets/svg/chevron-left.svg";

interface Props {
  onNext?: () => (void | Promise<void>);
  onPrevious?: () => (void | Promise<void>);
  nextLabel?: string;
  previousLabel?: string;
  blockNext?: boolean;
  hideBack?: boolean;
  hideNext?: boolean;
  secondaryButton?: ReactElement;
  centerButton?: ReactElement;
}

function AppBottomNav({
  onNext = () => undefined,
  onPrevious,
  blockNext,
  nextLabel = "Continue",
  previousLabel = "Previous",
  hideBack,
  hideNext,
  secondaryButton,
  centerButton
}: Props) {
  const history = useHistory();
  const onBack = onPrevious || history.goBack;
  const isAsyncBack = onBack.constructor.name === "AsyncFunction";
  const isAsyncNext = onNext.constructor.name === "AsyncFunction";
  // TODO: remove async functions passed to this components
  // if (isAsyncNext) console.warn("AppBottomNav is using async click [onNext]");
  // if (isAsyncNext)
  //   console.warn("AppBottomNav is using async click [onPrevious]", {
  //     previousLabel
  //   });
  // TODO: move this component to AppLayout (it renders too many times here)
  return (
    <Root>
      <BackButton
        data-testid="AppBottomNav-BackButton"
        visibility={hideBack ? "hidden" : "initial"}
        onClick={async evt => {
          // Ensure event context is maintained during maybe async call
          evt.persist();
          return isAsyncBack ? await onBack() : onBack();
        }}
      >
        <BackIcon />
        {previousLabel}
      </BackButton>
      {centerButton}
      <div
        className={
          secondaryButton
            ? "d-flex align-items-center justify-content-around"
            : undefined
        }
      >
        {secondaryButton}
        {!hideNext && (
          <NextButton
            data-testid="AppBottomNav-NextButton"
            disabled={blockNext}
            onClick={async evt => {
              // Ensure event context is maintained during maybe async call
              evt.persist();
              return isAsyncNext ? await onNext!() : onNext();
            }}
          >
            {nextLabel}
          </NextButton>
        )}
      </div>
    </Root>
  );
}

export default AppBottomNav;
