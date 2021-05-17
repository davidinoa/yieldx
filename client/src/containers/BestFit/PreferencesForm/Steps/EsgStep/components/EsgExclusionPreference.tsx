import React, { Dispatch, SetStateAction } from "react";
import {
  ExclusionDivider,
  ExclusionMethod,
  ExclusionSelection
} from "containers/BestFit/PreferencesForm/PreferencesForm.styles";

interface Props {
  setExclusionSelection: Dispatch<SetStateAction<string>>;
  setExclusionPreferenceSelection: Dispatch<SetStateAction<boolean>>;
}

export function EsgExclusionPreference({
  setExclusionSelection,
  setExclusionPreferenceSelection
}: Props) {
  return (
    <>
      <p className="instruction">Exclude esg sectors</p>
      <h3>Which ESG exclusion method would you prefer?</h3>
      <ExclusionSelection>
        <ExclusionMethod selection={"sector"}>
          <h4>Exclude specific sectors</h4>
          <p>Select up to three sectors to remove from the universe.</p>
          <button
            data-testid="exclude-sector-option"
            onClick={() => {
              setExclusionSelection("sector");
              setExclusionPreferenceSelection(false);
            }}
          >
            Select this method
          </button>
        </ExclusionMethod>
        <ExclusionDivider>
          <div className="vertical-line"></div>
          <div className="circle">
            <h5>or</h5>
          </div>
          <div className="vertical-line"></div>
        </ExclusionDivider>
        <ExclusionMethod selection={"bond"}>
          <h4>Set the ESG score range</h4>
          <p>
            Choose an ESG score threshold to remove bonds from the universe.
          </p>
          <button
            onClick={() => {
              setExclusionSelection("bond");
              setExclusionPreferenceSelection(false);
            }}
          >
            Select this method
          </button>
        </ExclusionMethod>
      </ExclusionSelection>
    </>
  );
}
