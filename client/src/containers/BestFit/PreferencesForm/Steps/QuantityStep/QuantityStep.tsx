import React, { useEffect } from "react";
import { useField } from "formik";
import { useSetRecoilState } from "recoil";
import FormikNumberInput from "elements/FormikNumberInput/FormikNumberInput";
import { BestFitQuestion } from "containers/BestFit/PreferencesForm/PreferencesForm.styles";
import { preferencesState } from "recoil-state/bestFit";

export default function QuantityStep() {
  const [field, meta] = useField("quantity");
  const setPreferences = useSetRecoilState(preferencesState);

  useEffect(() => {
    setPreferences(prev => ({
      ...prev,
      quantity: field.value,
      isCurrentValid: !meta.error
    }));
  }, [field.value, meta.error, setPreferences]);

  return (
    <div>
      <h3>How many bonds would you like to include in the portfolio?</h3>
      <BestFitQuestion>
        <div className="input-container">
          <FormikNumberInput
            withoutFormatter
            decimalScale={0}
            name="quantity"
            label="enter bond quantity"
            helperText="Minimum: 5 / Recommended: 20"
            className={(!meta.error && "validated") || ""}
          />
        </div>
      </BestFitQuestion>
    </div>
  );
}
