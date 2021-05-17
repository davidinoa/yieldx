import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test/utils";
import ToggleValue from "./ToggleValue";

describe("ToggleValue", () => {
  test("Should display text button with toggleLabel prop", () => {
    const mockToggle = jest.fn();
    const { asFragment } = render(
      <ToggleValue onToggle={mockToggle} current="Annual" />
    );
    const toggleBtn = screen.getByText(/Annual/i);
    expect(toggleBtn).toBeInTheDocument();
    userEvent.click(toggleBtn);
    expect(mockToggle).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });
  test("Should render switch if label is $ or %", () => {
    const mockToggle = jest.fn();
    const { asFragment } = render(
      <ToggleValue
        onToggle={mockToggle}
        current="%"
        switchToggleLabels={["%", "$"]}
      />
    );
    const toggleBtn = screen.getByTestId("ToggleValue-Percent");
    expect(toggleBtn).toBeInTheDocument();
    userEvent.click(toggleBtn);
    expect(mockToggle).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });
});
