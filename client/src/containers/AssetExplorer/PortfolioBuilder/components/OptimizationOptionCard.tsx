import React, { MouseEvent, useEffect, useState } from "react";
import { OptionButton, OptionCard } from "../PortfolioBuilder.styles";
import AllocationSlider from "../../../../elements/AllocationSlider/AllocationSlider";
import Tooltip from "../../../../elements/Tooltip/Tooltip";
import YieldXPortfolio from "../../../../models/YieldXPortfolio";
import suggestBounds from "../../../../util/suggestBounds";

interface OptimizationOptionCardClickHandler
  extends MouseEvent<HTMLButtonElement> {
  weightRange: number[];
}

type Props = {
  portfolio: YieldXPortfolio;
  heading: string;
  description: string;
  buttonText: string;
  disabled: boolean;
  onClick: (e: OptimizationOptionCardClickHandler) => void;
  disableAllocation?: boolean;
};

function calculateDefaultWeightRange(portfolio: YieldXPortfolio): number[] {
  const { minimum, maximum } = suggestBounds(portfolio);
  return [Math.floor(minimum * 100), Math.ceil(maximum * 100)];
}

export default function OptimizationOptionCard(props: Props) {
  const {
    portfolio,
    heading,
    description,
    buttonText,
    disabled,
    onClick,
    disableAllocation
  } = props;
  const defaultWeightRange = calculateDefaultWeightRange(portfolio);
  const [minimum, maximum] = defaultWeightRange;
  const [weightRange, setWeightRange] = useState(defaultWeightRange);

  useEffect(() => {
    setWeightRange([minimum, maximum]);
  }, [minimum, maximum, setWeightRange]);
  return (
    <OptionCard>
      <h5>
        {heading}
        {description && <Tooltip content={description} />}
      </h5>
      {disableAllocation ? null : (
        <>
          <div className="slider">
            <h6>Allocation</h6>

            <AllocationSlider
              value={weightRange}
              onChange={value => {
                if (Array.isArray(value)) {
                  setWeightRange(value);
                }
              }}
            />
          </div>
        </>
      )}
      <OptionButton
        disabled={disabled}
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          onClick({
            ...e,
            weightRange
          });
        }}
      >
        {buttonText}
      </OptionButton>
    </OptionCard>
  );
}
