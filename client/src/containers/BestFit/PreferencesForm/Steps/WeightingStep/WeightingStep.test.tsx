import React from "react";
import { Formik } from "formik";
import userEvent from "@testing-library/user-event";
import WeightingStep from "./WeightingStep";
import { render, screen } from "../../../../../test/utils";
import { mockPreferences } from "../../../BestFit.state";

describe("WeightingStep", () => {
  test("options", () => {
    render(
      <Formik initialValues={mockPreferences} onSubmit={() => undefined}>
        {() => <WeightingStep />}
      </Formik>
    );

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
    options.forEach(option => userEvent.click(option));
    expect(options[2]).toHaveAttribute("data-selected", "true");
  });
});
