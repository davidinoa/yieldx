import { ExecutionCard } from "elements/ExecutionCard";
import React from "react";
import { InvestorType } from "providers/graphql/hooks";

interface Props {
  investorType: InvestorType;
  fullName: string;
  onSwitchInvestor: () => void;
}
export function InvestorSummaryCard({
  investorType,
  fullName,
  onSwitchInvestor
}: Props) {
  return (
    <ExecutionCard
      data-testid="switch-investor-button"
      title="INVESTOR ACCOUNT"
      items={{
        "INVESTOR TYPE": investorType,
        "FULL NAME": fullName
      }}
      buttonLabel="Switch investor account"
      onClick={onSwitchInvestor}
    />
  );
}
