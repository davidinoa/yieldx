import { editPositions } from "recoil-state/editPositions";
import mockYieldXPortfolio from "__mocks__/models/mockYieldXPortfolio";
import { createMemoryHistory } from "history";

describe("editPositions", () => {
  it("Should ", async () => {
    const result = editPositions({
      portfolio: mockYieldXPortfolio,
      setPortfolioData: jest.fn,
      history: createMemoryHistory()
    });
    expect(result).toBeUndefined();
  });
});
