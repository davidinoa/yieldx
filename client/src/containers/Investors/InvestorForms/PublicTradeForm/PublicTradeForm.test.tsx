import React from "react";
import { Route } from "react-router-dom";
import { InvestorType } from "@bondhouse/investor";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";
import { act, render, RenderResult } from "../../../../test/utils";
import PublicTradeForm from "./PublicTradeForm";

describe("public trade form tests", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        render={({ location, history }) => {
          return (
            <PublicTradeForm
              history={history}
              location={location}
              investorType={InvestorType.INDIVIDUAL}
            />
          );
        }}
      />,
      {
        route: "/yieldx/investors/create/public-trade"
      }
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("should render public trade form", async () => {
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

  test("button should enable at least one stock ticker added", async () => {
    const { getByLabelText, getByText } = utils;
    const ticker = getByLabelText(/stock ticker/i);
    await act(async () => {
      await userEvent.type(ticker, "test ticker");
      await userEvent.click(getByText(/add/i));
    });
    expect(getByText(/continue/i)).toBeEnabled();
  });
});
