import React from "react";
import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import { render, RenderResult } from "../../../../test/utils";
import W9Form from "./W9Form";

describe("W9Form", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        render={() => {
          return <W9Form />;
        }}
      />,
      {
        route: "/yieldx/investors/create/employment"
      }
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("should render w9 form", async () => {
    const { container } = utils;
    expect(container).toBeDefined();
  });

  test("submit should be disabled on mount", async () => {
    const { getByText } = utils;
    await waitFor(() => {
      expect(getByText(/continue/i)).toBeDisabled();
    });
  });

  test("Date field should be formatted as XX/XX/XX", async () => {
    const { getByLabelText } = utils;
    const date = getByLabelText(/Date/i);
    await userEvent.type(date, "090920");
    expect(date.getAttribute("value")).toBe("09/09/20");
  });
});
