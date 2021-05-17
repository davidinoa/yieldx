import React from "react";
import { Formik } from "formik";
import { InvestorType } from "@bondhouse/investor";
import { Row } from "react-bootstrap";
import {
  countryValues,
  defaults,
  getSchema,
  getEditSchema,
  PersonalInfoState
} from "./PersonalInfoForm.state";

import {
  Checkbox,
  Dropdown,
  NumberInput,
  TextInput
} from "../elements/elements";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import { ContinueButton } from "../../../Portfolios/PortfolioDisplay/Modals/Modals.styles";
import {
  Form,
  FormRow,
  FormField,
  FormFieldFull,
  ErrorAlert
} from "../../CreateInvestor/CreateInvestor.styles";

type EditForm = {
  onSubmit?: (vals: PersonalInfoState) => void;
  initialVals?: PersonalInfoState;
  disabled?: boolean;
};

function PersonalInfoForm({
  history,
  location,
  investorType,
  onSubmit,
  initialVals
}: InvestorFormProps & EditForm) {
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !(location.state || initialVals) ? !dirty || !isValid : !isValid;
  };
  return (
    <Formik
      initialValues={{ ...defaults, ...(initialVals || location.state) }}
      validationSchema={onSubmit ? getEditSchema : getSchema}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      onSubmit={values => {
        if (onSubmit) onSubmit(values);
        else
          history.replace(history.location.pathname, {
            formValues: values,
            direction: "next"
          });
      }}
    >
      {({
        dirty,
        isValid,
        errors,
        isSubmitting,
        values,
        submitForm,
        setFieldValue
      }) => {
        return (
          <>
            <Form id="formik">
              <FormRow>
                <FormField>
                  <Row>
                    <TextInput name="first" label="first name" />
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    <TextInput name="last" label="last name" />
                  </Row>
                </FormField>
              </FormRow>
              {!onSubmit && (
                <>
                  <FormRow>
                    <FormField>
                      <Row>
                        <NumberInput
                          name="ssn"
                          label="ssn/tin"
                          format="###-##-####"
                          maxLen={9}
                          asString
                        />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <NumberInput
                          name="birthdate"
                          label="date of birth"
                          format="##/##/####"
                          maxLen={8}
                          asString
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                  <FormRow>
                    <FormFieldFull>
                      <Row>
                        <Dropdown
                          name="citizenshipCountry"
                          onSelectCallBack={val => {
                            if (val === "USA")
                              setFieldValue("isPermanentResident", false);
                            setFieldValue("usCitizen", val === "USA");
                          }}
                          label="country of citizenship"
                          hint="Select a country"
                          items={countryValues}
                          xs={12}
                        />
                      </Row>
                    </FormFieldFull>
                  </FormRow>
                  {!values.usCitizen &&
                    investorType === InvestorType.INDIVIDUAL && (
                      <>
                        <FormRow>
                          <FormFieldFull>
                            <Row>
                              <Dropdown
                                name="birthplace"
                                label="place of birth"
                                hint="Select a country"
                                items={countryValues}
                                xs={12}
                              />
                            </Row>
                          </FormFieldFull>
                        </FormRow>
                        <FormRow>
                          <FormFieldFull>
                            <Row>
                              <Checkbox
                                name="isPermanentResident"
                                label="I declare that the investor is a permanent resident."
                              />
                            </Row>
                            <Row>
                              <FormFieldFull>
                                {values.isPermanentResident === false && (
                                  <>
                                    <ErrorAlert>
                                      <div>
                                        <p>
                                          At this time you must be a U.S.
                                          Citizen or Permanent Resident to
                                          apply.
                                        </p>
                                      </div>
                                    </ErrorAlert>
                                  </>
                                )}
                              </FormFieldFull>
                            </Row>
                          </FormFieldFull>
                        </FormRow>
                      </>
                    )}
                </>
              )}
              {onSubmit && (
                <ContinueButton
                  type="button"
                  onClick={submitForm}
                  disabled={Boolean(
                    errors.first || errors.last || isSubmitting
                  )}
                >
                  Update
                </ContinueButton>
              )}
            </Form>
            {!onSubmit && (
              <BottomNav
                onNext={submitForm}
                blockNext={
                  checkInitial(dirty, isValid) ||
                  Object.values(errors).length > 0 ||
                  isSubmitting ||
                  (investorType === InvestorType.INDIVIDUAL &&
                    !values.usCitizen &&
                    (!values.isPermanentResident || !values.birthplace))
                }
                onPrevious={() => {
                  history.replace(history.location.pathname, {
                    formValues: values,
                    direction: "back"
                  });
                }}
              />
            )}
          </>
        );
      }}
    </Formik>
  );
}

export default PersonalInfoForm;
