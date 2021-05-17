import React from "react";
import { fireEvent } from "@testing-library/dom";
import { render, screen } from "../../../../../test/utils";
import RatingsSlider, { ratings } from "./RatingsSlider";

describe("RatingsSlider", () => {
  test("it renders properly", () => {
    const rendered = render(
      <RatingsSlider value={ratings} setValue={jest.fn()} disabled={false} />
    );
    expect(rendered).toBeDefined();
  });
  test("should be disabled and enabled with prop", async () => {
    const { rerender } = render(
      <RatingsSlider value={ratings} setValue={jest.fn()} disabled />
    );
    const sliderContainer = await screen.findByTestId(
      "ratings-slider-container"
    );
    expect(sliderContainer.getAttribute("class")?.includes("disabled")).toBe(
      true
    );
    rerender(
      <RatingsSlider value={ratings} setValue={jest.fn()} disabled={false} />
    );
    expect(sliderContainer.getAttribute("class")?.includes("disabled")).toBe(
      false
    );
  });
  test("on change should be called", () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RatingsSlider value={ratings} setValue={mockOnChange} disabled={false} />
    );

    const leftSliderThumb = screen.getByTestId("slider-thumb-0");

    fireEvent.mouseDown(leftSliderThumb);
    fireEvent.mouseMove(container, {
      clientX: 5
    });
    fireEvent.mouseUp(leftSliderThumb);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
