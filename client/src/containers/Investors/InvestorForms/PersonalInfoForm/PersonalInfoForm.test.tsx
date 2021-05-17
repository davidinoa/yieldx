import React from "react";
import { Route } from "react-router-dom";
import { InvestorType } from "@bondhouse/investor";
import userEvent from "@testing-library/user-event";
import PersonalInfoForm from "./PersonalInfoForm";
import { render, RenderResult, waitFor } from "../../../../test/utils";

describe("PersonalInfoForm", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        render={({ location, history }) => {
          return (
            <PersonalInfoForm
              history={history}
              location={location}
              investorType={InvestorType.INDIVIDUAL}
            />
          );
        }}
      />,
      {
        route: "/yieldx/investors/create/personal-info"
      }
    );
  });

  test("should render personal info", async () => {
    const { container } = utils;
    expect(container).toBeDefined();
  });

  test("submit button should be disabled at first", async () => {
    const { getByText } = utils;
    await waitFor(() => {
      expect(getByText(/continue/i)).toBeDisabled();
    });
  });

  test("test dob masks", async () => {
    const { getByLabelText } = utils;
    const dobInput = getByLabelText(/date of birth/i);
    await userEvent.type(dobInput, "07251995");
    expect(dobInput.getAttribute("value")).toBe("07/25/1995");
  });

  test("test ssn masks", async () => {
    const { getByLabelText } = utils;
    const ssnInput = getByLabelText(/ssn\/tin/i);
    await userEvent.type(ssnInput, "000009999");
    expect(ssnInput.getAttribute("value")).toBe("000-00-9999");
  });

  test("continue should be enabled with valid inputs", async () => {
    const { getByLabelText } = utils;
    const ssnInput = getByLabelText(/ssn\/tin/i);
    const dobInput = getByLabelText(/date of birth/i);
    const firstInput = getByLabelText(/first name/i);
    const lastInput = getByLabelText(/last name/i);

    await userEvent.type(ssnInput, "000009999");
    expect(ssnInput.getAttribute("value")).toBe("000-00-9999");

    await userEvent.type(dobInput, "07251995");
    expect(dobInput.getAttribute("value")).toBe("07/25/1995");

    await userEvent.type(firstInput, "0test0");
    expect(firstInput.getAttribute("value")).toBe("0test0");

    await userEvent.type(lastInput, "0testAgain0");
    expect(lastInput.getAttribute("value")).toBe("0testAgain0");
  });
});
