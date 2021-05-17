import clsx from "clsx";
import React from "react";
import { StyledSlider } from "../../../AssetExplorer.styles";
import { Thumb, Track } from "../../Search.styles";

export const ratings = [
  "AAA",
  "AA+",
  "AA",
  "AA-",
  "A+",
  "A",
  "A-",
  "BBB+",
  "BBB",
  "BBB-",
  "BB+",
  "BB",
  "BB-",
  "B+",
  "B",
  "B-",
  "CCC+",
  "CCC",
  "CCC-",
  "CC+",
  "CC",
  "CC-",
  "C+",
  "C",
  "C-",
  "D"
];

interface Props {
  disabled: boolean;
  value: string[];
  setValue: (ratings: string[]) => void;
}

export default function RatingsSlider({ disabled, value, setValue }: Props) {
  const range = [
    ratings.indexOf(value[0]),
    ratings.indexOf(value[value.length - 1])
  ];
  return (
    <div
      data-testid="ratings-slider-container"
      className={clsx(
        "m-auto d-flex align-items-center justify-content-center",
        {
          disabled
        }
      )}
    >
      <span className="slider-label mr-1">AAA</span>
      <StyledSlider
        data-testid="ratings-slider-input"
        disabled={disabled}
        value={range}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={data => {
          if (Array.isArray(data))
            setValue(ratings.slice(data[0], data[1] + 1));
        }}
        min={0}
        max={ratings.length - 1}
        step={1}
      />
      <span className="slider-label">D</span>
    </div>
  );
}
