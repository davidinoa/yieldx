import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import {
  ContinueButton,
  InvestmentModalWrapper,
  MinimumLabel
} from "../../../../components/ModalBase/ModalBase.styles";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import Decimal from "../../../../util/Decimal";
import FormikNumberInput from "../../../../elements/FormikNumberInput/FormikNumberInput";
import { ReactComponent as DollarSign } from "../../../../assets/svg/dollar.svg";

interface Props {
  onHide: () => void;
  show: boolean;
  available: number;
  onWithdraw: (amount: number) => void;
}

const sigma = 1e-6;

function WithdrawModal({ onHide, show, available, onWithdraw }: Props) {
  return (
    <ModalBase onHide={onHide} show={show}>
      <InvestmentModalWrapper>
        <h1>Withdraw amount</h1>
        <MinimumLabel>
          <span>maximum:</span>
          <span>${Decimal.format(available)}</span>
        </MinimumLabel>
        <Formik
          validationSchema={Yup.object().shape({
            amount: Yup.number()
              .required("Required")
              .min(0.01, "Must be greater than $0")
              .max(available + sigma, "Not enough $ available")
          })}
          initialValues={{
            amount: 0
          }}
          onSubmit={values => onWithdraw(values.amount)}
        >
          {({ touched, isSubmitting, errors }) => {
            const isDisabled = errors.amount && touched.amount;
            return (
              <Form id="formik">
                <FormikNumberInput
                  name="amount"
                  startIcon={<DollarSign />}
                  className={clsx("mb-2", {
                    validated: Boolean(touched.amount && !errors.amount)
                  })}
                  label="Enter amount"
                />
                <ContinueButton
                  type="submit"
                  className="full-width"
                  disabled={isDisabled || isSubmitting}
                >
                  Withdraw
                </ContinueButton>
              </Form>
            );
          }}
        </Formik>
      </InvestmentModalWrapper>
    </ModalBase>
  );
}

export default WithdrawModal;
