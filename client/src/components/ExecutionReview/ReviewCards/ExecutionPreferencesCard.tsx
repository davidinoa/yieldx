import { ExecutionCard } from "elements/ExecutionCard";
import React from "react";

interface Props {
  executionPreferences: {
    fullFillRequired: boolean;
    goodTillCancel: boolean;
  };
  onEditPreferences: () => void;
}
export function ExecutionPreferencesCard({
  executionPreferences,
  onEditPreferences
}: Props) {
  return (
    <ExecutionCard
      data-testid="edit-preferences-button"
      title="EXECUTION PREFERENCES"
      items={{
        "ORDER TYPE": executionPreferences.fullFillRequired
          ? "All or none"
          : "Partial fill",
        "GOOD UNTIL CANCEL": executionPreferences.goodTillCancel
          ? "3 days"
          : "No"
      }}
      buttonLabel="Edit preferences"
      onClick={onEditPreferences}
    />
  );
}
