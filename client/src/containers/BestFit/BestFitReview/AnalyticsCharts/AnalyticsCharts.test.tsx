import React from "react";
import { render } from "test/utils";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import { AnalyticsCharts } from "./AnalyticsCharts";

test("renders", () => {
  const mockWealthProjections = [
    {
      date: "2020-09-24",
      percentiles: [
        { percentile: 0.3, nav: 49637.80901150539 },
        { percentile: 0.5, nav: 50268.96770559913 },
        { percentile: 0.7, nav: 50900.12639969286 }
      ]
    },
    {
      date: "2020-12-24",
      percentiles: [
        { percentile: 0.3, nav: 49641.98752371317 },
        { percentile: 0.5, nav: 50539.38228373134 },
        { percentile: 0.7, nav: 51436.777043749506 }
      ]
    },
    {
      date: "2021-06-24",
      percentiles: [
        { percentile: 0.3, nav: 49801.78470629715 },
        { percentile: 0.5, nav: 51084.58323242274 },
        { percentile: 0.7, nav: 52367.38175854832 }
      ]
    },
    {
      date: "2022-06-24",
      percentiles: [
        { percentile: 0.3, nav: 50339.18985046082 },
        { percentile: 0.5, nav: 52192.69288060651 },
        { percentile: 0.7, nav: 54046.19591075221 }
      ]
    },
    {
      date: "2023-06-24",
      percentiles: [
        { percentile: 0.3, nav: 51005.52938044318 },
        { percentile: 0.5, nav: 53324.83927167239 },
        { percentile: 0.7, nav: 55644.14916290161 }
      ]
    },
    {
      date: "2025-06-24",
      percentiles: [
        { percentile: 0.3, nav: 52537.81505515463 },
        { percentile: 0.5, nav: 55663.339180282026 },
        { percentile: 0.7, nav: 58788.86330540942 }
      ]
    },
    {
      date: "2027-06-24",
      percentiles: [
        { percentile: 0.3, nav: 54244.04229187901 },
        { percentile: 0.5, nav: 58104.39133090979 },
        { percentile: 0.7, nav: 61964.74036994057 }
      ]
    },
    {
      date: "2030-06-24",
      percentiles: [
        { percentile: 0.3, nav: 57047.33081822959 },
        { percentile: 0.5, nav: 61968.14657398238 },
        { percentile: 0.7, nav: 66888.96232973518 }
      ]
    }
  ];

  const { container } = render(
    <AnalyticsCharts
      netAssetValue={50_000}
      portfolio={mockYieldXPortfolio}
      wealthProjections={mockWealthProjections}
    />
  );

  expect(container).toBeDefined();

  const { container: rerendered } = render(
    <AnalyticsCharts portfolio={mockYieldXPortfolio} />
  );

  expect(rerendered).toBeDefined();
});
