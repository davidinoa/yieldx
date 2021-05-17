import React, { useEffect, useState } from "react";
import { useDidMount } from "beautiful-react-hooks";
import { useField } from "formik";
import { useRecoilState } from "recoil";
import { preferencesState } from "recoil-state/bestFit";
import { MINIMUM_DENOMINATION } from "containers/BestFit/BestFit.state";
import FormikNumberInput from "../../../../../elements/FormikNumberInput/FormikNumberInput";
import { ReactComponent as DollarSign } from "../../../../../assets/svg/dollar.svg";
import Decimal from "../../../../../util/Decimal";
import { BestFitQuestion } from "../../PreferencesForm.styles";

export default function InvestmentStep() {
  const [field, meta, helpers] = useField("investment");
  const [preferences, setPreferences] = useRecoilState(preferencesState);
  const adjustedMin = Math.max(
    50_000,
    preferences.quantity * MINIMUM_DENOMINATION
  );
  const [mounted, setMounted] = useState(false);
  const helperText = `Minimum of $${Decimal.format(adjustedMin)}`;

  useDidMount(() => {
    setMounted(true);
    helpers.setValue(adjustedMin);
  });

  useEffect(() => {
    if (mounted) {
      setPreferences(prev => ({
        ...prev,
        investment: field.value,
        isCurrentValid: !meta.error
      }));
    }
  }, [field.value, setPreferences, meta.error, mounted]);

  return (
    <>
      <h3>Enter your investment amount</h3>
      <BestFitQuestion>
        <div className="input-container">
          <FormikNumberInput
            name="investment"
            startIcon={<DollarSign />}
            helperText={helperText}
            className={
              (field.value || meta.touched) && !meta.error
                ? "validated"
                : undefined
            }
          />
        </div>
      </BestFitQuestion>
    </>
  );
}
