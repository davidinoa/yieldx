// @ts-nocheck
import React from "react";
import dayjs from "dayjs";
import { Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import clsx from "clsx";
import { RouteComponentProps } from "react-router-dom";
import {
  Dropdown,
  NumberInput,
  RadioGroup,
  InputGroup,
  TextInput
} from "../elements/elements";
import {
  classificationOptions,
  defaults,
  getSchema,
  ownerOrOfficer
} from "./EntityClassification.state";
import { CloseButton } from "./EntityClassification.styles";
import { AddButton } from "../FinraSecForm/FinraSec.styles";
import { ReactComponent as Del } from "../../../../assets/svg/delete-cart-item.svg";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import {
  countryValues,
  stateValues
} from "../PersonalInfoForm/PersonalInfoForm.state";
import {
  Form,
  FormRow,
  FormFieldFull,
  FormField,
  SectionTitle
} from "../../CreateInvestor/CreateInvestor.styles";
import {
  Output,
  GroupOutput
} from "../elements/ArrayInputGroup/ArrayInputGroup.styles";
import { ReactComponent as X } from "../../../../assets/svg/x.svg";

function EntityClassification({ history, location }: RouteComponentProps) {
  return (
    <Formik
      validationSchema={getSchema()}
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
        setFieldValue,
        setFieldTouched,
        isSubmitting,
        values,
        submitForm
      }) => {
        const {
          beneficialOwner,
          beneficialOwnersAndOfficers,
          officer
        } = values;
        return (
          <>
            <Form id="formik">
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <Dropdown
                      name="beneficialOwnersAndOfficers.businessClassification"
                      label="industrial classification"
                      hint="Select an industrial classification"
                      items={classificationOptions}
                    />
                  </Row>
                </FormFieldFull>
              </FormRow>
              <FormRow>
                <FormFieldFull>
                  <SectionTitle>Beneficial Owner</SectionTitle>
                </FormFieldFull>
              </FormRow>
              <FormRow>
                <FormField>
                  <Row>
                    <TextInput
                      name="beneficialOwner.name.givenName"
                      label="first name"
                    />
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    <TextInput
                      name="beneficialOwner.name.familyName"
                      label="last name"
                    />
                  </Row>
                </FormField>
              </FormRow>
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <RadioGroup
                      label="Is the investor a US citizen?"
                      name="beneficialOwner.isUsCitizen"
                      options={[
                        { label: "yes", value: true },
                        { label: "no", value: false }
                      ]}
                    />
                  </Row>
                </FormFieldFull>
              </FormRow>
              <FormRow>
                <FormField>
                  <Row>
                    <NumberInput
                      name="beneficialOwner.dateOfBirth"
                      label="date of birth"
                      format="##/##/####"
                      maxLen={8}
                      asString
                    />
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    {beneficialOwner.isUsCitizen ? (
                      <NumberInput
                        name="beneficialOwner.socialSecurityNumber"
                        label="ssn/tin"
                        format="###-##-####"
                        maxLen={9}
                        asString
                      />
                    ) : (
                      <TextInput
                        name="beneficialOwner.identificationNumber"
                        label="Identification number"
                      />
                    )}
                  </Row>
                </FormField>
              </FormRow>
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <InputGroup
                      name="street"
                      inputLabel="street address"
                      buttonLabel="add"
                      disabled={!values.street}
                      onClick={() => {
                        setFieldValue(
                          "beneficialOwner.address.streetAddress",
                          beneficialOwner.address.streetAddress.concat(
                            values.street
                          )
                        );
                        setFieldValue("street", "");
                      }}
                    />
                  </Row>
                  <br />
                  <Row>
                    <GroupOutput>
                      {beneficialOwner.address.streetAddress.map(
                        (street: string, i: number) => (
                          <Output key={street}>
                            <button
                              type="button"
                              onClick={() => {
                                const updated = beneficialOwner.address.streetAddress
                                  .slice(0, i)
                                  .concat(
                                    beneficialOwner.address.streetAddress.slice(
                                      i + 1
                                    )
                                  );
                                setFieldValue(
                                  "beneficialOwner.address.streetAddress",
                                  updated
                                );
                              }}
                            >
                              {street}
                              <X />
                            </button>
                          </Output>
                        )
                      )}
                    </GroupOutput>
                  </Row>
                </FormFieldFull>
              </FormRow>
              <FormRow>
                <FormField>
                  <Row>
                    <Dropdown
                      name="beneficialOwner.address.country"
                      label="country"
                      hint="Select a country"
                      items={countryValues}
                    />
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    <TextInput
                      name="beneficialOwner.address.city"
                      label="city"
                    />
                  </Row>
                </FormField>
              </FormRow>
              <FormRow>
                <FormField>
                  <Row>
                    {values.beneficialOwner.address.country === "USA" ? (
                      <Dropdown
                        name="beneficialOwner.address.state"
                        label="state"
                        hint="Select a state"
                        items={stateValues}
                      />
                    ) : (
                      <TextInput
                        name="beneficialOwner.address.state"
                        label="state"
                      />
                    )}
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    <TextInput
                      name="beneficialOwner.address.postalCode"
                      label="zip"
                    />
                  </Row>
                </FormField>
              </FormRow>
              <FormRow>
                <FormFieldFull className="justify-content-end">
                  <AddButton
                    type="button"
                    disabled={
                      !ownerOrOfficer.isValidSync(values.beneficialOwner)
                    }
                    onClick={() => {
                      const {
                        name,
                        dateOfBirth,
                        address,
                        socialSecurityNumber,
                        identificationNumber,
                        isUsCitizen
                      } = beneficialOwner;
                      setFieldValue(
                        "beneficialOwnersAndOfficers.beneficialOwners",
                        [
                          ...(beneficialOwnersAndOfficers.beneficialOwners ||
                            []),
                          {
                            name,
                            dateOfBirth: dayjs(dateOfBirth).format(
                              "YYYY-MM-DD"
                            ),
                            address,
                            ...(isUsCitizen
                              ? {
                                  socialSecurityNumber
                                }
                              : {
                                  identificationNumber
                                })
                          }
                        ]
                      );
                      setFieldValue(
                        "beneficialOwner",
                        {
                          ...defaults.beneficialOwner
                        },
                        false
                      );
                      setFieldTouched("beneficialOwner", false, false);
                      setFieldTouched(
                        "beneficialOwnersAndOfficers.beneficialOwners",
                        true,
                        false
                      );
                    }}
                  >
                    ADD
                  </AddButton>
                </FormFieldFull>
              </FormRow>
              <FormRow>
                <FormFieldFull>
                  {beneficialOwnersAndOfficers.beneficialOwners &&
                    beneficialOwnersAndOfficers.beneficialOwners.length > 0 && (
                      <>
                        {beneficialOwnersAndOfficers.beneficialOwners.map(
                          (
                            { name, socialSecurityNumber, address },
                            i: number
                          ) => (
                            <Row
                              key={JSON.stringify({ name, address, i })}
                              className={clsx("pb-4", {
                                separator:
                                  i ===
                                  (beneficialOwnersAndOfficers.beneficialOwners
                                    ?.length || 0) -
                                    1
                              })}
                            >
                              <Col xs={2} className="text-center">
                                <CloseButton
                                  type="button"
                                  onClick={() => {
                                    const beneficialOwners =
                                      beneficialOwnersAndOfficers.beneficialOwners ||
                                      [];
                                    setFieldValue(
                                      "beneficialOwnersAndOfficers.beneficialOwners",
                                      beneficialOwners
                                        .slice(0, i)
                                        .concat(beneficialOwners.slice(i + 1))
                                    );
                                  }}
                                >
                                  <Del />
                                </CloseButton>
                              </Col>
                              <Col className="text-display">
                                <span>{`${name.givenName} ${name.familyName} / SSN: ${socialSecurityNumber}`}</span>
                                <br />
                                <span>{`${address.streetAddress[0]} - ${address.city}, ${address.state} - ${address.country} - ZIP ${address.postalCode}`}</span>
                              </Col>
                            </Row>
                          )
                        )}
                      </>
                    )}
                </FormFieldFull>
              </FormRow>

              <div className="bordered-section" />
              <FormRow>
                <FormFieldFull>
                  <SectionTitle>Officers</SectionTitle>
                </FormFieldFull>
              </FormRow>
              <FormRow>
                <FormField>
                  <Row>
                    <TextInput
                      name="officer.name.givenName"
                      label="first name"
                    />
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    <TextInput
                      name="officer.name.familyName"
                      label="last name"
                    />
                  </Row>
                </FormField>
              </FormRow>
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <RadioGroup
                      label="Is the investor a US citizen?"
                      name="officer.isUsCitizen"
                      options={[
                        { label: "yes", value: true },
                        { label: "no", value: false }
                      ]}
                    />
                  </Row>
                </FormFieldFull>
              </FormRow>
              <FormRow>
                <FormField>
                  <Row>
                    <NumberInput
                      name="officer.dateOfBirth"
                      label="date of birth"
                      format="##/##/####"
                      maxLen={8}
                      asString
                    />
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    {officer.isUsCitizen ? (
                      <NumberInput
                        name="officer.socialSecurityNumber"
                        label="ssn/tin"
                        format="###-##-####"
                        maxLen={9}
                        asString
                      />
                    ) : (
                      <TextInput
                        name="officer.identificationNumber"
                        label="Identification number"
                      />
                    )}
                  </Row>
                </FormField>
              </FormRow>
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <Col>
                      <InputGroup
                        name="street2"
                        inputLabel="street address"
                        buttonLabel="add"
                        onClick={() => {
                          setFieldValue(
                            "officer.address.streetAddress",
                            officer.address.streetAddress.concat(values.street2)
                          );
                          setFieldValue("street2", "");
                        }}
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <GroupOutput>
                        {officer.address.streetAddress.map(
                          (street2: string, i: number) => (
                            <Output key={street2}>
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = officer.address.streetAddress
                                    .slice(0, i)
                                    .concat(
                                      officer.address.streetAddress.slice(i + 1)
                                    );
                                  setFieldValue(
                                    "officer.address.streetAddress",
                                    updated
                                  );
                                }}
                              >
                                {street2}
                                <X />
                              </button>
                            </Output>
                          )
                        )}
                      </GroupOutput>
                    </Col>
                  </Row>
                </FormFieldFull>
              </FormRow>
              <FormRow>
                <FormField>
                  <Row>
                    <Dropdown
                      name="officer.address.country"
                      label="country"
                      hint="Select a country"
                      items={countryValues}
                    />
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    <TextInput name="officer.address.city" label="city" />
                  </Row>
                </FormField>
              </FormRow>
              <FormRow>
                <FormField>
                  <Row>
                    {values.officer.address.country === "USA" ? (
                      <Dropdown
                        name="officer.address.state"
                        label="state"
                        hint="Select a state"
                        items={stateValues}
                      />
                    ) : (
                      <TextInput name="officer.address.state" label="state" />
                    )}
                  </Row>
                </FormField>
                <FormField>
                  <Row>
                    <TextInput name="officer.address.postalCode" label="zip" />
                  </Row>
                </FormField>
              </FormRow>
              <FormRow>
                <FormFieldFull className="justify-content-end">
                  <AddButton
                    type="button"
                    disabled={!ownerOrOfficer.isValidSync(values.officer)}
                    onClick={() => {
                      const {
                        name,
                        dateOfBirth,
                        isUsCitizen,
                        address,
                        socialSecurityNumber,
                        identificationNumber
                      } = officer;

                      setFieldValue(
                        "officer",
                        {
                          ...defaults.officer
                        },
                        false
                      );
                      setFieldTouched("officer", false, false);
                      setFieldTouched(
                        "beneficialOwnersAndOfficers.officers",
                        true,
                        false
                      );
                      setFieldValue("beneficialOwnersAndOfficers.officers", [
                        ...(beneficialOwnersAndOfficers.officers || []),
                        {
                          name,
                          dateOfBirth: dayjs(dateOfBirth).format("YYYY-MM-DD"),
                          address,
                          ...(isUsCitizen
                            ? {
                                socialSecurityNumber
                              }
                            : {
                                identificationNumber
                              })
                        }
                      ]);
                    }}
                    data-cy="officer-add"
                  >
                    ADD
                  </AddButton>
                </FormFieldFull>
              </FormRow>
              {beneficialOwnersAndOfficers.officers &&
                beneficialOwnersAndOfficers.officers.length > 0 && (
                  <>
                    <FormRow>
                      <FormFieldFull>
                        {beneficialOwnersAndOfficers.officers.map(
                          (
                            { name, socialSecurityNumber, address },
                            i: number
                          ) => (
                            <Row className="pb-4">
                              <Col xs={2} className="text-center">
                                <CloseButton
                                  className="icon-button"
                                  type="button"
                                  onClick={() => {
                                    const officers =
                                      beneficialOwnersAndOfficers.officers ||
                                      [];
                                    setFieldValue(
                                      "beneficialOwnersAndOfficers.officers",
                                      officers
                                        .slice(0, i)
                                        .concat(officers.slice(i + 1))
                                    );
                                  }}
                                >
                                  <Del />
                                </CloseButton>
                              </Col>
                              <Col className="text-display">
                                <span>{`${name.givenName} ${name.familyName} / SSN: ${socialSecurityNumber}`}</span>
                                <br />
                                <span>{`${address.streetAddress[0]} - ${address.city}, ${address.state} - ${address.country} - ZIP ${address.postalCode}`}</span>
                              </Col>
                            </Row>
                          )
                        )}
                      </FormFieldFull>
                    </FormRow>
                  </>
                )}
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={
                values.beneficialOwnersAndOfficers.officers.length === 0 ||
                values.beneficialOwnersAndOfficers.beneficialOwners.length ===
                  0 ||
                values.beneficialOwnersAndOfficers.businessClassification ===
                  undefined ||
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

export default EntityClassification;
