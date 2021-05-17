import { Asset } from "@bondhouse/rover-universe";
import {
  GetByCusipResponse,
  ICEDataApi,
  IncrementalData
} from "@bondhouse/ice-data";
import { AxiosPromise } from "axios";

/**
 * IceDataService is a caching pass-through around the ICE data service
 *
 * Components that require ICE data should use this service to avoid repeated
 * network calls
 */
export class IceDataService {
  private iceDataApi: ICEDataApi;

  private readonly cusipsToPromises: Record<
    string,
    AxiosPromise<GetByCusipResponse>
  >;

  private readonly cusipsToIceData: Record<string, IncrementalData[]>;

  constructor() {
    this.iceDataApi = new ICEDataApi();
    this.cusipsToPromises = {};
    this.cusipsToIceData = {};
  }

  private getOffers(asset: Asset): Promise<IncrementalData[] | undefined> {
    return new Promise((resolve, reject) => {
      // Return null if the asset doesn't have a CUSIP
      const cusip = asset.identifiers?.cusip;
      if (cusip == null) {
        resolve([]);
        return;
      }

      // Return cached offer if available. Note that CUSIPs without offers will be cached as having a value of null.
      const cachedIceData = this.cusipsToIceData[cusip];
      if (cachedIceData !== undefined) {
        resolve(cachedIceData);
        return;
      }

      // Check whether a promise to look up this CUSIP already exists. This can happen when a view quickly re-renders,
      // such as with ag-grid.
      let promise = this.cusipsToPromises[cusip];
      if (promise == null) {
        // If no promise exists at the moment, create a new one that requests data from the ICE data service, and save
        // it to the promises cache
        promise = (this.iceDataApi.getByCusip(
          cusip
        ) as unknown) as AxiosPromise<GetByCusipResponse>;
        this.cusipsToPromises[cusip] = promise;
      }
      promise
        // On success, filter ICE data for offers, cache the result as its numeric price or null, and resolve
        .then(({ data: { iceData } }) => {
          this.cusipsToIceData[cusip] = iceData;
          resolve(iceData);
        })
        // On failure, pass through the rejection
        .catch(reject)
        // Ensure the promises cache is cleared once the promise is resolved or rejected
        .finally(() => delete this.cusipsToPromises[cusip]);
    });
  }

  /**
   * Get the best offer for the provided asset. Wherever possible, this will use cached values.
   *
   * @param asset - The asset for which to retrieve the offer
   */
  getBestOffer(asset: Asset): Promise<number | null> {
    return new Promise((resolve, reject) => {
      this.getOffers(asset)
        .then(iceData => {
          if (iceData == null) {
            resolve(null);
          } else {
            let bestOffer = Number.MAX_VALUE;
            iceData.forEach(x => {
              if (x.entryType === "OFFER" && x.entryPrice < bestOffer) {
                bestOffer = x.entryPrice;
              }
            });
            if (bestOffer === Number.MAX_VALUE) {
              resolve(null);
            } else {
              resolve(bestOffer);
            }
          }
        })
        .catch(reject);
    });
  }
}
