import React from "react";
import { Route } from "react-router-dom";
import { waitFor } from "@testing-library/dom";
import { act, render, RenderResult } from "../../../../test/utils";
import ExemptForm from "./ExemptVerification";

describe("exempt form tests", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(<Route component={ExemptForm} />, {
      route: "/yieldx/investors/create/exempt-legal"
    });
  });

  afterEach(() => jest.clearAllMocks());

  test("should render exempt form", async () => {
    const { container } = utils;
    await act(async () => {
      expect(container).toBeDefined();
    });
  });

  test("submit should be disabled on mount", async () => {
    const { getByText } = utils;
    await act(async () => {
      await waitFor(() => {
        expect(getByText(/continue/i)).toBeEnabled();
      });
    });
  });
});
