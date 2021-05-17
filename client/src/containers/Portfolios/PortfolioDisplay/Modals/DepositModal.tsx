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
import FormikNumberInput from "../../../../elements/FormikNumberInput/FormikNumberInput";
import { ReactComponent as DollarSign } from "../../../../assets/svg/dollar.svg";
import Decimal from "../../../../util/Decimal";

interface Props {
  onHide: () => void;
  show: boolean;
  limit?: number;
  onDeposit: (amount: number) => void;
}

function DepositModal({ onHide, show, onDeposit, limit }: Props) {
  return (
    <ModalBase onHide={onHide} show={show}>
      <InvestmentModalWrapper>
        <h1>Deposit amount</h1>
        {limit && (
          <MinimumLabel>
            <span>maximum:</span>
            <span>${Decimal.format(limit)}</span>
          </MinimumLabel>
        )}
        <Formik
          validationSchema={Yup.object().shape({
            amount: limit
              ? Yup.number()
                  .max(limit, "Not enough $ available")
                  .min(0.01, "Must be greater than $0")
                  .required("Required")
              : Yup.number()
                  .min(0.01, "Must be greater than $0")
                  .required("Required")
          })}
          initialValues={{
            amount: 0
          }}
          onSubmit={values => onDeposit(values.amount)}
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
                  Deposit
                </ContinueButton>
              </Form>
            );
          }}
        </Formik>
      </InvestmentModalWrapper>
    </ModalBase>
  );
}

export default DepositModal;
