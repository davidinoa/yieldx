import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../../../test/utils";
import YieldFilter, { yieldFiltersMap } from "./YieldFilter";

describe("Yield filter drop down tests", () => {
  test("mounts with default of no filters", async () => {
    const mock = jest.fn();
    render(<YieldFilter selectedYield="" setYieldFilter={mock} />);
    const label = await screen.findByText(/yield range/i);
    expect(label).toBeInTheDocument();
  });

  test("check that set function is called with correct params on change", async () => {
    const mock = jest.fn();
    render(<YieldFilter selectedYield="" setYieldFilter={mock} />);

    const allLabel = await screen.findByText(/yield range/i);
    userEvent.click(allLabel);
    const lessThanOne = await screen.findByText(/less than 1%/i);
    userEvent.click(lessThanOne);
    expect(mock).toHaveBeenCalledWith(yieldFiltersMap["Less than 1%"]);

    userEvent.click(lessThanOne);
    const oneToThree = await screen.findByText(/1% to 3%/i);
    userEvent.click(oneToThree);
    expect(mock).toHaveBeenCalledWith(yieldFiltersMap["1% to 3%"]);

    userEvent.click(oneToThree);
    const threeToFive = await screen.findByText(/3% to 5%/i);
    userEvent.click(threeToFive);
    expect(mock).toHaveBeenCalledWith(yieldFiltersMap["3% to 5%"]);

    userEvent.click(threeToFive);
    const fiveToTen = await screen.findByText(/5% to 10%/i);
    userEvent.click(fiveToTen);
    expect(mock).toHaveBeenCalledWith(yieldFiltersMap["5% to 10%"]);

    userEvent.click(fiveToTen);
    const tenPlus = await screen.findByText(/10% or more/i);
    userEvent.click(tenPlus);
    expect(mock).toHaveBeenCalledWith(yieldFiltersMap["10% or more"]);

    userEvent.click(tenPlus);
    userEvent.click(await screen.findByText(/none/i));
    // Check that it was called with funds AssetClass
    expect(mock).toHaveBeenCalledWith(yieldFiltersMap[""]);
  });
});
