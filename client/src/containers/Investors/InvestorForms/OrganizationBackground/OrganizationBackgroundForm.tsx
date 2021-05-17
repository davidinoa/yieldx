import React from "react";
import { Formik } from "formik";
import { Row } from "react-bootstrap";
import { RadioGroup } from "../elements/elements";
import { Form } from "./OrgnizationBackground.styles";
import { ErrorAlert } from "../../CreateInvestor/CreateInvestor.styles";
import { defaults } from "./OrganizationBackground.state";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";

function ForeignBankForm({ history, location }: InvestorFormProps) {
  return (
    <Formik
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      initialValues={{
        ...defaults,
        ...location.state
      }}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
    >
      {({ values, errors, isSubmitting, submitForm }) => {
        return (
          <>
            <Form id="formik">
              <Row className="pb-4 separator">
                <RadioGroup
                  name="isMaintainedForForeignFinancialInstitution"
                  options={[
                    { value: true, label: "Yes" },
                    { value: false, label: "No" }
                  ]}
                  label="Is the organization a foreign financial institution?"
                />
              </Row>
              {values.isMaintainedForForeignFinancialInstitution && (
                <Row>
                  <ErrorAlert>
                    <div>
                      <p>
                        At the moment, we are unable to open accounts for
                        Foreign Financial Institutions. If you have questions,
                        <a
                          href="https://www.yieldx.app/contact-us/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          contact us
                        </a>
                        .
                      </p>
                    </div>
                  </ErrorAlert>
                </Row>
              )}
              <Row className="pb-4">
                <RadioGroup
                  name="isForeignBank"
                  options={[
                    { value: true, label: "Yes" },
                    { value: false, label: "No" }
                  ]}
                  label="Is the organization a foreign bank?"
                />
              </Row>
              {values.isForeignBank && (
                <Row>
                  <ErrorAlert>
                    <div>
                      <p>
                        At the moment, we are unable to open accounts for
                        Foreign Banks. If you have questions,{" "}
                        <a
                          href="https://www.yieldx.app/contact-us/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          contact us
                        </a>
                        .
                      </p>
                    </div>
                  </ErrorAlert>
                </Row>
              )}
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={
                Object.values(errors).length > 0 ||
                isSubmitting ||
                values.isMaintainedForForeignFinancialInstitution ||
                values.isForeignBank
              }
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

export default ForeignBankForm;
