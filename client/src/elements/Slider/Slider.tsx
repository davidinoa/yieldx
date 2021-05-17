import React, { useState } from "react";
import styled, { css } from "styled-components";
import Tick from "./Tick";

export interface SliderItem {
  label?: string;
  value: number;
}

const SliderTicks = styled.div({
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  width: "calc(100% - 15px)"
});

const SliderContainer = styled.div({
  position: "absolute",
  width: "100%",
  zIndex: 1,
  bottom: "-5px"
});

const labelStyles = css`
  position: absolute;
  bottom: -10px;
  font-weight: bold;
  letter-spacing: 0.2rem;
  font-size: 0.8125rem;
  margin-bottom: 0;
`;

const StartLabel = styled.p`
  ${labelStyles}
  left: -5rem;
`;

const EndLabel = styled.p`
  ${labelStyles}
  right: -6rem;
`;

const Root = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;

const StyledSlider = styled.input({
  "-webkit-appearance": "none",
  height: "2px",
  width: "100%",
  zIndex: 5,
  display: "flex",
  alignItems: "center",
  "&::-webkit-slider-thumb": {
    "-webkit-appearance": "none",
    appearance: "none",
    height: "20px",
    width: "20px",
    backgroundColor: "#015cff",
    border: `2px solid #015cff`,
    borderRadius: "50%",
    zIndex: 5,
    position: "relative"
  },
  '& input[type="range"]::-moz-range-thumb': {
    height: "20px",
    width: "20%",
    backgroundColor: "#015cff",
    border: `2px solid #015cff`,
    borderRadius: "50%"
  },
  '& input[type="range"]::-ms-thumb': {
    height: "20px",
    width: "20%",
    backgroundColor: "#015cff",
    border: `2px solid #015cff`,
    borderRadius: "50%"
  }
});

type Props = {
  sliderItems: SliderItem[];
  onChange: (selected: SliderItem) => void;
  startLabel?: string;
  endLabel?: string;
  currValue?: SliderItem;
};

export default function Slider({
  sliderItems,
  startLabel,
  endLabel,
  onChange,
  currValue
}: Props) {
  const itemCount = sliderItems.length;
  const [selected, setSelected] = useState(currValue);

  return (
    <Root>
      <StartLabel>{startLabel}</StartLabel>
      <StyledSlider
        step="1"
        data-testid="slider"
        type="range"
        value={String(selected?.value)}
        min={itemCount ? sliderItems[0].value.toString() : ""}
        max={
          itemCount ? sliderItems[sliderItems.length - 1].value.toString() : ""
        }
        list="steplist"
        onChange={e => setSelected(handleChange(e, sliderItems, onChange))}
      />
      <datalist id="steplist">
        {sliderItems.map(item => (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <option key={JSON.stringify(item)} value={item.value} />
        ))}
      </datalist>
      <SliderContainer>
        <SliderTicks>
          {sliderItems.map((sliderItem: SliderItem, i: number) => {
            let label = sliderItem.label || "";
            if ((startLabel && i === 0) || (endLabel && i === itemCount - 1)) {
              label = "";
            }
            return (
              <Tick
                label={label}
                selected={selected?.value === i + 3}
                key={`${sliderItem.label}-${sliderItem.value}`}
              />
            );
          })}
        </SliderTicks>
      </SliderContainer>
      <EndLabel>{endLabel}</EndLabel>
    </Root>
  );
}

export function handleChange(
  e: React.ChangeEvent<HTMLInputElement>,
  items: Array<SliderItem>,
  cb: (selected: SliderItem) => void
) {
  const nextValue = +e.target.value;
  const sliderItem = items.find(({ value }) => value === nextValue);
  if (sliderItem != null) {
    cb(sliderItem);
  }
  return { value: nextValue, label: `${nextValue} years` };
}
