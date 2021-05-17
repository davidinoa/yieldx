export function WhitelistsApi() {
  return {
    async getWhitelist() {
      return { data: { assetIds: [] } };
    }
  };
}

export { BestFitCreditQuality } from "@bondhouse/rover-whitelist";
