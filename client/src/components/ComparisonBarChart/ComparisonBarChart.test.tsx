import React from "react";
import { render } from "test/utils";
import ComparisonBarChart from "components/ComparisonBarChart/ComparisonBarChart";
import { DataVal } from "components/ComparisonBarChart/util/dataIsEqual";

const mockData1: DataVal = { label: "inpaas", value: 25 };
const mockData2: DataVal = {
  label: "average",
  value: 7
};

describe("ComparisonBarChart", () => {
  it("Should render", () => {
    const { container } = render(
      <ComparisonBarChart
        width={400}
        height={200}
        data={[mockData1, mockData2]}
        maxValue={100}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
