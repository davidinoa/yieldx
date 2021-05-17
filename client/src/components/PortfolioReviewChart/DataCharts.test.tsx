import React from "react";
import {
  ChartContainer,
  LegendContainer,
  LegendItem,
  PieChartContainer,
  PieChartRow
} from "./DataCharts.styles";
import { render } from "../../test/utils";

describe("styled-components", () => {
  test("ChartContainer", () => {
    const { container } = render(<ChartContainer />);
    expect(container).toBeInTheDocument();
  });
  test("LegendContainer", () => {
    const { container } = render(<LegendContainer />);
    expect(container).toBeInTheDocument();
  });
  test("LegendItem", () => {
    const { container } = render(<LegendItem />);
    expect(container).toBeInTheDocument();
  });
  test("PieChartContainer", () => {
    const { container } = render(<PieChartContainer />);
    expect(container).toBeInTheDocument();
  });
  test("PieChartRow", () => {
    const { container } = render(<PieChartRow />);
    expect(container).toBeInTheDocument();
  });
});
