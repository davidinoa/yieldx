import getAssetType from "components/Navbar/ShoppingCartNav/CartWindow/getAssetType";
import {
  closedEndFund,
  corporateBond,
  exchangeTradedFund,
  municipalBond,
  mutualFund
} from "__mocks__/@bondhouse/rover-universe/__fixtures__";

describe("Test asset type abbreviation display", () => {
  test("Should display MUTF for mutual fund", () => {
    expect(getAssetType(mutualFund)).toBe("MUTF");
  });

  test("Should display ETF for exchange traded fund", () => {
    expect(getAssetType(exchangeTradedFund)).toBe("ETF");
  });

  test("Should display CEF for closed end fund", () => {
    expect(getAssetType(closedEndFund)).toBe("CEF");
  });

  test("Should display BOND for bonds", () => {
    expect(getAssetType(municipalBond)).toBe("BOND");
    expect(getAssetType(corporateBond)).toBe("BOND");
  });
});
