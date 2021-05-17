import React from "react";
import Root from "./RatingsAllocation.styles";
import StackedBar from "../../../../../components/StackedBarChart/StackedBar";

type Props = {
  data: Array<{ name: string; value: number }>;
  tooltipContent?: string;
};

function RatingsChart({ data, tooltipContent }: Props) {
  return (
    <Root tooltipContent={tooltipContent}>
      <StackedBar data={data} className="ratings-chart" />
    </Root>
  );
}

export default RatingsChart;
