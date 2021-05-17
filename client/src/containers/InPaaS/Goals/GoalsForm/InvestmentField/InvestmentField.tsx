import React from "react";
import clsx from "clsx";
import Field from "elements/Field/Field";
import FormikNumberInput from "elements/FormikNumberInput/FormikNumberInput";
import { ReactComponent as DollarSign } from "assets/svg/dollar.svg";
import { investmentAmountDescription } from "containers/InPaaS/Goals/GoalsForm/goalsFieldDescriptions";
import { Row } from "react-bootstrap";

interface Props {
  validated?: boolean;
  active: boolean;
  setActive: (val: string) => void;
}

function InvestmentField({ validated, active, setActive }: Props) {
  return (
    <Field step={1} heading="Set your investment amount" active={active}>
      <span className="field-description">{investmentAmountDescription}</span>
      <Row className="mb-4">
        <FormikNumberInput
          name="investmentAmount"
          helperText="Min. $1,000.00"
          startIcon={<DollarSign />}
          className={clsx({ validated })}
          onClick={() => setActive("investmentAmount")}
        />
      </Row>
    </Field>
  );
}

export default InvestmentField;
