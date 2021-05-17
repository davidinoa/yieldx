import React from "react";
import { Route } from "react-router-dom";
import { waitFor } from "@testing-library/dom";
import { act, render, RenderResult } from "../../../../test/utils";
import OrganizationForm from "./OrganizationForm";

describe("organization form tests", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(<Route component={OrganizationForm} />, {
      route: "/yieldx/investors/create/organization-info"
    });
  });

  afterEach(() => jest.clearAllMocks());

  test("should render organization form", async () => {
    const { container } = utils;
    await act(async () => {
      expect(container).toBeDefined();
    });
  });

  test("submit should be disabled on mount", async () => {
    const { getByText } = utils;
    await act(async () => {
      await waitFor(() => {
        expect(getByText(/continue/i)).toBeDisabled();
      });
    });
  });
});
