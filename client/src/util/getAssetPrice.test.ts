import { Price, PriceAssetRequest } from "@bondhouse/prices";
import {
  corporateBond,
  mutualFund
} from "__mocks__/@bondhouse/rover-universe/__fixtures__";
import getAssetPrice from "./getAssetPrice";

jest.mock("@bondhouse/prices", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function PriceAssetApi() {}

  PriceAssetApi.prototype.priceAsset = jest.fn((req: PriceAssetRequest) => {
    let prices: Array<Price> = [];
    if (req.assetSubtype === "Mutual Funds")
      prices = [
        {
          price: 25
        }
      ];
    if (req.quantity !== undefined)
      prices = [
        {
          price: 200
        }
      ];
    return Promise.resolve({
      data: {
        prices
      }
    });
  });
  return {
    Direction: {
      Buy: "Buy",
      Sell: "Sell"
    },
    PriceAssetApi
  };
});

describe("getAssetPrice", () => {
  it("Should return null if api response is empty array", async () => {
    expect(await getAssetPrice(corporateBond)).toBe(null);
  });

  it("Should return price object returned from backend", async () => {
    expect(await getAssetPrice(mutualFund)).toStrictEqual({
      price: 25
    });
  });

  it("Should be using 2nd param to make API call", async () => {
    expect(await getAssetPrice(corporateBond, 25)).toStrictEqual({
      price: 200
    });
  });
});
