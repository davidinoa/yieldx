import React from "react";
import { Formik } from "formik";
import { Row } from "react-bootstrap";
import { InvestmentProfile, InvestorType } from "@bondhouse/investor";
import clsx from "clsx";
import { Dropdown } from "containers/Investors/InvestorForms/elements/elements";
import { ReactComponent as Percent } from "assets/svg/percent.svg";
import {
  amountOptions,
  defaults,
  experienceOptions,
  getSchema,
  liquidityNeedsOptions,
  objectiveOptions,
  riskOptions,
  timeHorizonOptions,
  worthOptions
} from "./InvestmentProfileForm.state";
import FormikNumberInput from "elements/FormikNumberInput/FormikNumberInput";
import { InvestorFormProps } from "containers/Investors/CreateInvestor/CreateInvestor.state";
import BottomNav from "containers/Investors/CreateInvestor/BottomNav/BottomNav";
import {
  Form,
  FormRow,
  FormField
} from "containers/Investors/CreateInvestor/CreateInvestor.styles";
import { TaxBracket } from "./InvestmentProfileForm.styles";

function InvestmentProfileForm({
  history,
  location,
  investorType
}: InvestorFormProps) {
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !location.state ? !dirty || !isValid : !isValid;
  };
  return (
    <Formik
      validationSchema={getSchema(investorType || InvestorType.INDIVIDUAL)}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
      initialValues={{ ...defaults, ...location.state }}
    >
      {({
        errors,
        dirty,
        isValid,
        values,
        isSubmitting,
        submitForm,
        touched
      }) => {
        const errorsInvestmentProfile: InvestmentProfile = (errors.investmentProfile as unknown) as InvestmentProfile;
        const touchedInvestmentProfile: InvestmentProfile = (touched.investmentProfile as unknown) as InvestmentProfile;

        return (
          <>
            <Form id="formik">
              {investorType === InvestorType.INDIVIDUAL && (
                <>
                  <FormRow>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="investmentProfile.investmentObjective"
                          label="investment objective"
                          hint="Select an objective"
                          items={objectiveOptions}
                        />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="investmentProfile.investmentExperience"
                          label="investment experience"
                          hint="Select an experience level"
                          items={experienceOptions}
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                </>
              )}
              <FormRow>
                <FormField>
                  <Row>
                    <Dropdown
                      name="suitabilityProfile.liquidityNeeds"
                      label="liquidity needs"
                      hint="Select a liquidity need"
                      items={liquidityNeedsOptions}
                    />
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    <Dropdown
                      name="suitabilityProfile.timeHorizon"
                      label="time horizon"
                      hint="Select a time horizon"
                      items={timeHorizonOptions}
                    />
                  </Row>
                </FormField>
              </FormRow>
              {investorType === InvestorType.INDIVIDUAL && (
                <>
                  <FormRow>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="investmentProfile.riskTolerance"
                          label="risk tolerance"
                          hint="Select a risk tolerance"
                          items={riskOptions}
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="investmentProfile.liquidNetWorthUSD"
                          label="liquid net worth"
                          hint="Select a liquid net worth"
                          items={worthOptions}
                        />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="investmentProfile.totalNetWorthUSD"
                          label="total net worth"
                          hint="Select a total net worth"
                          items={worthOptions}
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                  <FormRow>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="investmentProfile.annualIncomeUSD"
                          label="annual income range"
                          hint="Select an annual income range"
                          items={amountOptions}
                        />
                      </Row>
                    </FormField>
                    <FormField>
                      <TaxBracket>
                        <FormikNumberInput
                          /* eslint-disable @typescript-eslint/ban-ts-comment */
                          // @ts-ignore
                          className={clsx({
                            validated:
                              !errorsInvestmentProfile?.federalTaxBracketPercent &&
                              touchedInvestmentProfile?.federalTaxBracketPercent
                          })}
                          name="investmentProfile.federalTaxBracketPercent"
                          label="tax bracket"
                          endIcon={<Percent />}
                          maxValue={99.99}
                          small
                        />
                      </TaxBracket>
                    </FormField>
                  </FormRow>
                </>
              )}
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={checkInitial(dirty, isValid) || isSubmitting}
              onPrevious={() => {
                history.replace(history.location.pathname, {
                  formValues: values,
                  direction: "back"
                });
              }}
            />
          </>
        );
      }}
    </Formik>
  );
}

export default InvestmentProfileForm;
