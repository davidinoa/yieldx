import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../../assets/svg/chevron-left.svg";
import {
  Root,
  BackButton,
  NextButton,
  SecondaryButton,
  ExportButton
} from "../../../../elements/AppBottomNav/AppBottomNav.styles";
import { ReactComponent as Export } from "../../../../assets/svg/export.svg";

type Props = {
  blockNext?: boolean;
  blockPrev?: boolean;
  nextLabel?: string;
  hideBackButton?: boolean;
  onPrevious: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNext?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onExport?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  blockSecondary?: boolean;
};

function BottomNav({
  onNext,
  onPrevious,
  onExport,
  blockNext = false,
  blockPrev = false,
  hideBackButton = false,
  nextLabel = "continue",
  secondaryLabel,
  onSecondary,
  blockSecondary
}: Props) {
  const { pathname } = useLocation();
  return (
    <Root>
      <BackButton
        data-testid="AppBottomNav-BackButton"
        disabled={blockPrev}
        onClick={onPrevious}
        visibility={hideBackButton ? "hidden" : "initial"}
      >
        <BackIcon />
        previous
      </BackButton>
      <div className="d-flex">
        {pathname.includes("summary") && (
          <ExportButton
            data-testid="AppBottomNav-ExportButton"
            onClick={onExport}
          >
            Export <Export />
          </ExportButton>
        )}
        {secondaryLabel && onSecondary && (
          <SecondaryButton
            data-testid="AppBottomNav-SecondaryButton"
            onClick={onSecondary}
            disabled={blockSecondary}
          >
            {secondaryLabel}
          </SecondaryButton>
        )}
        <NextButton
          data-testid="AppBottomNav-NextButton"
          disabled={blockNext}
          onClick={e => {
            e.preventDefault();
            if (onNext) onNext(e);
          }}
        >
          {nextLabel}
        </NextButton>
      </div>
    </Root>
  );
}

export default BottomNav;
