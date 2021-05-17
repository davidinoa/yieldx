import React from "react";
import { Formik } from "formik";
import {
  IssuerDirectCommunication,
  TrustedContact,
  InvestorType
} from "@bondhouse/investor";
import { Row } from "react-bootstrap";
import { RadioGroup, TextInput } from "../elements/elements";
import { defaults, getSchema } from "./TrustedContactForm.state";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import {
  Form,
  FormRow,
  FormFieldFull,
  FormField,
  FormLegalContent
} from "../../CreateInvestor/CreateInvestor.styles";

function TrustedContactForm({
  history,
  location,
  investorType
}: InvestorFormProps) {
  return (
    <Formik
      validationSchema={getSchema}
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
      {({ values, errors, isSubmitting, submitForm }) => (
        <>
          <Form id="formik">
            {investorType === InvestorType.INDIVIDUAL && (
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <FormLegalContent>
                      <p>
                        Under FINRA Rule 4512 Apex Clearing Corporation is
                        required to disclose to you (the customer) that Apex
                        Clearing Corporation or an associated person of Apex
                        Clearing Corporation is authorized to contact the
                        trusted contact person and disclose information about
                        the customer’s account to address possible financial
                        exploitation, to confirm the specifics of the customer’s
                        current contact information, health status, or the
                        identity of any legal guardian, executor, trustee or
                        holder of a power of attorney, or as otherwise permitted
                        by FINRA Rule 2165.
                      </p>
                    </FormLegalContent>
                  </Row>
                  <Row>
                    <RadioGroup
                      name="trustedContactInfo.trustedContact"
                      options={[
                        { value: TrustedContact.INCLUDE, label: "yes" },
                        { value: TrustedContact.EXCLUDE, label: "no" }
                      ]}
                      label="Would you like to add a trusted contact?"
                    />
                  </Row>
                </FormFieldFull>
              </FormRow>
            )}
            {values.trustedContactInfo.trustedContact ===
              TrustedContact.INCLUDE &&
              investorType === InvestorType.INDIVIDUAL && (
                <>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput
                          name="trustedContactInfo.trustedContactPerson.givenName"
                          label="first name"
                        />
                      </Row>
                    </FormField>
                    <FormField>
                      <Row>
                        <TextInput
                          name="trustedContactInfo.trustedContactPerson.familyName"
                          label="last name"
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput
                          name="trustedContactInfo.trustedContactPerson.emailAddress"
                          label="email"
                        />
                      </Row>
                    </FormField>
                  </FormRow>
                </>
              )}
            {investorType === InvestorType.INDIVIDUAL && (
              <div className="bordered-section" />
            )}
            <FormRow>
              <FormFieldFull>
                <Row>
                  <FormLegalContent>
                    <p>
                      Rule 14b-1(c) of the Securities Exchange Act, unless you
                      object, requires us to disclose to an issuer, upon its
                      request, the names, addresses, and securities positions of
                      our customers who are beneficial owners of the
                      issuer&apos;s securities held by us in nominee name. The
                      issuer would be permitted to use your name and other
                      related information for corporation communication only.
                    </p>
                  </FormLegalContent>
                </Row>
                <Row>
                  <RadioGroup
                    name="issuerDirectCommunication"
                    options={[
                      { value: IssuerDirectCommunication.ACCEPT, label: "yes" },
                      { value: IssuerDirectCommunication.OBJECT, label: "no" }
                    ]}
                    label="Would you like to receive issuer communications?"
                  />
                </Row>
              </FormFieldFull>
            </FormRow>
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
      )}
    </Formik>
  );
}

export default TrustedContactForm;
