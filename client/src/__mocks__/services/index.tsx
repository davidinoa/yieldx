import mockAnalysis from "__mocks__/models/mockAnalysis";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import mockAssets from "__mocks__/models/mockAssets";
import fund from "__mocks__/models/assets/fund";
import muni from "__mocks__/models/assets/muni";
import { inpaasFormState as MockinpaasFormState } from "recoil-state/inPaaS";

export { createPortfolioService } from "services";

export const inpaasFormState = MockinpaasFormState;

export const userService = {
  refreshUser: () => ({}),
  subscribe: jest.fn(() => 1),
  unsubscribe: jest.fn(() => undefined),
  getUser: jest.fn(() =>
    Promise.resolve({
      id: "auth0|5ec6119474dfa00cbf1d53cb",
      first: "Institution",
      last: "New User",
      userType: "ADMIN",
      email: "test4@bondhouse.com",
      terms: true,
      institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
      createdAt: "2020-05-21T05:28:52.982380Z",
      updatedAt: "2020-05-21T05:28:52.982380Z",
      status: "ACTIVE"
    })
  )
};
export const portfolioAnalysisService = {
  analyzePortfolio: () => new Promise(res => res(mockAnalysis))
};
export const assetsService = {
  getAsset: async (assetId: string) => mockAssets[assetId],
  getAssetsAsArray: async () => [fund, muni],
  getAssets: async (assetIds: string[]) => assetIds.map(id => mockAssets[id])
};

export const cartService = {
  subscribe: () => undefined,
  unsubscribe: () => undefined,
  clearPortfolioCart: async () => undefined,
  createPortfolioCartItems: async () => [],
  getCart: async () => ({
    id: "mockCart",
    items: [
      {
        assetId: "muni",
        quantity: 0
      }
    ]
  }),
  clear: () => undefined
};

// export const createPortfolioService = new CreatePortfolioService(
//   new PortfoliosApi(),
//   new OrdersApi(),
//   new ExternalPortfolioApi(),
//   new PortfolioMappingsApi()
// );
export const watchListService = {
  subscribe: () => undefined,
  unsubscribe: () => undefined,
  clear: () => undefined,
  getWhitelist: async () => ({
    assetIds: [
      "28b1b01a-2411-40cc-9ac1-6b6552b823de",
      "29fc972e-990a-450f-a5bd-7f463721ca14",
      "733e5eda-48d2-4d12-a8da-8ac21e93e1ec",
      "0f70c740-f364-43b9-b2e3-35e0432ad480",
      "66e09127-e043-4301-b92e-b5eb2865fdfa",
      "86c71e10-cc48-451a-831a-62c78c8c8e81",
      "e8c26fc0-ec32-4ed3-9fc3-788c89ea862e",
      "b6e7f55b-09ac-407e-99dc-acc53de96c36",
      "dd1f9519-1f08-43d5-b1e1-9df85ff3c72f",
      "d5201599-897f-468a-883a-ba0959b31165",
      "a141ff88-f388-4ab7-8ce2-2713641a2bdc",
      "3e6d2230-418c-4e91-b4c9-1cb820f2afa5",
      "e50da8b9-6a9e-4106-96b5-8e28b07b78c9",
      "ecd98645-cfeb-4264-94e4-af7d09df0bdd",
      "cd947370-4764-45d2-9af8-7362e0a44aa1",
      "521ccf67-d597-42fd-ad8a-178837dc10a7",
      "9d62dae2-89ba-4bc1-a5f4-df445be13694",
      "37b54c09-9cbf-40f9-b7c0-49aae73c3c74",
      "b54befc9-7ba3-4e24-b435-50b6b04f7a43",
      "8942a746-0760-4c74-a272-9c5b4eb4c98a",
      "97e9ea72-b5bc-4f35-adc2-7b0c42d41881",
      "e03fa0d9-fb49-40a7-8c52-64dcd2440d29",
      "fb2f086b-9a5d-48fa-b3cc-e45468a741c2",
      "919a27f8-a464-4d32-8f89-65ce982fce44",
      "142cf2df-df56-46ba-ba92-2442e7d1d5af",
      "0a43aab7-891c-4182-ae79-33bd172136b9",
      "7ec722a2-2a9c-423f-aa97-e11362d65301",
      "fb57baac-169b-4c45-86ec-00d9b50c5e30",
      "b1f6bbf1-c558-4361-b45e-d003cd658415",
      "5829c0c1-ad0c-4b07-82fc-4db73a321d21"
    ]
  })
};

export const optimizationService = {
  minimizeRisk: async () => mockYieldXPortfolio,
  maximizeYield: async () => mockYieldXPortfolio
};
