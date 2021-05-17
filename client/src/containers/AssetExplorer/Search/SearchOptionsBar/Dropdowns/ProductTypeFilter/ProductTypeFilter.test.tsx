import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../../../test/utils";
import ProductTypeFilter, { assetClasses } from "./ProductTypeFilter";

describe("Product type drop down tests", () => {
  test("mounts default all product types", async () => {
    const mock = jest.fn();
    render(<ProductTypeFilter selectedClass="all" setAssetClass={mock} />);
    const label = await screen.findByText(/product types/i);
    expect(label).toBeInTheDocument();
  });

  test("check that set function is called with correct params on change", async () => {
    const mock = jest.fn();
    render(<ProductTypeFilter selectedClass="all" setAssetClass={mock} />);

    // Change from all to mutual funds
    const allLabel = await screen.findByText(/product types/i);
    userEvent.click(allLabel);
    const mutualFundsLabel = await screen.findByText(/mutual funds/i);
    userEvent.click(mutualFundsLabel);
    // Check that it was called with mutualFunds AssetClass
    expect(mock).toHaveBeenCalledWith(assetClasses.mutualFunds);
    expect(mock).toHaveBeenCalledWith(
      expect.objectContaining({
        tradabilityFilters: {
          "universes.liquid": {
            equalsBoolean: true
          }
        }
      })
    );

    // Change from mutual funds to cef
    userEvent.click(mutualFundsLabel);
    const closedEndFundsLabel = await screen.findByText(/closed end funds/i);
    userEvent.click(closedEndFundsLabel);
    // Check that it was called with cefs AssetClass
    expect(mock).toHaveBeenCalledWith(assetClasses.cefs);
    expect(mock).toHaveBeenCalledWith(
      expect.objectContaining({
        tradabilityFilters: {
          "universes.liquid": {
            equalsBoolean: true
          }
        }
      })
    );

    // Change from cef to etf
    userEvent.click(closedEndFundsLabel);
    const exchangeTradedFundsLabel = await screen.findByText(
      /exchange traded funds/i
    );
    userEvent.click(exchangeTradedFundsLabel);
    // Check that it was called with etfs AssetClass
    expect(mock).toHaveBeenCalledWith(assetClasses.etfs);
    expect(mock).toHaveBeenCalledWith(
      expect.objectContaining({
        tradabilityFilters: {
          "universes.liquid": {
            equalsBoolean: true
          }
        }
      })
    );

    // Change from etf to funds
    userEvent.click(exchangeTradedFundsLabel);
    const fundsLabel = await screen.findByText(/^funds$/i);
    userEvent.click(fundsLabel);
    // Check that it was called with funds AssetClass
    expect(mock).toHaveBeenCalledWith(assetClasses.funds);
    expect(mock).toHaveBeenCalledWith(
      expect.objectContaining({
        tradabilityFilters: {
          "universes.liquid": {
            equalsBoolean: true
          }
        }
      })
    );

    // Change from funds to corporates
    userEvent.click(fundsLabel);
    const corporateBondsLabel = await screen.findByText(/corporate bonds/i);
    userEvent.click(corporateBondsLabel);
    // Check that it was called with corporates AssetClass
    expect(mock).toHaveBeenCalledWith(assetClasses.corporates);
    expect(mock).toHaveBeenCalledWith(
      expect.objectContaining({
        tradabilityFilters: {
          "universes.liquid": {
            equalsBoolean: true
          }
        }
      })
    );

    // Change from corporates to munis
    userEvent.click(corporateBondsLabel);
    const muniBondsLabel = await screen.findByText(/municipal bonds/i);
    userEvent.click(muniBondsLabel);
    // Check that it was called with funds AssetClass
    expect(mock).toHaveBeenCalledWith(assetClasses.munis);
    expect(mock).toHaveBeenCalledWith(
      expect.objectContaining({
        tradabilityFilters: {
          "universes.liquid": {
            equalsBoolean: true
          }
        }
      })
    );

    // Change from munis to bonds
    userEvent.click(muniBondsLabel);
    const bondsLabel = await screen.findByText(/^bonds$/i);
    userEvent.click(bondsLabel);
    // Check that it was called with funds AssetClass
    expect(mock).toHaveBeenCalledWith(assetClasses.bonds);
    expect(mock).toHaveBeenCalledWith(
      expect.objectContaining({
        tradabilityFilters: {
          "universes.liquid": {
            equalsBoolean: true
          }
        }
      })
    );
  });
});
