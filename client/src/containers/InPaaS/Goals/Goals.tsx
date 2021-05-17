import React from "react";
import { Formik } from "formik";
import { Proposal } from "@bondhouse/income-portfolios";
import { InPaaSFormState } from "recoil-state/inPaaS";
import AppBottomNav from "elements/AppBottomNav/AppBottomNav";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import { convertProposalToInpaasGoals } from "util/convertProposalToInpaasGoals";
import { FormContainer } from "./GoalsForm/GoalsForm.styles";
import GoalsForm from "./GoalsForm/GoalsForm";
import { InPaaSGoalsContainer } from "./Goals.styles";
import useGoals from "./useGoals";
import { goalsValidationSchema } from "./goalsValidationSchema";

interface Props {
  original?: Proposal;
  originalValue?: number;
}

const formDefaults: InPaaSFormState = {
  investmentAmount: undefined,
  goal: "targetYield",
  targetIncome: 0,
  targetYield: 0,
  targetRisk: 0,
  minimumWeight: 5,
  maximumWeight: 30
};

function Goals({ originalValue, original }: Props) {
  const {
    isSubmitting,
    submit,
    inpaasFormData,
    minYield,
    maxYield,
    history,
    maxRisk,
    minRisk
  } = useGoals(originalValue);
  const shouldValidateOnMount = !!inpaasFormData || !!original;
  const originalPortData = original?.proposalRequest
    ? convertProposalToInpaasGoals(original.proposalRequest, originalValue)
    : undefined;
  return (
    <InPaaSGoalsContainer>
      {isSubmitting && <YieldXLoader />}
      <FormContainer className={isSubmitting ? "submitting" : undefined}>
        <Formik
          validateOnMount={shouldValidateOnMount}
          validateOnChange
          validateOnBlur
          initialValues={{
            ...formDefaults,
            ...(originalPortData || {}),
            ...inpaasFormData
          }}
          validationSchema={goalsValidationSchema({
            minYield,
            maxYield,
            maxRisk,
            minRisk
          })}
          onSubmit={values => submit(values)}
        >
          {({
            values,
            errors,
            touched,
            validateField,
            submitForm,
            setFieldValue,
            isValid,
            setFieldTouched
          }) => {
            if (isSubmitting) return <YieldXLoader />;
            return (
              <>
                <GoalsForm
                  values={values}
                  errors={errors}
                  touched={touched}
                  validateField={validateField}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  validateOnMount={!!inpaasFormData || !!original}
                />
                <AppBottomNav
                  hideBack={history.location.pathname.includes("goals")}
                  onNext={submitForm}
                  blockNext={
                    !isValid ||
                    (!shouldValidateOnMount &&
                      Object.values(touched).length === 0)
                  }
                />
              </>
            );
          }}
        </Formik>
      </FormContainer>
    </InPaaSGoalsContainer>
  );
}

export default Goals;
