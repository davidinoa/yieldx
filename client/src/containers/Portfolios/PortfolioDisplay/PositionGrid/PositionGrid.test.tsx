/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PositionGridAll from "./PositionGridAll";
import { render, screen } from "../../../../test/utils";
import mockYieldXPortfolio from "../../../../__mocks__/models/mockYieldXPortfolio";

describe("Position Grid", () => {
  beforeEach(() => {
    const props = {
      cashAvailable: 0,
      portfolio: mockYieldXPortfolio,
      setGridApi: jest.fn(),
      setColumnApi: jest.fn()
    };
    render(<PositionGridAll sleeve="all" {...props} />);
  });

  test("mounts properly", () => {
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });
});
