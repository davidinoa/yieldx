// @ts-nocheck
import React from "react";
import { Formik } from "formik";
import { Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { RadioGroup } from "../elements/elements";
import {
  defaults,
  exemptionOptions,
  getSchema
} from "./ExemptVerification.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import {
  Form,
  FormRow,
  FormFieldFull,
  SectionTitle
} from "../../CreateInvestor/CreateInvestor.styles";

function ExemptForm({ history, location }: RouteComponentProps) {
  return (
    <Formik
      validationSchema={getSchema}
      initialValues={{ ...defaults, ...location.state }}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
    >
      {({ isSubmitting, errors, values, submitForm }) => {
        const { exemptLegalCustomer } = values;
        return (
          <>
            <Form id="formik">
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <RadioGroup
                      name="exemptLegalCustomer.isExemptLegalCustomer"
                      options={[
                        { value: true, label: "yes" },
                        { value: false, label: "no" }
                      ]}
                      label="Is the account maintained for legal entity customers who are exempt from identifying and verifying beneficial owners as defined under 31 cfr 1010.230 (e) (2-3)?"
                    />
                  </Row>
                </FormFieldFull>
              </FormRow>

              {exemptLegalCustomer.isExemptLegalCustomer && (
                <>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormFieldFull>
                      <SectionTitle>Exempt Legal Customer</SectionTitle>
                    </FormFieldFull>
                  </FormRow>
                  <FormRow>
                    <FormFieldFull>
                      <Row>
                        <RadioGroup
                          className="d-flex flex-column radio-group-col long-list"
                          name="exemptLegalCustomer.exemption"
                          options={exemptionOptions}
                        />
                      </Row>
                    </FormFieldFull>
                  </FormRow>
                </>
              )}
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={Object.values(errors).length > 0 || isSubmitting}
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

export default ExemptForm;
