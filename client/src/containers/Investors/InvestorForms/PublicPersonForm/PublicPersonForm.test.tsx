import React from "react";
import { Route } from "react-router-dom";
import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { render, RenderResult, screen } from "test/utils";
import PublicPersonForm from "./PublicPersonForm";

describe("PublicPersonForm", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(<Route component={PublicPersonForm} />, {
      route: "/yieldx/investors/create/public-person"
    });
  });

  afterEach(() => jest.clearAllMocks());

  test("should render public person form", async () => {
    const { container } = utils;
    expect(container).toBeDefined();
  });

  test("submit should be disabled on mount", async () => {
    const { getByText } = utils;
    await waitFor(() => {
      expect(getByText(/continue/i)).toBeDisabled();
    });
  });

  test("button should enable with valid inputs", async () => {
    const { getByLabelText, getByText } = utils;
    const familyName = getByLabelText(/family member name/i);
    const org = await screen.getByLabelText(/political organization/i);
    await userEvent.type(org, "test organization");
    expect(org.getAttribute("value")).toBe("test organization");
    await userEvent.type(familyName, "test name");
    await userEvent.click(getByText(/add/i));
    expect(familyName.getAttribute("value")).toBe("");
    await waitFor(() => {
      expect(screen.getByText(/continue/i)).toBeEnabled();
    });
  });
});
