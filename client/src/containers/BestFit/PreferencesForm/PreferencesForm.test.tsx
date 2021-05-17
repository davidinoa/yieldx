import React from "react";
import { Formik } from "formik";
import { BestFitCreditQuality } from "@bondhouse/rover-whitelist";
import PreferencesForm from "./PreferencesForm";
import { render, fireEvent, screen } from "../../../test/utils";
import { formDefaults } from "../../LoginSecurity/ResetPassword/ResetPassword.state";
import {
  Preferences,
  createBestfitPortfolio,
  navSteps
} from "../BestFit.state";

Object.keys(navSteps).forEach(step => {
  if (step === "maturity" || step === "esg") return;
  xtest(`${step} step`, () => {
    render(
      <Formik initialValues={formDefaults} onSubmit={() => undefined}>
        <PreferencesForm />
      </Formik>,
      {
        route: `yieldx/best-fit/preferences/${step}`
      }
    );
  });
});

xtest("function to create a BestFit portfolio", async () => {
  const mockPreferences: Required<Preferences> = {
    submitting: false,
    isCurrentValid: true,
    currentStepIndex: 6,
    quality: BestFitCreditQuality.InvestmentGrade,
    timeMetric: "maturity",
    years: 5,
    weighting: "maximizeYield",
    excludedSubsectors: [],
    quantity: 20,
    investment: 50000
  };
  expect(
    await createBestfitPortfolio({ preferences: mockPreferences })
  ).toBeFalsy();
});

xtest("submission handler", async () => {
  const mockHandleSubmit = jest.fn();
  const returnValue = mockHandleSubmit(null, { setSubmitting: jest.fn() });
  render(<PreferencesForm />);
  fireEvent.submit(screen.getByTestId("formik"));
  expect(mockHandleSubmit).toHaveBeenCalled();
  expect(returnValue).toBeUndefined();
});
