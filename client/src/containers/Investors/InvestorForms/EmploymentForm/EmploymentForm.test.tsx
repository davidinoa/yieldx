import React from "react";
import { Route } from "react-router-dom";
import { InvestorType } from "@bondhouse/investor";
import { waitFor } from "@testing-library/dom";
import { act, render, RenderResult } from "../../../../test/utils";
import EmploymentForm from "./EmploymentForm";
import { getSchema } from "./EmploymentForm.state";

describe("employment form tests", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        render={({ location, history }) => {
          return (
            <EmploymentForm
              history={history}
              location={location}
              investorType={InvestorType.INDIVIDUAL}
            />
          );
        }}
      />,
      {
        route: "/yieldx/investors/create/employment"
      }
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("should render employment form", async () => {
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

  test("getSchema", () => {
    const result = getSchema();
    expect(result).toBeTruthy();
  });
});
