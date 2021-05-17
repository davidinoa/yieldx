import React from "react";
import { Route } from "react-router-dom";
import { InvestorType } from "@bondhouse/investor";
import { fireEvent, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { act, render, RenderResult, screen } from "test/utils";
import FinraSecForm from "./FinraSecForm";

describe("finra sec form tests", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        render={({ location, history }) => {
          return (
            <FinraSecForm
              history={history}
              location={location}
              investorType={InvestorType.INDIVIDUAL}
            />
          );
        }}
      />,
      {
        route: "/yieldx/investors/create/sec-finra-association"
      }
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("should render sec finra form", async () => {
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

  xtest("submit should be enable with legal firm name and upload", async () => {
    const { getByText, getByLabelText } = utils;
    const legalFirmName = getByLabelText(/legal firm name/i);
    await act(async () => {
      await userEvent.type(legalFirmName, "test firm name");
    });
    expect(await screen.findByText(/continue/i)).toBeDisabled();

    // note: attempting to manually set the files property of an HTMLInputElement
    // results in an error as the files property is read-only.
    // this feature works around that by using Object.defineProperty.
    await act(async () => {
      await fireEvent.change(getByLabelText(/upload approval form/i), {
        target: {
          files: [
            new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })
          ]
        }
      });
    });
    expect(getByText(/chucknorris.png/i)).toBeInTheDocument();
  });
});
