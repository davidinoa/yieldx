import { Direction } from "@bondhouse/prices";

// eslint-disable-next-line @typescript-eslint/no-empty-function,no-shadow
function PriceAssetApi() {}

PriceAssetApi.prototype.priceAsset = () => {
  return Promise.resolve({
    data: {
      prices: []
    }
  });
};

export { PriceAssetApi, Direction };
