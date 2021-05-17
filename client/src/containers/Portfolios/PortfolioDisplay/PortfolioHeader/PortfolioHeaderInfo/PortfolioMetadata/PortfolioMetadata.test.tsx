import React from "react";
import { render } from "test/utils";
import PortfolioMetadata from "./PortfolioMetadata";

describe("PortfolioMetadata", () => {
  test("Displays targetYield as percentage and formats decimals when they exist", () => {
    const { asFragment, rerender } = render(
      <PortfolioMetadata
        targetYield={5}
        targetIncome={100}
        allocation={{
          minimumWeight: 0.05,
          maximumWeight: 0.25
        }}
      />
    );
    // Target yield should be shown as "5%"
    expect(asFragment()).toMatchSnapshot();

    rerender(
      <PortfolioMetadata
        targetYield={5.25}
        targetIncome={100}
        allocation={{
          minimumWeight: 0.05,
          maximumWeight: 0.25
        }}
      />
    );
    // Target yield should be shown as "5.25%"
    expect(asFragment()).toMatchSnapshot();

    rerender(
      <PortfolioMetadata
        targetYield={5.23333333}
        targetIncome={100}
        allocation={{
          minimumWeight: 0.05,
          maximumWeight: 0.25
        }}
      />
    );
    // Target yield should be shown as "5.23%"
    expect(asFragment()).toMatchSnapshot();
  });

  test("Target income should display as $ value and be formatted with commas and decimals", () => {
    const { asFragment, rerender } = render(
      <PortfolioMetadata
        targetYield={5}
        targetIncome={100}
        allocation={{
          minimumWeight: 0.05,
          maximumWeight: 0.25
        }}
      />
    );
    // Target income should be shown as "$100.00"
    expect(asFragment()).toMatchSnapshot();

    rerender(
      <PortfolioMetadata
        targetYield={5}
        targetIncome={10_250}
        allocation={{
          minimumWeight: 0.05,
          maximumWeight: 0.25
        }}
      />
    );
    // Target income should be shown as "$10,000.00"
    expect(asFragment()).toMatchSnapshot();

    rerender(
      <PortfolioMetadata
        targetYield={5}
        targetIncome={1_510_250.25}
        allocation={{
          minimumWeight: 0.05,
          maximumWeight: 0.25
        }}
      />
    );
    // Target income should be shown as "$1,510,250.25"
    expect(asFragment()).toMatchSnapshot();
  });

  test("Allocations should be multiplied by 100 and replace undefined values with defaults", () => {
    const { asFragment, rerender } = render(
      <PortfolioMetadata
        targetYield={5}
        targetIncome={100}
        allocation={{
          minimumWeight: 0.075,
          maximumWeight: 0.3
        }}
      />
    );
    // Min should be "7.5% Max should be "30%"
    expect(asFragment()).toMatchSnapshot();

    rerender(
      <PortfolioMetadata
        targetYield={5}
        targetIncome={10_250}
        allocation={{
          minimumWeight: 0.05
        }}
      />
    );
    // Min should be "5% Max should be "25%"
    expect(asFragment()).toMatchSnapshot();
  });
});
