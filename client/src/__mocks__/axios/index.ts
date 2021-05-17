
const axios = {
  request: jest.fn(),
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        portfolioMapping: {
          institution: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
          proposalId: "proposalId",
          portfolioId: "portfolioId"
        }
      }
    })
  )
};
export default axios;
