import React from "react";
import { Route } from "react-router-dom";
import { act, render, RenderResult } from "../../../../test/utils";
import OrganizationBackgroundForm from "./OrganizationBackgroundForm";

describe("organization background form test", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        render={({ location, history }) => {
          return (
            <OrganizationBackgroundForm history={history} location={location} />
          );
        }}
      />,
      {
        route: "/yieldx/investors/create/organization-background"
      }
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("should render organization form", async () => {
    const { container } = utils;
    await act(async () => {
      expect(container).toBeDefined();
    });
  });
});
