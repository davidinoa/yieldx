import React from "react";
import { Route } from "react-router-dom";
import { InvestorType } from "@bondhouse/investor";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";
import { render, RenderResult } from "../../../../test/utils";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Route
        render={({ location, history }) => {
          return (
            <ContactForm
              history={history}
              location={location}
              investorType={InvestorType.INDIVIDUAL}
            />
          );
        }}
      />,
      {
        route: "/yieldx/investors/create/contact"
      }
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("should render contact form", async () => {
    const { container } = utils;
    expect(container).toBeDefined();
  });

  test("submit should be disabled on mount", async () => {
    const { getByText } = utils;
    await waitFor(() => {
      expect(getByText(/continue/i)).toBeDisabled();
    });
  });

  test("phone number mask test", async () => {
    const { getByLabelText } = utils;
    const phoneInput = getByLabelText(/phone number/i);
    const emailInput = getByLabelText(/email/i);
    await userEvent.type(emailInput, "test@test.com");
    expect(emailInput.getAttribute("value")).toBe("test@test.com");
    await userEvent.type(phoneInput, "3475135082");
    expect(phoneInput.getAttribute("value")).toBe("347-513-5082 ");
  });
});
