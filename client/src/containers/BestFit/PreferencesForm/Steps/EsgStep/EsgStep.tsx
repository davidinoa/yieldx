import React, { useState } from "react";
import { EsgExclusionPreference } from "./components/EsgExclusionPreference";
import { SectorExclusion } from "./components/SectorExclusion";
import { BondExclusion } from "./components/BondExclusion";
import { ToggleSection, ToggleCircle } from "../../PreferencesForm.styles";

export default function EsgStep() {
  const [
    exclusionPreferenceSelection,
    setExclusionPreferenceSelection
  ] = useState(true);
  const [exclusionSelection, setExclusionSelection] = useState("sector");

  return (
    <>
      {exclusionPreferenceSelection && (
        <EsgExclusionPreference
          setExclusionSelection={setExclusionSelection}
          setExclusionPreferenceSelection={setExclusionPreferenceSelection}
        />
      )}
      {!exclusionPreferenceSelection && (
        <>
          {exclusionSelection === "sector" && <SectorExclusion />}
          {exclusionSelection === "bond" && <BondExclusion />}
        </>
      )}
      <ToggleSection>
        <ToggleCircle
          selected={exclusionPreferenceSelection}
          onClick={() => setExclusionPreferenceSelection(true)}
        />
        <ToggleCircle
          selected={!exclusionPreferenceSelection}
          onClick={() => setExclusionPreferenceSelection(false)}
        />
      </ToggleSection>
    </>
  );
}
