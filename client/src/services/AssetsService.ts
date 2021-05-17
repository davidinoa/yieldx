import { Asset, AssetsApi } from "@bondhouse/rover-universe";

/**
 * AssetsService is a caching pass-through
 * around the universe's AssetsApi
 *
 * Components that require assets data should use this service
 * to avoid repeated network calls
 */
export class AssetsService {
  private assetsApi: AssetsApi = new AssetsApi();

  private readonly assets: Record<string, Asset>;

  constructor() {
    this.assets = {};
  }

  async getAsset(assetId: string): Promise<Asset> {
    if (this.assets[assetId]) {
      return this.assets[assetId];
    }
    const {
      data: { asset }
    } = await this.assetsApi.getAsset(assetId);
    this.assets[asset.id] = asset;
    return asset;
  }

  async getAssets(assetIds: string[]): Promise<{ [id: string]: Asset }> {
    const results: { [assetId: string]: Asset } = {};
    // find missing assets from cache
    const missingAssetIds = assetIds.filter(assetId => !this.assets[assetId]);
    if (missingAssetIds.length === 0) {
      return this.assets;
    }
    const { data } = await this.assetsApi.getAssets({
      assetIds: missingAssetIds
    });
    data.assets.forEach((asset: Asset) => {
      this.assets[asset.id] = asset;
    });
    assetIds.forEach((assetId: string) => {
      results[assetId] = this.assets[assetId];
    });
    return results;
  }

  async getAssetsAsArray(assetIds: string[]): Promise<Asset[]> {
    const assets = await this.getAssets(assetIds);
    return assetIds
      .map(assetId => assets[assetId])
      .filter(it => it !== undefined);
  }
}
