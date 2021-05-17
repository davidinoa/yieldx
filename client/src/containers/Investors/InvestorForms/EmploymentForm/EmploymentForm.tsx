import React from "react";
import { Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import { EmploymentStatus } from "@bondhouse/investor";
import {
  Form,
  FormRow,
  FormFieldFull,
  FormField
} from "../../CreateInvestor/CreateInvestor.styles";
import { TextInput } from "../elements/elements";
import RadioButton from "../elements/RadioGroup/RadioGroup.styles";
import { defaults, getSchema } from "./EmploymentForm.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";

function EmploymentForm({ history, location }: InvestorFormProps) {
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !location.state ? !dirty || !isValid : !isValid;
  }
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
      {({
        values,
        setFieldValue,
        submitForm,
        isSubmitting,
        dirty,
        isValid
      }) => {
        return (
          <>
            <Form id="formik">
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <Col className="d-flex flex-column">
                      <RadioButton
                        label={EmploymentStatus.UNEMPLOYED}
                        id={EmploymentStatus.UNEMPLOYED}
                        name="employmentStatus"
                        checked={
                          values.employmentStatus ===
                          EmploymentStatus.UNEMPLOYED
                        }
                        onChange={() =>
                          setFieldValue(
                            "employmentStatus",
                            EmploymentStatus.UNEMPLOYED
                          )
                        }
                      />
                      <RadioButton
                        className="mt-3"
                        id={EmploymentStatus.RETIRED}
                        label={EmploymentStatus.RETIRED}
                        name="employmentStatus"
                        checked={
                          values.employmentStatus === EmploymentStatus.RETIRED
                        }
                        onChange={() =>
                          setFieldValue(
                            "employmentStatus",
                            EmploymentStatus.RETIRED
                          )
                        }
                      />
                    </Col>
                    <Col className="d-flex flex-column">
                      <RadioButton
                        label={EmploymentStatus.STUDENT}
                        id={EmploymentStatus.STUDENT}
                        name="employmentStatus"
                        checked={
                          values.employmentStatus === EmploymentStatus.STUDENT
                        }
                        onChange={() =>
                          setFieldValue(
                            "employmentStatus",
                            EmploymentStatus.STUDENT
                          )
                        }
                      />
                      <RadioButton
                        className="mt-3"
                        id={EmploymentStatus.EMPLOYED}
                        name="control"
                        label={EmploymentStatus.EMPLOYED}
                        checked={
                          values.employmentStatus === EmploymentStatus.EMPLOYED
                        }
                        onChange={() =>
                          setFieldValue(
                            "employmentStatus",
                            EmploymentStatus.EMPLOYED
                          )
                        }
                      />
                    </Col>
                  </Row>
                </FormFieldFull>
              </FormRow>
              {values.employmentStatus === EmploymentStatus.EMPLOYED && (
                <>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput
                          name="employer"
                          label="legal company name"
                          className="mt-3"
                        />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <TextInput
                          name="positionEmployed"
                          label="job position"
                          className="mt-3"
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                </>
              )}
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={
                checkInitial(dirty, isValid) ||
                isSubmitting}
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

export default EmploymentForm;
