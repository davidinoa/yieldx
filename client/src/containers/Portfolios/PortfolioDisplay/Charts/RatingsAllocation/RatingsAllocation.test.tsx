import React from "react";
import RatingsAllocation from "./RatingsAllocation";
import { render } from "../../../../../test/utils";

describe("RatingsAllocation", () => {
  const mockData = [
    { name: "AAA", value: 22.57139892408698 },
    { name: "AA-", value: 17.62552505183547 },
    { name: "A+", value: 21.282849494433663 },
    { name: "A-", value: 38.520226529643885 }
  ];

  test("mounts", () => {
    const { container } = render(<RatingsAllocation data={mockData} />);
    expect(container).toBeInTheDocument();
  });
});
