import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../test/utils";
import SearchOptionsBar from "./SearchOptionsBar";
import { ratings } from "./RatingsSlider/RatingsSlider";

describe("SearchOptionsBar", () => {
  test("Should render and mount properly", async () => {
    const rendered = render(
      <SearchOptionsBar
        send={jest.fn()}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
        selectedRatings={ratings}
      />
    );
    expect(rendered).toBeDefined();
  });
  test("Search bar tests", async () => {
    const mock = jest.fn();
    const { rerender } = render(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
      />
    );

    const searchInput = await screen.findByTestId("search-query-input");
    expect(searchInput.getAttribute("value")).toBe("");

    // Check if placeholder is shown
    expect(
      await screen.queryByText(/Search by name, issuer, cusip, or ticker/i)
    ).toBeDefined();

    await userEvent.type(searchInput, "hyg");
    expect(mock).toHaveBeenCalledTimes(3);
    expect(mock).toHaveBeenNthCalledWith(1, { type: "QUERY", query: "h" });
    expect(mock).toHaveBeenNthCalledWith(2, { type: "QUERY", query: "y" });
    expect(mock).toHaveBeenNthCalledWith(3, { type: "QUERY", query: "g" });
    rerender(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query="hyg"
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
      />
    );
    expect(searchInput.getAttribute("value")).toBe("hyg");
    expect(
      await screen.queryByText(/Search by name, issuer, cusip, or ticker/i)
    ).toBe(null);
  });

  test("Yield dropdown should display selected yield label", async () => {
    const mock = jest.fn();
    const { rerender } = render(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
      />
    );

    // when selected yield is undefined
    expect(await screen.queryByText(/Yield range/i)).toBeDefined();

    rerender(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
        selectedYield="Less than 1%"
      />
    );
    expect(await screen.queryByText(/Less than 1%/i)).toBeDefined();

    rerender(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
        selectedYield="1% to 3%"
      />
    );
    expect(await screen.queryByText(/1% to 3%/i)).toBeDefined();

    rerender(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
        selectedYield="3% to 5%"
      />
    );
    expect(await screen.queryByText(/3% to 5%/i)).toBeDefined();

    rerender(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
        selectedYield="5% to 10%"
      />
    );
    expect(await screen.queryByText(/5% to 10%/i)).toBeDefined();

    rerender(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
        selectedYield="10% or more"
      />
    );
    expect(await screen.queryByText(/10% or more/i)).toBeDefined();
  });

  test("Clear all should send correct event", () => {
    const mock = jest.fn();
    render(
      <SearchOptionsBar
        selectedRatings={ratings}
        send={mock}
        query=""
        selectedClass="all"
        tradabilityFilters={{}}
        hideNonTradable
      />
    );
    userEvent.click(screen.getByTestId("clear-all-search-options"));

    expect(mock).toHaveBeenCalledWith({
      type: "CLEAR_ALL"
    });
  });
});
