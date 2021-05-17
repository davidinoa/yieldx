import React from "react";
import { Container } from "react-bootstrap";
import { FormikHelpers, FormikState } from "formik";
import { InPaaSFormState } from "recoil-state/inPaaS";
import InvestmentField from "./InvestmentField/InvestmentField";
import { InPaaSBoxCol, StyledForm } from "./GoalsForm.styles";
import TargetField from "./TargetField/TargetField";
import WeightField from "./WeightField/WeightField";

interface Props {
  values: FormikState<InPaaSFormState>["values"];
  touched: FormikState<InPaaSFormState>["touched"];
  errors: FormikState<InPaaSFormState>["errors"];
  validateField: FormikHelpers<InPaaSFormState>["validateField"];
  setFieldTouched: FormikHelpers<InPaaSFormState>["setFieldTouched"];
  setFieldValue: FormikHelpers<InPaaSFormState>["setFieldValue"];
  validateOnMount: boolean;
}

function GoalsForm({
  errors,
  touched,
  values,
  validateField,
  setFieldValue,
  validateOnMount,
  setFieldTouched
}: Props) {
  const [active, setActive] = React.useState<string>();
  React.useEffect(() => {
    if (values.goal === "targetYield" && touched.targetYield)
      validateField("targetYield");
    if (values.goal === "targetIncome" && touched.targetIncome)
      validateField("targetIncome");
    if (values.goal === "targetRisk" && touched.targetRisk)
      validateField("targetRisk");
  }, [
    values.goal,
    validateField,
    touched.targetIncome,
    touched.targetYield,
    touched.targetRisk
  ]);

  React.useEffect(() => {
    if (
      values.goal === "targetIncome" &&
      values.investmentAmount &&
      values.targetIncome
    ) {
      const targetYield =
        ((values.targetIncome * 12) / values.investmentAmount) * 100;
      setFieldValue("targetYield", targetYield);
      setFieldTouched("targetYield", false);
    }
    if (
      values.goal === "targetYield" &&
      values.investmentAmount &&
      values.targetYield
    ) {
      const targetIncome =
        (values.investmentAmount * (values.targetYield / 100)) / 12;
      setFieldValue("targetIncome", targetIncome);
      setFieldTouched("targetIncome", false);
    }
  }, [
    values.targetIncome,
    values.targetYield,
    values.goal,
    values.investmentAmount,
    setFieldValue,
    setFieldTouched
  ]);
  const investmentValidated =
    values.investmentAmount !== undefined &&
    errors.investmentAmount === undefined;
  const targetGoalValidated = !!values[values.goal] && !errors[values.goal];
  const disableWeightField = !investmentValidated || !targetGoalValidated;
  return (
    <StyledForm>
      <Container fluid>
        <div className="row fields-row">
          <InPaaSBoxCol sm={11} lg={8}>
            <InvestmentField
              validated={
                validateOnMount
                  ? investmentValidated
                  : Boolean(
                      touched.investmentAmount && !errors.investmentAmount
                    )
              }
              active={active === "investmentAmount"}
              setActive={(val: string) => setActive(val)}
            />
          </InPaaSBoxCol>
          <InPaaSBoxCol sm={11} lg={8}>
            <TargetField
              setValue={(field: string, newValue: number) =>
                setFieldValue(field, newValue)
              }
              validated={
                validateOnMount
                  ? targetGoalValidated
                  : Boolean(touched[values.goal] && !errors[values.goal])
              }
              goal={values.goal}
              targetRisk={values.targetRisk}
              investment={values.investmentAmount}
              disabled={!investmentValidated}
              active={active === "target"}
              setActive={(val: string) => setActive(val)}
            />
          </InPaaSBoxCol>
          <InPaaSBoxCol sm={12} lg={8}>
            <WeightField
              startValue={[values.minimumWeight, values.maximumWeight]}
              setWeight={(range: [number, number]) => {
                setFieldValue("minimumWeight", range[0]);
                setFieldValue("maximumWeight", range[1]);
              }}
              disabled={disableWeightField}
              active={active === "allocation"}
              setActive={(val: string) => setActive(val)}
            />
          </InPaaSBoxCol>
        </div>
      </Container>
    </StyledForm>
  );
}

export default GoalsForm;
