/* eslint-disable react/no-this-in-sfc */

import React, { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { Row } from "react-bootstrap";
import {
  Output,
  GroupOutput,
  InputGroup,
  InputButton,
  TextInput as GroupTextInput
} from "../elements/ArrayInputGroup/ArrayInputGroup.styles";
import {
  Form,
  FormRow,
  FormFieldFull
} from "../../CreateInvestor/CreateInvestor.styles";

import { Label, RadioGroup } from "../elements/elements";
import { InvestorFormProps } from "../../CreateInvestor/CreateInvestor.state";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";
import { ReactComponent as X } from "../../../../assets/svg/x.svg";

export interface PublicTradeState {
  control: boolean;
  ticker: string;
  tickers: string[];
}

function PublicTradeForm({ history, location }: InvestorFormProps) {
  const [tickers, setTickers] = useState<string[]>(
    location.state?.tickers || []
  );
  const defaults = { control: true, ticker: "" };
  const checkInitial = (dirty: boolean, isValid: boolean, length: number) => {
    return !location.state ? (length < 1 && !dirty) || !isValid : !isValid;
  };
  return (
    <Formik
      initialValues={{ ...defaults, tickers, ...location.state }}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: { ...values, tickers },
          direction: "next"
        });
      }}
      validationSchema={Yup.object().shape({
        tickers: Yup.array().when("control", {
          is: val => val,
          then: Yup.array()
            .min(1, "At least one ticker is required")
            .of(
              Yup.string()
                .trim()
                .min(1)
                .matches(
                  /^[a-zA-Z0-9\s]*$/,
                  "Only letter and numbers are allowed"
                )
            )
        })
      })}
    >
      {({
        values,
        handleChange,
        dirty,
        isValid,
        submitForm,
        isSubmitting,
        setFieldValue
      }) => {
        return (
          <>
            <Form id="formik">
              <FormRow>
                <FormFieldFull>
                  <Row>
                    <RadioGroup
                      name="control"
                      label="Is the account holder a control person of a publicly traded company"
                      options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" }
                      ]}
                    />
                  </Row>
                </FormFieldFull>
              </FormRow>
              {values.control && (
                <>
                  <div className="bordered-section" />
                  <FormRow>
                    <FormFieldFull>
                      <Label className="d-block" htmlFor="ticker">
                        stock ticker
                      </Label>
                      <InputGroup>
                        <GroupTextInput
                          id="ticker"
                          name="ticker"
                          value={values.ticker}
                          onChange={handleChange}
                        />
                        <InputButton
                          disabled={values.ticker === ""}
                          onClick={async () => {
                            const { ticker } = values;
                            setTickers(tickers.concat(ticker));
                            await setFieldValue(
                              "tickers",
                              tickers.concat(ticker)
                            );
                            setFieldValue("ticker", "");
                          }}
                        >
                          Add
                        </InputButton>
                      </InputGroup>
                    </FormFieldFull>
                  </FormRow>
                  <FormRow>
                    <FormFieldFull>
                      <Row>
                        <GroupOutput>
                          {tickers.map((ticker, i) => (
                            <Output key={ticker}>
                              <button
                                type="button"
                                onClick={() => {
                                  const updatedTickers = tickers
                                    .slice(0, i)
                                    .concat(tickers.slice(i + 1));
                                  setTickers(updatedTickers);
                                  setFieldValue("tickers", updatedTickers);
                                }}
                              >
                                {ticker}
                                <X />
                              </button>
                            </Output>
                          ))}
                        </GroupOutput>
                      </Row>
                    </FormFieldFull>
                  </FormRow>
                </>
              )}
            </Form>
            <BottomNav
              onNext={submitForm}
              blockNext={
                checkInitial(dirty, isValid, tickers.length) || isSubmitting
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

export default PublicTradeForm;
