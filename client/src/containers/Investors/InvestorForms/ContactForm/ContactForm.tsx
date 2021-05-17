import React from "react";
import { Row } from "react-bootstrap";
import { Formik } from "formik";
import { InvestorType } from "@bondhouse/investor";
import {
  ContactFormState,
  defaults,
  phoneTypes,
  getSchema
} from "./ContactForm.state";
import {
  Form,
  FormRow,
  FormField
} from "../../CreateInvestor/CreateInvestor.styles";
import { Dropdown, NumberInput, TextInput } from "../elements/elements";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import { ContinueButton } from "../../../Portfolios/PortfolioDisplay/Modals/Modals.styles";
import { stateValues } from "../PersonalInfoForm/PersonalInfoForm.state";

type EditForm = {
  onSubmit?: (vals: ContactFormState) => void;
  initialVals?: ContactFormState;
};

function ContactForm({
  onSubmit,
  initialVals,
  history,
  location,
  investorType
}: InvestorFormProps & EditForm) {
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !(location.state || initialVals) ? !dirty || !isValid : !isValid;
  };
  return (
    <Formik
      validationSchema={getSchema(investorType)}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      initialValues={{
        ...defaults,
        investorType,
        ...(initialVals || location.state)
      }}
      onSubmit={values => {
        if (onSubmit) onSubmit(values);
        else
          history.replace(history.location.pathname, {
            formValues: values,
            direction: "next"
          });
      }}
    >
      {({ dirty, isValid, errors, isSubmitting, values, submitForm }) => {
        return (
          <>
            <Form id="formik">
              {investorType === InvestorType.INDIVIDUAL ? (
                <>
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput name="email" label="email" />
                      </Row>
                    </FormField>
                  </FormRow>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput name="address" label="street address" />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <TextInput name="city" label="city" />
                      </Row>
                    </FormField>
                  </FormRow>
                  <FormRow>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="state"
                          label="state"
                          hint="Select a state"
                          items={stateValues}
                        />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <TextInput name="zip" label="zip" />
                      </Row>
                    </FormField>
                  </FormRow>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="phoneType"
                          label="phone type"
                          hint="Select a phone type"
                          items={phoneTypes}
                        />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <NumberInput
                          name="phone"
                          label="phone number"
                          format="###-###-#####"
                          maxLen={10}
                          asString
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                </>
              ) : (
                <>
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput name="email" label="email" />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <NumberInput
                          name="phone"
                          label="phone number"
                          format="###-###-#####"
                          maxLen={10}
                          asString
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput name="address" label="street address 1" />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <TextInput name="address2" label="street address 2" />
                      </Row>
                    </FormField>
                  </FormRow>
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput name="city" label="city" />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <Dropdown
                          name="state"
                          label="state"
                          hint="Select a state"
                          items={stateValues}
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput name="zip" label="zip" />
                      </Row>
                    </FormField>
                  </FormRow>
                </>
              )}
              {onSubmit && (
                <ContinueButton
                  type="submit"
                  form="formik"
                  disabled={isSubmitting || Object.entries(errors).length > 0}
                >
                  Update
                </ContinueButton>
              )}
            </Form>
            {!onSubmit && (
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
            )}
          </>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
