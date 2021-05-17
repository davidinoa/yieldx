import React, { useState } from "react";
import _ from "lodash";
import { Card } from "elements/Card/Card";
import { CardValue } from "elements/Card/Card.styles";
import { ToolTipContent } from "assets/content";
import Decimal from "util/Decimal";

type Props = {
  risk: number;
  maxDrawdown: number;
};

export default function RiskCard({ risk, maxDrawdown }: Props) {
  const [riskMetric, setRiskMetric] = useState<"risk" | "maxDrawdown">("risk");
  const unselectedRiskMetric = riskMetric === "risk" ? "maxDrawdown" : "risk";
  return (
    <Card
      title={_.startCase(riskMetric)}
      tooltipContent={ToolTipContent[riskMetric]}
    >
      <CardValue>
        <button
          type="button"
          className="toggle-link"
          onClick={() => setRiskMetric(unselectedRiskMetric)}
        >
          {_.startCase(unselectedRiskMetric)}
        </button>
        {riskMetric === "risk"
          ? Decimal.format(risk)
          : Decimal.format(maxDrawdown)}
        <sup>%</sup>
      </CardValue>
    </Card>
  );
}
