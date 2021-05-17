import React from "react";
import { render } from "test/utils";
import StatusList from "./StatusList";

describe("StatusList", () => {
  it("Should match snapshot", () => {
    const { asFragment } = render(
      <StatusList statusCount={{ active: 0, closed: 0, tracking: 100 }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
