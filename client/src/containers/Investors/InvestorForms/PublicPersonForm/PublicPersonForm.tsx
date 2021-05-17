import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import { Label, RadioGroup, TextInput } from "../elements/elements";
import {
  GroupOutput,
  InputButton,
  InputGroup,
  Output,
  TextInput as GroupTextInput
} from "../elements/ArrayInputGroup/ArrayInputGroup.styles";
import {
  Form,
  FormField,
  FormFieldFull,
  FormRow
} from "../../CreateInvestor/CreateInvestor.styles";
import { Error } from "../elements/TextInput/TextInput.styles";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import { defaults, getSchema } from "./PublicPersonForm.state";
import { ReactComponent as X } from "../../../../assets/svg/x.svg";

function PublicPersonForm({ history, location }: InvestorFormProps) {
  const [family, setFamily] = useState<string[]>(location.state?.family || []);
  const checkInitial = (dirty: boolean, isValid: boolean, length: number) => {
    return !location.state ? (length < 1 && !dirty) || !isValid : !isValid;
  };
  return (
    <Formik
      initialValues={{ ...defaults, ...location.state }}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      validationSchema={getSchema}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: {
            public: values.public,
            org: values.org,
            relative: values.relative,
            family
          },
          direction: "next"
        });
      }}
    >
      {({
        dirty,
        values,
        handleChange,
        isValid,
        isSubmitting,
        submitForm,
        setFieldValue,
        errors
      }) => (
        <>
          <Form id="formik">
            <FormRow>
              <FormFieldFull>
                <Row>
                  <RadioGroup
                    name="public"
                    label="Is the account holder a current or former Politically Exposed Person or Public Official?"
                    options={[
                      { value: true, label: "Yes" },
                      { value: false, label: "No" }
                    ]}
                  />
                </Row>
              </FormFieldFull>
            </FormRow>
            {values.public && (
              <>
                <div className="bordered-section" />
                <FormRow>
                  <FormField>
                    <Row>
                      <TextInput name="org" label="political organization" />
                    </Row>
                  </FormField>
                </FormRow>
                <FormRow>
                  <FormField>
                    <Row>
                      <Col>
                        <Label className="d-block" htmlFor="relative">
                          family member name
                        </Label>
                        <InputGroup>
                          <GroupTextInput
                            id="relative"
                            name="relative"
                            value={values.relative}
                            onChange={handleChange}
                          />

                          <InputButton
                            disabled={
                              !!errors.relative || values.relative.length < 2
                            }
                            onClick={async () => {
                              const { relative } = values;
                              setFieldValue("relative", "");
                              if (!errors.relative) {
                                setFamily(family.concat(relative));
                                setFieldValue(
                                  "family",
                                  family.concat(relative)
                                );
                              }
                            }}
                          >
                            Add
                          </InputButton>
                        </InputGroup>
                        {errors.relative && (
                          <div style={{ position: "relative" }}>
                            <Error>{errors.relative}</Error>
                          </div>
                        )}
                      </Col>
                    </Row>
                  </FormField>
                </FormRow>
                <FormRow>
                  <FormFieldFull>
                    <Row>
                      <Col>
                        <GroupOutput>
                          {family.map((relative, i) => (
                            <Output key={relative}>
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = family
                                    .slice(0, i)
                                    .concat(family.slice(i + 1));
                                  setFieldValue("family", updated);
                                  setFamily(updated);
                                }}
                              >
                                {relative}
                                <X />
                              </button>
                            </Output>
                          ))}
                        </GroupOutput>
                      </Col>
                    </Row>
                  </FormFieldFull>
                </FormRow>
              </>
            )}
          </Form>
          <BottomNav
            onNext={submitForm}
            blockNext={
              checkInitial(dirty, isValid, family.length) || isSubmitting
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

export default PublicPersonForm;
