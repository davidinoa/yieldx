import React from "react";
import { Route } from "react-router-dom";
import { act, render, RenderResult } from "../../../../test/utils";
import BhCrsForm from "./BhCrsForm";

describe("crs form tests", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        component={BhCrsForm}
      />, {
        route: "/yieldx/investors/create/crs-form"
      }
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("should render crs form", async () => {
    const { container } = utils;
    await act(async () => {
      expect(container).toBeDefined();
    });
  });

});
