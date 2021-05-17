import React from "react";
import { Route } from "react-router-dom";
import { waitFor } from "@testing-library/dom";
import { act, render, RenderResult } from "../../../../test/utils";
import AdditionalInformation from "./AdditionalInformation";

describe("organization background form test", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        render={({ location, history }) => {
          return (
            <AdditionalInformation
              organizationName="name"
              history={history}
              location={location}
            />
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

  test("submit should be disabled on mount", async () => {
    const { getByText } = utils;
    await act(async () => {
      await waitFor(() => {
        expect(getByText(/continue/i)).toBeDisabled();
      });
    });
  });
});
