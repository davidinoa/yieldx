/* eslint-disable react/no-this-in-sfc */

import React from "react";

import { Formik } from "formik";
import { Row, Col } from "react-bootstrap";
import { getSchema } from "./W9UploadForm.state";
import {
  Form,
  FormRow,
  FormFieldFull
} from "../../CreateInvestor/CreateInvestor.styles";
import { DownloadLink } from "./W9UploadForm.styles";
import { RadioGroup } from "../elements/elements";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import { ReactComponent as DownloadIcon } from "../../../../assets/svg/download.svg";
import FormUpload from "../elements/FormUpload/FormUpload";

export interface PublicTradeState {
  control: boolean;
  ticker: string;
  tickers: string[];
}

function W9UploadForm({ history, location }: InvestorFormProps) {
  const defaults = { disregardedEntity: true };
  const checkInitial = (dirty: boolean, isValid: boolean) => {
    return !location.state ? !dirty || !isValid : !isValid;
  }
  return (
    <Formik
      initialValues={{ ...defaults, ...location.state }}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: { ...values },
          direction: "next"
        });
      }}
      validationSchema={getSchema()}
    >
      {({ values, isValid, isSubmitting, dirty, submitForm }) => {
        return (
          <>
            <Form id="formik">
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <RadioGroup
                      name="disregardedEntity"
                      label="Is the account holder a disregarded entity for tax purposes?"
                      options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" }
                      ]}
                    />
                  </Row>
                </FormFieldFull>
              </FormRow>
              {values.disregardedEntity && (
                <>
                  <Row>
                    <Col>
                      <p>
                        Please use the link below to download the w9 form. When
                        complete, use the the upload tool to upload your
                        completed w9.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormUpload
                        name="w9FormUpload"
                        label="upload completed w9 form"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <DownloadLink>
                        <DownloadIcon />
                        <a
                          href="https://www.irs.gov/pub/irs-pdf/fw9.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download w9 form
                        </a>
                      </DownloadLink>
                    </Col>
                  </Row>
                </>
              )}
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={
                checkInitial(dirty, isValid) ||
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

export default W9UploadForm;
