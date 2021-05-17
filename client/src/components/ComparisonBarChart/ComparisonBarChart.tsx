import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import Decimal from "util/Decimal";
import dataIsEqual, { DataVal } from "./util/dataIsEqual";
import { SVGRoot } from "./ComparisonBarChart.styles";

const defaultMargin = { top: 20, right: 10, bottom: 20, left: 20 };

interface Props {
  width: number;
  height: number;
  data: [DataVal, DataVal];
  maxValue: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

function ComparisonBarChart({
  width,
  height,
  data,
  margin = defaultMargin,
  maxValue
}: Props) {
  const prevDataRef = useRef<Props["data"]>();
  useEffect(() => {
    prevDataRef.current = data;
  });
  const prevData = prevDataRef.current;
  const [show, setShow] = useState<boolean>();
  useEffect(() => {
    if (prevData && !dataIsEqual(prevData, data))
      setShow(prev => {
        if (prev) return false;
        return prev;
      });
  }, [data, setShow, prevData]);
  useEffect(() => {
    if (!show) setShow(true);
  }, [show, setShow]);
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  // scales, memoize for performance
  const yScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, yMax],
        round: true,
        domain: data.map(({ label }) => label),
        padding: 0.4
      }),
    [yMax, data]
  );
  const xScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [xMax, 0],
        round: true,
        domain: [-1, maxValue]
      }),
    [xMax, maxValue]
  );

  return width < 10 || !show ? (
    <div style={{ width, height }} />
  ) : (
    <SVGRoot width={width} height={height}>
      <Group left={margin.left} top={margin.top}>
        {data.map(({ label, value }) => {
          const barWidth = xMax - (xScale(value) ?? 0);
          const barHeight = yScale.bandwidth();
          const barY = yScale(label);
          const fill = label === "inpaas" ? "#0059FF" : "#00AFBA";
          return (
            <g key={`bar-group-${label}`}>
              <Bar
                x={0}
                y={barY}
                width={xMax}
                height={barHeight}
                fill="#03132F"
              />
              <Bar
                x={0}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill={fill}
              >
                <animate
                  attributeName="width"
                  from="0"
                  to={barWidth}
                  dur="0.5s"
                  fill="freeze"
                />
              </Bar>
              <text
                x="1em"
                y={(barY ?? 0) + barHeight / 2 + 5}
                fontFamily="Roboto Mono"
                fontSize="10px"
                fontWeight="bold"
                fill="white"
                letterSpacing="0.2em"
              >
                {label.toUpperCase()}
              </text>
              <text
                x={xMax - 75}
                y={(barY ?? 0) + barHeight / 2 + 7}
                fontFamily="Roboto Mono"
                fontSize="14px"
                fontWeight="bold"
                fill="white"
                letterSpacing="0.2em"
              >
                {Decimal.format(value)}%
              </text>
            </g>
          );
        })}
      </Group>
    </SVGRoot>
  );
}

export default ComparisonBarChart;
