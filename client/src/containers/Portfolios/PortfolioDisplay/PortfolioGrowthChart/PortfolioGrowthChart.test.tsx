/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render } from "test/utils";
import PortfolioGrowthChart from "./PortfolioGrowthChart";

describe("PortfolioGrowthChart", () => {
  const props = {
    nav: 55_000,
    tooltipContent: "",
    wealthProjections: [
      {
        date: "2020-10-03",
        percentiles: [
          { percentile: 0.3, nav: 54946.92075798862 },
          { percentile: 0.5, nav: 56091.680667803754 },
          { percentile: 0.7, nav: 57236.44057761889 }
        ]
      },
      {
        date: "2021-01-03",
        percentiles: [
          { percentile: 0.3, nav: 55111.62300107334 },
          { percentile: 0.5, nav: 56749.54548375409 },
          { percentile: 0.7, nav: 58387.46796643484 }
        ]
      },
      {
        date: "2021-07-03",
        percentiles: [
          { percentile: 0.3, nav: 55717.487256860855 },
          { percentile: 0.5, nav: 58088.512683415094 },
          { percentile: 0.7, nav: 60459.53810996933 }
        ]
      },
      {
        date: "2022-07-03",
        percentiles: [
          { percentile: 0.3, nav: 57348.735602428416 },
          { percentile: 0.5, nav: 60861.968555671396 },
          { percentile: 0.7, nav: 64375.201508914375 }
        ]
      },
      {
        date: "2023-07-03",
        percentiles: [
          { percentile: 0.3, nav: 59259.59065845369 },
          { percentile: 0.5, nav: 63767.84402553859 },
          { percentile: 0.7, nav: 68276.09739262349 }
        ]
      },
      {
        date: "2025-07-03",
        percentiles: [
          { percentile: 0.3, nav: 63613.27936328368 },
          { percentile: 0.5, nav: 70002.44529976406 },
          { percentile: 0.7, nav: 76391.61123624444 }
        ]
      },
      {
        date: "2027-07-03",
        percentiles: [
          { percentile: 0.3, nav: 68547.72201991704 },
          { percentile: 0.5, nav: 76846.60541422582 },
          { percentile: 0.7, nav: 85145.4888085346 }
        ]
      },
      {
        date: "2030-07-03",
        percentiles: [
          { percentile: 0.3, nav: 76978.96975720959 },
          { percentile: 0.5, nav: 88387.71435828974 },
          { percentile: 0.7, nav: 99796.45895936989 }
        ]
      }
    ]
  };
  test("Renders correct line chart", () => {
    const { asFragment } = render(<PortfolioGrowthChart {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
