import React, { MutableRefObject, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Col } from "react-bootstrap";
import Chart from "chart.js";
import styled from "styled-components";
import PortfolioMetricCard from "components/PortfolioMetricCard/PortfolioMetricCard";
import { WealthProjection } from "providers/graphql/hooks";
import CustomToolTip from "./CustomToolTip";

interface Props {
  nav: number;
  wealthProjections: WealthProjection[];
  tooltipContent?: string;
}

const ChartCard = styled(Col)`
  padding: 1.5rem 0.5rem 0;
`;

const StyledRootCard = styled(PortfolioMetricCard)`
  margin-bottom: 3rem;
`;

function formatNumber(val: number): string {
  if (val < 1_000_000) return `$${Math.round(val / 1_000).toString()}K`;
  return `$${(val / 1_000_000).toFixed(2)}MM`;
}

const PortfolioGrowthChart = ({
  wealthProjections,
  nav,
  tooltipContent
}: Props) => {
  const chartRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const [, setChart] = React.useState<null | Chart>(null);
  useEffect(() => {
    if (chartRef.current) {
      const canvas: HTMLCanvasElement = chartRef.current;
      const data = [
        {
          nav,
          lowerBar: nav,
          upperBar: nav
        },
        ...wealthProjections.map(({ percentiles }, i) => {
          if (i === 0 || i === 3 || i === 6) return undefined;
          return {
            nav: percentiles[1]?.nav,
            lowerBar: percentiles[0]?.nav,
            upperBar: percentiles[2]?.nav
          };
        })
      ].filter(cv => cv !== undefined) as {
        nav: number;
        lowerBar: number;
        upperBar: number;
      }[];

      const { max, min } = data.reduce(
        (acc, it) => {
          return {
            min: Math.min(acc.min, it.lowerBar),
            max: Math.max(acc.max, it.upperBar)
          };
        },
        {
          max: -Infinity,
          min: Infinity
        }
      );

      let stepSize = Math.ceil(max - nav) / 7;
      if (max - nav <= 140) stepSize = 10;
      else if (max - nav <= 1_400) stepSize = 100;
      const lineChart = new Chart(canvas, {
        type: "line",
        options: {
          tooltips: {
            // Disable the on-canvas tooltip
            enabled: false,

            custom(tooltipModel) {
              // Tooltip Element
              let tooltipEl = document.getElementById("chartjs-tooltip");

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement("div");
                tooltipEl.id = "chartjs-tooltip";
                document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = "0";
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove("above", "below", "no-transform");
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add("no-transform");
              }

              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              function getBody(bodyItem: any) {
                return bodyItem.lines;
              }

              // Set Text
              if (tooltipModel.body) {
                const titleLines = tooltipModel.title || [];
                const bodyLines = tooltipModel.body.map(getBody);
                if (!Number.isNaN(Number(bodyLines[0])))
                  ReactDOM.render(
                    <CustomToolTip
                      title={titleLines[0]}
                      value={bodyLines[0]}
                    />,
                    tooltipEl
                  );
              }

              // `this` will be the overall tooltip
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-underscore-dangle,react/no-this-in-sfc
              const position = this._chart.canvas.getBoundingClientRect();

              // Display, position, and set styles for font
              tooltipEl.style.opacity = "1";
              tooltipEl.style.position = "absolute";
              tooltipEl.style.left = `${
                position.left + window.pageXOffset + tooltipModel.caretX
              }px`;
              tooltipEl.style.top = `${
                position.top + window.pageYOffset + tooltipModel.caretY
              }px`;
              tooltipEl.style.transform = "translate(-49%, -116%)";
            }
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 10,
              bottom: 10
            }
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  borderDash: [3, 7],
                  color: "#253859",
                  lineWidth: 2,
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  drawTicks: false
                },
                ticks: {
                  padding: 20,
                  fontFamily: `"proxima-nova", sans-serif`,
                  fontSize: 11,
                  fontStyle: "bold",
                  fontColor: "white",
                  callback(value, index, values) {
                    if (index === values.length - 1) {
                      return "";
                    }
                    if (index <= 7)
                      if (stepSize <= 100) return `$${value.toLocaleString()}`;
                    return formatNumber(
                      value > 1_000_000
                        ? Number(value)
                        : Math.round(Number(value))
                    )
                      .split("")
                      .join(String.fromCharCode(8202));
                  },
                  suggestedMin: min,
                  stepSize,
                  maxTicksLimit: 7.1,
                  suggestedMax: max
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  drawTicks: false,
                  color: "#253859",
                  lineWidth: 1,
                  drawOnChartArea: false
                },
                ticks: {
                  fontColor: "white",
                  fontFamily: `"proxima-nova", sans-serif`,
                  fontSize: 11,
                  fontStyle: "bold",
                  callback(value): string | number {
                    return value
                      .toString()
                      .split("")
                      .join(String.fromCharCode(8202));
                  },
                  padding: 20
                }
              }
            ]
          },
          plugins: {
            filler: {
              propagate: false
            }
          }
        },
        data: {
          labels: ["", "6 MONTHS", "1 YEAR", "3 YEARS", "5 YEARS", "10+ YEARS"],
          datasets: [
            {
              label: "Min",
              radius: 0,
              backgroundColor: "rgba(15, 212, 255, .15)",
              borderColor: "rgba(15, 212, 255, .15)",
              borderWidth: 0,
              fill: false,
              data: data.map(cv => cv.lowerBar),
              borderDash: [0, 1]
            },
            {
              fill: false,
              pointRadius: 6,
              data: data.map(cv => cv.nav),
              borderColor: "rgba(15,212,255,.3)",
              borderWidth: 2,
              pointBorderColor: "#03132F",
              pointBackgroundColor: "#1397B4",
              pointBorderWidth: 3
            },
            {
              label: "Max",
              backgroundColor: "rgba(15, 212, 255, .15)",
              borderColor: "rgba(15, 212, 255, .15)",
              fill: "-2",
              data: data.map(cv => cv.upperBar),
              radius: 0,
              borderWidth: 0,
              borderDash: [0, 1]
            }
          ]
        }
      });
      setChart(lineChart);
    }
  }, [chartRef, setChart, wealthProjections, nav]);
  return (
    <StyledRootCard label="portfolio growth" tooltipContent={tooltipContent}>
      <ChartCard>
        <canvas ref={chartRef} id="portfolio-growth" height="100" width="258" />
      </ChartCard>
    </StyledRootCard>
  );
};

export default PortfolioGrowthChart;
