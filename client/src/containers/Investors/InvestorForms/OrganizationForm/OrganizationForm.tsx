/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import React from "react";
import { Formik, FormikValues } from "formik";
import { RouteComponentProps } from "react-router-dom";
import { Row } from "react-bootstrap";
import {
  Form,
  FormField,
  FormFieldFull,
  FormRow
} from "../../CreateInvestor/CreateInvestor.styles";
import {
  catAccountHolderTypes,
  defaults,
  entityTypes,
  schema
} from "./OrganizationForm.state";
import {
  Checkbox,
  Dropdown,
  TextInput,
  NumberInput
} from "../elements/elements";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";

function OrganizationForm({ history, location }: RouteComponentProps) {
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !location.state ? !dirty || !isValid : !isValid;
  };
  function getInitialTouched(locationState: FormikValues = {}) {
    return Object.keys(locationState).reduce(
      (touchedFields, fieldName) => ({ ...touchedFields, [fieldName]: true }),
      {}
    );
  }

  return (
    <Formik
      initialTouched={getInitialTouched(location.state as any)}
      validationSchema={schema}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      initialValues={{ ...defaults, ...location.state }}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
    >
      {({ dirty, isValid, values, isSubmitting, submitForm }) => (
        <>
          <Form id="formik">
            <FormRow>
              <FormField>
                <Row>
                  <TextInput name="name" label="organization name" />
                </Row>
              </FormField>
              <FormField>
                <Row>
                  <NumberInput
                    name="taxId"
                    label="EIN/TIN"
                    format="###-##-####"
                    maxLen={9}
                    asString
                  />
                </Row>
              </FormField>
            </FormRow>
            <FormRow>
              <FormFieldFull>
                <Row>
                  <Checkbox
                    name="us"
                    label="I declare that the company is located in the United States"
                  />
                </Row>
              </FormFieldFull>
            </FormRow>
            <FormRow>
              <FormField>
                <Row>
                  <Dropdown
                    name="entity"
                    label="entity type"
                    hint="Select an entity type"
                    items={entityTypes}
                  />
                </Row>
              </FormField>
              <FormField>
                <Row>
                  <Dropdown
                    name="catAccountHolderType"
                    label="Account holder type"
                    hint="Select an account holder type"
                    items={catAccountHolderTypes}
                  />
                </Row>
              </FormField>
            </FormRow>
          </Form>
          <BottomNav
            onNext={submitForm}
            blockNext={
              checkInitial(dirty, isValid) || isSubmitting || !values.us
            }
            onPrevious={() => {
              history.replace(history.location.pathname, {
                formValues: values,
                direction: "back"
              });
            }}
          />
        </>
      )}
    </Formik>
  );
}

export default OrganizationForm;
