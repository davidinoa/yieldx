/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useLayoutEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { colorWheel } from "../../theme/colors";

const GraphContainer = styled(ResponsiveContainer).attrs(({ ref }: any) => ({
  ref,
  height: 130
}))`
  svg {
    padding-top: 3rem;
    overflow: visible;
  }
`;

const ValueText = styled.text.attrs(() => ({
  fill: "white",
  textAnchor: "end"
}))`
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
`;

type Props = {
  className?: string;
  data: { name: string; value: number }[];
};

export default function StackedBar({ data, className }: Props) {
  const [barData, setBarData] = useState<any>([]);
  const [bars, setBars] = useState<any>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute("style", "width: 99%");
    }
  }, []);

  useLayoutEffect(() => {
    if (data) {
      setBarData([
        {
          ...data.reduce(
            (prev, curr) => ({ ...prev, [curr.name]: curr.value }),
            {}
          )
        }
      ]);
    }
  }, [data]);

  useLayoutEffect(() => {
    if (barData.length) {
      setBars(
        barData.map((currentData: Record<string, number>) =>
          Object.entries(currentData).map(([key, value], index) => (
            <Bar
              // Without this, labels may fail to render in certain corner cases, such as the chart appearing in the
              // viewport when it's initially fed data, and then only showing the labels if the browser window is
              // resized. This is a recharts bug with more information here:
              // https://github.com/recharts/recharts/issues/829
              isAnimationActive={false}
              dataKey={key}
              barSize={60}
              // @ts-ignore
              label={{
                position: "insideTop",
                content: ({ x, y }: Record<string, number>) => (
                  <ValueText
                    x={x}
                    y={y - 10}
                    transform={`translate(20,-20) rotate(-50 ${x} 0)`}
                  >
                    {key.toUpperCase()}
                  </ValueText>
                )
              }}
              key={value}
              fill={colorWheel[index % colorWheel.length]}
              stackId="ratings"
            />
          ))
        )
      );
    }
  }, [barData]);
  return (
    <div style={{ height: "100%" }} className={className} ref={containerRef}>
      <GraphContainer>
        <BarChart layout="vertical" data={barData}>
          <XAxis type="number" hide />
          <YAxis type="category" hide />
          {bars}
        </BarChart>
      </GraphContainer>
    </div>
  );
}
