import React from "react";
import { Formik } from "formik";
import { Row, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { TextInput, NumberInput } from "../elements/elements";
import { defaults, getSchema } from "./W9Form.state";
import { SectionTitle } from "./W9Form.styles";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import {
  Form,
  FormRow,
  FormFieldFull,
  FormField,
  FormLegalContent
} from "../../CreateInvestor/CreateInvestor.styles";

function W9Form() {
  const location = useLocation<{}>();
  const history = useHistory();
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !location.state ? !dirty || !isValid : !isValid;
  };
  return (
    <Formik
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      validationSchema={getSchema()}
      initialValues={{ ...defaults, ...location.state }}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
    >
      {({ values, isSubmitting, submitForm, isValid, dirty }) => (
        <>
          <Form id="formik">
            <FormRow>
              <FormFieldFull>
                <Row>
                  <Col>
                    <p>Does the account holder have w9 exemptions?</p>
                  </Col>
                </Row>
              </FormFieldFull>
              <FormField>
                <Row>
                  <TextInput
                    name="exemptPayeeCode"
                    label="payee code"
                    optional
                    optionalLabel="If you have these codes please enter."
                  />
                </Row>
              </FormField>
              <FormField>
                <Row>
                  <TextInput
                    name="exemptionFromFatca"
                    label="fatca reporting code"
                    optional
                    optionalLabel="If you have these codes please enter."
                  />
                </Row>
              </FormField>
              <FormFieldFull>
                <Row>
                  <FormLegalContent>
                    <SectionTitle>Certification</SectionTitle>
                    <br />
                    <br />
                    <p>
                      Under penalties of perjury, I certify that: (1) The number
                      shown on this form is my correct taxpayer identification
                      number (or I am waiting for a number to be issued to me),
                      and (2) I am not subject to backup withholding because:
                      (a) I am exempt from backup withholding, or (b) I have not
                      been notified by the Internal Revenue Service (IRS) that I
                      am subject to backup withholding as a result of a failure
                      to report all interest or dividends, or (c) the IRS has
                      notified me that I am no longer subject to backup
                      withholding, and (3) I am a U.S. citizen or other U.S.
                      person (defined below), and (4) the FATCA code(s) entered
                      on this form (if any) indicating that I am exempt from
                      FATCA reporting is correct.
                    </p>
                    <p>
                      Definition of a U.S. person. For federal tax return
                      purposes, you are considered a U.S. person if you are: An
                      individual who is a U.S. citizen or U.S. resident alien, A
                      partnership, corporation, company, or association created
                      or organized in the United States or under the laws of the
                      United States, an estate (other than a foreign estate), or
                      a domestic trust (as defined in Regulations section
                      301.7701-7).
                    </p>
                    <p>
                      The Internal Revenue Service does not require your consent
                      to any provisions of this document other than the
                      certifications required to avoid backup withholding.
                    </p>
                  </FormLegalContent>
                </Row>
              </FormFieldFull>
              <FormField>
                <Row>
                  <TextInput
                    name="digitalSignature"
                    label="Digital signature"
                  />
                </Row>
              </FormField>
              <FormField>
                <Row>
                  <NumberInput
                    name="digitalSignatureDate"
                    label="Date"
                    format="##/##/##"
                    maxLen={6}
                    asString
                  />
                </Row>
              </FormField>
            </FormRow>
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
      )}
    </Formik>
  );
}

export default W9Form;
