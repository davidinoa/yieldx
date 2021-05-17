import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import { ReactComponent as DollarSign } from "../../../../assets/svg/dollar.svg";
import FormikNumberInput from "../../../../elements/FormikNumberInput/FormikNumberInput";
import {
  ContinueButton,
  InvestmentModalWrapper,
  MinimumLabel
} from "../../../../components/ModalBase/ModalBase.styles";
import YieldXPortfolio from "../../../../models/YieldXPortfolio";
import { formatNumber } from "../../../../util/formatNumber";
import {
  calculateMinimumInvestmentToUseOptimizer,
  calculateMinimumInvestmentToBuyAll
} from "../../PortfolioBuilder/util/minimumInvestment";

type Props = {
  show: boolean;
  onHide: () => void;
  portfolio: YieldXPortfolio;
  onSubmitInvestment: (values: { amount: number }) => void;
};

export default function InvestmentModal({
  show,
  onHide,
  portfolio,
  onSubmitInvestment
}: Props) {
  const minimumToBuyAll = calculateMinimumInvestmentToBuyAll(portfolio);
  const minimumToUseOptimizer = calculateMinimumInvestmentToUseOptimizer(
    portfolio
  );
  return (
    <ModalBase onHide={onHide} show={show}>
      <InvestmentModalWrapper>
        <h1>Investment amount</h1>
        <MinimumLabel>
          <span>Min. to buy all:</span>
          <span>
            {formatNumber(minimumToBuyAll, { prefix: "$", decimalPlaces: 2 })}
          </span>
        </MinimumLabel>
        <MinimumLabel>
          <span>Min. for optimization:</span>
          <span>
            {formatNumber(minimumToUseOptimizer, {
              prefix: "$",
              decimalPlaces: 2
            })}
          </span>
        </MinimumLabel>
        <Formik
          validationSchema={Yup.object().shape({
            amount: Yup.number()
              .positive("Must be positive")
              .min(
                Math.round(
                  Math.min(minimumToBuyAll, minimumToUseOptimizer) * 100
                ) / 100,
                "Must meet minimum"
              )
              .required("Required")
          })}
          initialValues={{
            amount: 0
          }}
          onSubmit={onSubmitInvestment}
        >
          {({ touched, errors }) => {
            const validated = Boolean(touched.amount && !errors.amount);
            return (
              <Form id="formik">
                <FormikNumberInput
                  name="amount"
                  startIcon={<DollarSign />}
                  className={clsx({ validated })}
                  label="Enter amount"
                />

                <ContinueButton disabled={!validated}>Invest</ContinueButton>
              </Form>
            );
          }}
        </Formik>
      </InvestmentModalWrapper>
    </ModalBase>
  );
}
