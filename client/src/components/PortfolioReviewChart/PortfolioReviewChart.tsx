import React from "react";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import clsx from "clsx";
import {
  chartColors,
  ChartContainer,
  LegendContainer,
  LegendItem,
  PieCol
} from "./DataCharts.styles";
import usePortfolioReviewChart from "./usePortfolioReviewChart";

interface Props {
  names: string[];
  values: number[];
  chartId: string;
  onHighlight?: (selected: string, index: number) => void;
  highlightedChart?: {
    type: "YIELD" | "SECTOR";
    index: number;
  };
  height?: number;
}

Chart.plugins.unregister(ChartDataLabels);
const PortfolioReviewChart: React.FC<Props> = ({
  names,
  values,
  chartId,
  onHighlight,
  highlightedChart,
  height
}: Props) => {
  const [chartRef, myChart] = usePortfolioReviewChart(
    names,
    values,
    onHighlight,
    highlightedChart
  );
  return (
    <ChartContainer className="row">
      <PieCol
        className="col-13"
        style={height ? { height: `${height}px` } : undefined}
      >
        <canvas ref={chartRef} id={chartId} height="196" width="258" />
      </PieCol>
      <LegendContainer className="0-legend col-11">
        {names.map((cv, i) => (
          <LegendItem
            className="row"
            // eslint-disable-next-line react/no-array-index-key
            key={`${cv}-${i}`}
            data-testid="PortfolioReviewChart-LegendItem"
            onClick={() => {
              if (myChart) {
                const pieSlice = myChart.getDatasetMeta(0).data[i];
                myChart.update();
                // eslint-disable-next-line no-underscore-dangle
                if (pieSlice._model.outerRadius && onHighlight) {
                  // eslint-disable-next-line no-underscore-dangle
                  pieSlice._model.outerRadius += 8;
                  onHighlight(names[i], i);
                }
              }
            }}
          >
            <div className="col-2">
              <span style={{ backgroundColor: chartColors[i] }} />
            </div>
            <span
              className={clsx({
                highlighted: highlightedChart && highlightedChart.index === i
              })}
            >
              {cv}
            </span>
          </LegendItem>
        ))}
      </LegendContainer>
    </ChartContainer>
  );
};

export default PortfolioReviewChart;
