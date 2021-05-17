/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import userEvent from "@testing-library/user-event";
import PortfolioAnalysis from "./PortfolioAnalysis";
import { render, screen } from "../../../../../test/utils";
import mockAnalysis from "../../../../../__mocks__/models/mockAnalysis";
import calculateWeightedAverageSpread from "../../../../../util/calculateWeightedAverageSpread";
import mockYieldXPortfolio from "../../../../../__mocks__/models/mockYieldXPortfolio";

describe("PortfolioAnalysis", () => {
  enum TimeMetric {
    Duration = "duration",
    Maturity = "maturity"
  }

  const props = {
    analysis: mockAnalysis,
    averageSpread: calculateWeightedAverageSpread(mockYieldXPortfolio),
    timeMetricPreference: TimeMetric.Duration
  };

  test("time metric toggle", () => {
    render(<PortfolioAnalysis {...props} />);
    userEvent.click(screen.getByText(/duration/i));
    userEvent.click(screen.getByText(/maturity/i));
  });
});
