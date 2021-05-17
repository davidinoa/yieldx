import React from "react";
import { Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import { InvestorType } from "@bondhouse/investor";
import clsx from "clsx";
import { ReactComponent as Del } from "../../../../assets/svg/delete-cart-item.svg";
import { Dropdown, RadioGroup, TextInput } from "../elements/elements";
import { AddButton, InterestedPartyDisplay } from "./FinraSec.styles";
import {
  Form,
  SectionTitle,
  FormRow,
  FormFieldFull,
  FormField,
  FormLegalContent
} from "../../CreateInvestor/CreateInvestor.styles";

import FormUpload from "../elements/FormUpload/FormUpload";
import { defaults, getSchema, interestedParty } from "./FinraSec.state";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import { stateValues } from "../PersonalInfoForm/PersonalInfoForm.state";

function FinraSecForm({
  history,
  location,
  investorType
}: InvestorFormProps & { investorType: InvestorType }) {
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !location.state ? !dirty || !isValid : !isValid;
  };
  return (
    <Formik
      validationSchema={getSchema(investorType)}
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
      {({
        values,
        setFieldValue,
        errors,
        dirty,
        isValid,
        setFieldTouched,
        isSubmitting,
        submitForm
      }) => {
        return (
          <>
            <Form id="formik">
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <RadioGroup
                      name="isAffiliatedExchangeOrFINRA"
                      options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" }
                      ]}
                      label="Does the account holder have relations with professionals from a Stock Exchange or FINRA?"
                    />
                  </Row>
                </FormFieldFull>
              </FormRow>
              {values.isAffiliatedExchangeOrFINRA && (
                <>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormField>
                      <Row>
                        <TextInput name="firmName" label="legal firm name" />
                      </Row>
                    </FormField>
                    <FormFieldFull>
                      <Row>
                        <Col>
                          {investorType === InvestorType.INDIVIDUAL && (
                            <>
                              <Row>
                                <FormLegalContent>
                                  <p>
                                    Customer has attached the written consent of
                                    such member firm for my opening of the
                                    brokerage account with Apex pursuant to
                                    FINRA incorporated NYSE Rule 3210(407) or
                                    such rule as may replace it relating to
                                    brokerage accounts of employees of members,
                                    member organizations or exchanges. I
                                    represent and warrant this is a true and
                                    accurate copy of the written consent as
                                    executed such member firm and hereby agree
                                    to indemnify and hold harmless Apex from any
                                    deficiencies in the consent. I understand
                                    and agree that, pursuant to Rule 3210(407)
                                    or its replacement rule, Apex may provide
                                    duplicate copies of account statements and
                                    other documents to the member firm at that
                                    firm’s request, from time to time.
                                  </p>
                                </FormLegalContent>
                              </Row>
                              <Row>
                                <FormUpload
                                  name="fileList"
                                  label="upload approval form"
                                />
                              </Row>
                            </>
                          )}
                        </Col>
                      </Row>
                    </FormFieldFull>
                  </FormRow>
                  {investorType === InvestorType.INDIVIDUAL && (
                    <>
                      <div className="bordered-section" />
                      <FormRow>
                        <FormFieldFull>
                          <SectionTitle className="mt-4">
                            Add interested parties
                            <br />
                            <small>(If employer requested)</small>
                          </SectionTitle>
                        </FormFieldFull>
                      </FormRow>
                      <FormRow>
                        <FormField>
                          <Row>
                            <TextInput
                              name="interestedParty.name.companyName"
                              label="company name"
                            />
                          </Row>
                        </FormField>
                        <FormField>
                          <Row>
                            <TextInput
                              name="interestedParty.mailingAddress.streetAddress[0]"
                              label="street address"
                            />
                          </Row>
                        </FormField>
                      </FormRow>
                      <FormRow>
                        <FormField>
                          <Row>
                            <TextInput
                              name="interestedParty.mailingAddress.city"
                              label="city"
                            />
                          </Row>
                        </FormField>
                        <FormField>
                          <Row>
                            <Dropdown
                              name="interestedParty.mailingAddress.state"
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
                            <TextInput
                              name="interestedParty.mailingAddress.postalCode"
                              label="zip code"
                            />
                          </Row>
                        </FormField>
                      </FormRow>
                      <FormRow>
                        <FormFieldFull>
                          <Row className="pb-4 mt-3 justify-content-end">
                            <Col>
                              <AddButton
                                type="button"
                                disabled={
                                  !interestedParty.isValidSync(
                                    values.interestedParty
                                  )
                                }
                                onClick={() => {
                                  setFieldValue("interestedParties", [
                                    ...values.interestedParties,
                                    { ...values.interestedParty }
                                  ]);
                                  setFieldValue("interestedParty", {
                                    ...defaults.interestedParty
                                  });
                                  setFieldTouched("interestedParty", false);
                                }}
                              >
                                ADD
                              </AddButton>
                            </Col>
                          </Row>
                        </FormFieldFull>
                      </FormRow>
                      {values.interestedParties.length > 0 && (
                        <>
                          <FormRow>
                            <FormFieldFull>
                              {values.interestedParties.map(
                                (
                                  {
                                    name,
                                    mailingAddress
                                  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                  { name: any; mailingAddress: any },
                                  i: number
                                ) => (
                                  <InterestedPartyDisplay
                                    key={
                                      mailingAddress.streetAddress[0] +
                                      name.companyName
                                    }
                                    className={clsx({
                                      "first-party": i === 0,
                                      "last-party":
                                        i ===
                                        values.interestedParties.length - 1
                                    })}
                                  >
                                    <Col
                                      xs={8}
                                      className="d-flex flex-column align-items-start justify-content-center text-data"
                                    >
                                      <span>{name.companyName}</span>
                                      <span>company name</span>
                                    </Col>
                                    <Col
                                      xs={14}
                                      className="d-flex flex-column align-items-start justify-content-center text-data ml-3"
                                    >
                                      <span>{`${mailingAddress.streetAddress[0]} ${mailingAddress.city}, ${mailingAddress.state} ${mailingAddress.postalCode}`}</span>
                                      <span>address</span>
                                    </Col>
                                    <Col className="d-flex flex-column align-items-center justify-content-center">
                                      <button
                                        className="icon-button"
                                        type="button"
                                        onClick={() => {
                                          setFieldValue(
                                            "interestedParties",
                                            values.interestedParties
                                              .slice(0, i)
                                              .concat(
                                                values.interestedParties.slice(
                                                  i + 1
                                                )
                                              )
                                          );
                                        }}
                                      >
                                        <Del />
                                      </button>
                                    </Col>
                                  </InterestedPartyDisplay>
                                )
                              )}
                            </FormFieldFull>
                          </FormRow>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={
                checkInitial(dirty, isValid) ||
                !(
                  (Object.values(errors).length === 1 &&
                    errors.interestedParty) ||
                  Object.values(errors).length === 0
                ) ||
                isSubmitting
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

export default FinraSecForm;
