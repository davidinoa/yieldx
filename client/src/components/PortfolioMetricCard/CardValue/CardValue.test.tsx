import React from "react";
import { render, screen } from "../../../test/utils";
import CardValue from "./CardValue";

describe("CardValue", () => {
  test("Dollar format snapshot", () => {
    const { asFragment } = render(
      <CardValue
        value={{
          format: "$",
          number: 5_000.25
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("Percent format snapshot", () => {
    const { asFragment } = render(
      <CardValue
        value={{
          format: "%",
          number: 12.25
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("BPS format snapshot", () => {
    // bps should be rounded
    const { asFragment } = render(
      <CardValue
        value={{
          format: "bps",
          number: 250.25
        }}
      />
    );
    expect(screen.queryByText(/250/)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  test("Helper text snapshot", () => {
    const { asFragment } = render(
      <CardValue
        value={{
          format: "$",
          number: 5_000.25,
          helperText: "monthly"
        }}
      />
    );
    expect(screen.queryByText(/\/monthly/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  test("Should display 2 values if secondValue not undefined", () => {
    const { asFragment } = render(
      <CardValue
        value={{
          format: "%",
          number: 3,
          helperText: "min"
        }}
        secondValue={{
          format: "%",
          number: 5.2,
          helperText: "max"
        }}
      />
    );
    expect(screen.queryByText(/\/min/i)).toBeInTheDocument();
    expect(screen.queryByText(/\/max/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
