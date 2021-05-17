import React from "react";
import { ReactSliderProps } from "react-slider";
import { StyledSlider, Thumb, Track } from "./AllocationSlider.styles";

type Props = {
  defaultValue?: ReactSliderProps["defaultValue"];
  value?: ReactSliderProps["value"];
  onChange?: ReactSliderProps["onChange"];
  minDistance?: ReactSliderProps["minDistance"];
  onSliderClick?: ReactSliderProps["onSliderClick"];
  max?: number;
  min?: number;
};

export default function AllocationSlider(props: Props) {
  const {
    value,
    onChange,
    minDistance,
    onSliderClick,
    max,
    min,
    defaultValue
  } = props;
  return (
    <StyledSlider
      defaultValue={defaultValue}
      onSliderClick={onSliderClick}
      value={value}
      data-testid="AllocationSlider"
      renderTrack={Track}
      renderThumb={Thumb}
      onChange={onChange}
      min={min || 0}
      max={max || 100}
      minDistance={minDistance}
      step={1}
    />
  );
}
