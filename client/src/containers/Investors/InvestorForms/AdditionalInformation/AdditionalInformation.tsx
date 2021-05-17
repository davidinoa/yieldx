import React from "react";
import { Formik } from "formik";
import clsx from "clsx";
import { PoliticalOfficials } from "@bondhouse/investor";
import { Col, Row } from "react-bootstrap";
import {
  Checkbox,
  Dropdown,
  InputGroup,
  NumberInput,
  RadioGroup,
  TextInput
} from "../elements/elements";
import { Form, SectionTitle } from "./AdditionalInformation.styles";
import {
  accountAcitivity,
  defaults,
  getSchema,
  politicalOfficialSchema,
  primaryOngoingFundingSource,
  scopeOfBusiness,
  withdrawalFrequency
} from "./AdditionalInformation.state";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import {
  Output,
  GroupOutput
} from "../elements/ArrayInputGroup/ArrayInputGroup.styles";
import { ReactComponent as Del } from "../../../../assets/svg/delete-cart-item.svg";
import { AddButton } from "../FinraSecForm/FinraSec.styles";
import { ReactComponent as X } from "../../../../assets/svg/x.svg";

function ForeignBankForm({
  history,
  location,
  organizationName
}: InvestorFormProps & { organizationName: string }) {
  return (
    <Formik
      validationSchema={getSchema()}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      initialValues={{
        ...defaults,
        ...location.state,
        ...(location.state && "additionalAccounts" in location.state
          ? location.state
          : {
              additionalAccounts: {
                ...defaults.additionalAccounts,
                institutionNames: [organizationName]
              }
            })
      }}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
    >
      {({
        values,
        errors,
        isSubmitting,
        submitForm,
        setFieldValue,
        setFieldTouched
      }) => {
        const {
          additionalAccounts,
          politicalOfficial,
          politicallyExposedPersons
        } = values;
        return (
          <>
            <Form id="formik">
              <Row>
                <Col>
                  <RadioGroup
                    name="politicallyExposedPersons.isPoliticallyExposed"
                    label="Are there officers of directors that are current or former politically exposed persons or public officials?"
                    options={[
                      { value: true, label: "Yes" },
                      { value: false, label: "No" }
                    ]}
                  />
                </Col>
              </Row>
              {politicallyExposedPersons.isPoliticallyExposed && (
                <div className="pb-4 separator">
                  <br />
                  <SectionTitle>Politically Exposed Officials</SectionTitle>
                  <br />
                  <Row>
                    <Col>
                      <TextInput
                        name="politicalOfficial.legalName"
                        label="legal name"
                      />
                    </Col>
                    <Col>
                      <TextInput name="politicalOfficial.role" label="role" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextInput
                        name="politicalOfficial.politicalTitle"
                        label="political title"
                      />
                    </Col>
                    <Col>
                      <TextInput
                        name="politicalOfficial.politicalOrganization"
                        label="political organization"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup
                        name="familyMember"
                        inputLabel="add immediate family members"
                        buttonLabel="add"
                        disabled={
                          !(
                            values.familyMember &&
                            values.familyMember.length > 0
                          )
                        }
                        onClick={() => {
                          setFieldValue("politicalOfficial.immediateFamily", [
                            ...values.politicalOfficial.immediateFamily,
                            values.familyMember
                          ]);
                          setFieldValue("familyMember", "");
                        }}
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <GroupOutput>
                        {politicalOfficial.immediateFamily.map(
                          (member: string, i: number) => (
                            <Output key={member}>
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = values.politicalOfficial.immediateFamily
                                    .slice(0, i)
                                    .concat(
                                      values.politicalOfficial.immediateFamily.slice(
                                        i + 1
                                      )
                                    );
                                  setFieldValue(
                                    "politicalOfficial.immediateFamily",
                                    updated
                                  );
                                }}
                              >
                                {member}
                                <X />
                              </button>
                            </Output>
                          )
                        )}
                      </GroupOutput>
                    </Col>
                  </Row>
                  <Row className="mt-4 justify-content-end mb-4">
                    <AddButton
                      type="button"
                      disabled={
                        !values.politicalOfficial ||
                        !politicalOfficialSchema.isValidSync(
                          values.politicalOfficial
                        )
                      }
                      onClick={() => {
                        const {
                          legalName,
                          role,
                          politicalOrganization,
                          politicalTitle,
                          immediateFamily
                        } = politicalOfficial;
                        setFieldValue(
                          "politicalOfficial",
                          {
                            ...defaults.politicalOfficial
                          },
                          false
                        );
                        setFieldTouched("politicalOfficial", false, false);
                        setFieldTouched(
                          "politicallyExposedPersons.politicalOfficials",
                          true,
                          false
                        );
                        setFieldValue(
                          "politicallyExposedPersons.politicalOfficials",
                          [
                            ...(politicallyExposedPersons.politicalOfficials ||
                              []),
                            {
                              legalName,
                              role,
                              politicalOrganization,
                              politicalTitle,
                              immediateFamily
                            }
                          ]
                        );
                      }}
                    >
                      ADD
                    </AddButton>
                  </Row>

                  {values.politicallyExposedPersons.politicalOfficials.length >
                    0 &&
                    values.politicallyExposedPersons.politicalOfficials.map(
                      (cv: PoliticalOfficials, i: number) => {
                        const {
                          legalName,
                          role,
                          politicalOrganization,
                          politicalTitle
                        } = cv;
                        return (
                          <Row
                            key={JSON.stringify({ ...cv, i })}
                            className={clsx("pb-4", {
                              separator:
                                i ===
                                (values.politicallyExposedPersons
                                  .politicalOfficials?.length || 0) -
                                  1
                            })}
                          >
                            <Col xs={2} className="text-center">
                              <button
                                className="icon-button"
                                type="button"
                                onClick={() => {
                                  const politicalOfficials =
                                    values.politicallyExposedPersons
                                      .politicalOfficials || [];
                                  setFieldValue(
                                    "politicallyExposedPersons.politicalOfficials",
                                    politicalOfficials
                                      .slice(0, i)
                                      .concat(politicalOfficials.slice(i + 1))
                                  );
                                }}
                              >
                                <Del />
                              </button>
                            </Col>
                            <Col className="text-display">
                              <span>{`Name: ${legalName} / Role:${role} / Title: ${politicalTitle} / Political Org: ${politicalOrganization}`}</span>
                              <br />
                              <span>{`Immediate Family: ${cv.immediateFamily.map(
                                (fam, num) =>
                                  `${fam}${
                                    num !== cv.immediateFamily.length - 1
                                      ? ","
                                      : ""
                                  }`
                              )}`}</span>
                            </Col>
                          </Row>
                        );
                      }
                    )}
                </div>
              )}
              <br />
              <div className="pb-4 separator">
                <SectionTitle>Account Activity</SectionTitle>
                <br />
                <br />
                <Row>
                  <Col>
                    <Dropdown
                      name="accountActivity.primaryEntityAccountActivity"
                      label="primary account acitivity"
                      hint="Select an activity"
                      items={accountAcitivity}
                    />
                  </Col>
                  <Col>
                    <Dropdown
                      name="accountActivity.expectedWithdrawalFrequency"
                      label="expected withdrawal frequency"
                      hint="Select a frequency"
                      items={withdrawalFrequency}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <NumberInput
                      name="accountActivity.initialDepositAmount"
                      label="Initial Deposit Amount"
                      decimalScale={0}
                    />
                  </Col>
                  <Col>
                    <TextInput
                      name="accountActivity.initialDepositSource"
                      label="Initial Deposit Source"
                    />
                  </Col>
                </Row>
              </div>
              <br />
              <SectionTitle>Additional Information</SectionTitle>
              <br />
              <Row>
                <InputGroup
                  name="institution"
                  inputLabel="all institution names"
                  buttonLabel="add"
                  onClick={() => {
                    setFieldValue(
                      "additionalAccounts.institutionNames",
                      additionalAccounts.institutionNames.concat(
                        values.institution
                      )
                    );
                    setFieldValue("institution", "");
                  }}
                />
              </Row>
              <br />
              <Row>
                <GroupOutput>
                  {additionalAccounts.institutionNames.map(
                    (institution: string, i: number) => (
                      <Output key={institution}>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = additionalAccounts.institutionNames
                              .slice(0, i)
                              .concat(
                                additionalAccounts.institutionNames.slice(i + 1)
                              );
                            setFieldValue(
                              "additionalAccounts.institutionNames",
                              updated
                            );
                          }}
                        >
                          {institution}
                          <X />
                        </button>
                      </Output>
                    )
                  )}
                </GroupOutput>
              </Row>
              <br />
              <Row>
                <Col>
                  <Dropdown
                    name="additionalAccounts.scopeOfBusiness"
                    label="scope of business"
                    hint="Select an scope"
                    items={scopeOfBusiness}
                  />
                </Col>
                <Col>
                  <Dropdown
                    name="additionalAccounts.primaryOngoingFundingSource"
                    label="primary funding source"
                    hint="Select a funding source"
                    items={primaryOngoingFundingSource}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {additionalAccounts.scopeOfBusiness === "OTHER" && (
                    <TextInput
                      name="additionalAccounts.scopeOfBusinessClarification"
                      label="Clarify Scope of Business"
                    />
                  )}
                </Col>
                <Col>
                  {additionalAccounts.primaryOngoingFundingSource ===
                    "OTHER" && (
                    <TextInput
                      name="additionalAccounts.primaryOngoingFundingSourceClarification"
                      label="Clarify funding source"
                    />
                  )}
                </Col>
              </Row>
              <br />
              <Row>
                <Checkbox
                  name="additionalAccounts.confirmEntityDoesNotIssueBearerShares"
                  label="Certify that entity does not issue bearer shares"
                />
              </Row>
              <br />
              Apex Clearing Corporation will not open entity accounts that issue
              bearer shares.
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={
                Object.values(errors).length > 0 ||
                isSubmitting ||
                values.isMaintainedForForeignFinancialInstitution ||
                values.isForeignBank ||
                !values.additionalAccounts.confirmEntityDoesNotIssueBearerShares
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
