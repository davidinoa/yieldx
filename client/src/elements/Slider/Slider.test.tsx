import React from "react";
import { render } from "@testing-library/react";
import Slider, { SliderItem } from "./Slider";

const sliderItems: SliderItem[] = [
  { label: "Item 1", value: 1 },
  { label: "Item 2", value: 2 },
  { label: "Item 3", value: 3 }
];

function noOp() {
  // do nothing
}

test("renders without crashing", () => {
  render(<Slider sliderItems={sliderItems} onChange={noOp} />);
});

test("renders an empty list of items without crashing", () => {
  render(<Slider sliderItems={[]} onChange={noOp} />);
});
