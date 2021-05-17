import React, { MutableRefObject, useEffect, useRef } from "react";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { chartColors } from "./DataCharts.styles";

export default function usePortfolioReviewChart<T>(
  names: string[],
  values: number[],
  onHighlight?: (label: string, ind: number) => void,
  highlightedChart?: {
    type: "YIELD" | "SECTOR";
    index: number;
  }
): [MutableRefObject<HTMLCanvasElement | null>, Chart | null] {
  const chartRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const [myChart, setChart] = React.useState<null | Chart>(null);
  useEffect(() => {
    if (chartRef.current && names && values && !myChart) {
      const canvas: HTMLCanvasElement = chartRef.current;
      const pie = new Chart(canvas, {
        type: "pie",
        data: {
          labels: names,
          datasets: [
            {
              borderWidth: 0,
              borderColor: "inherit",
              backgroundColor: [...chartColors],
              data: values
            }
          ]
        },
        plugins: [ChartDataLabels],
        options: {
          layout: {
            padding: {
              top: 25,
              bottom: 25,
              right: 40,
              left: 40
            }
          },
          events: ["click"],
          // eslint-disable-next-line object-shorthand,func-names
          onClick: function (
            event?: MouseEvent,
            activeElements?: Array<{
              _model: { outerRadius: number };
              _chart: Chart;
              _index: number;
            }>
          ) {
            event?.stopPropagation();
            if (activeElements && activeElements[0] && onHighlight) {
              // eslint-disable-next-line no-underscore-dangle
              const ind = activeElements[0]._index;
              onHighlight(names[ind], ind);
            }
          },
          tooltips: {
            enabled: false,
            position: "average",
            callbacks: {
              label({ index }, data) {
                if (
                  data.labels &&
                  data.datasets &&
                  data.datasets[0] &&
                  data.datasets[0].data &&
                  index !== undefined
                ) {
                  const currVal = data.datasets[0].data[index];
                  const currLabel = data.labels[index];
                  if (typeof currVal === "number")
                    return `${currVal.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2
                    })}%: ${currLabel}`;
                }
                return "";
              }
            }
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            outlabels: {
              display: values.map(cv => cv <= 9),
              textAlign: "center",
              backgroundColor: "transparent",
              lineColor: "#a6b2c6",
              lineWidth: 1,
              text: "%p",
              color: "#a6b2c6",
              stretch: 10,
              font: {
                weight: "bold",
                size: "13",
                minSize: 13,
                lineHeight: "16px"
              }
            },
            datalabels: {
              formatter: (value: number) => {
                return value > 9
                  ? `${value.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2
                    })}%`
                  : "";
              },
              color: "#fff",
              font: {
                weight: "bold",
                size: 13,
                lineHeight: "16px"
              }
            }
          }
        }
      });
      setChart(pie);
    }
    if (
      myChart &&
      myChart.data &&
      myChart.data.datasets &&
      myChart.data.datasets[0]
    ) {
      myChart.data.datasets[0].data = values;
      myChart.data.labels = names;
      myChart.update();
    }
  }, [names, values, myChart, onHighlight]);
  useEffect(() => {
    if (myChart) {
      myChart.update();
      if (highlightedChart) {
        const pieSlice = myChart.getDatasetMeta(0).data[highlightedChart.index];
        // eslint-disable-next-line no-underscore-dangle
        if (pieSlice._model.outerRadius)
          // eslint-disable-next-line no-underscore-dangle
          pieSlice._model.outerRadius += 8;
      }
    }
  }, [highlightedChart, myChart]);
  return [chartRef, myChart];
}
