import {
  AppType,
  ExternalPortfolioApi,
  PortfoliosApi,
  PortfolioStatus
} from "@bondhouse/position-management";
import {
  PortfolioMappingsApi,
  ProposalsApi
} from "@bondhouse/income-portfolios";
import { OrdersApi } from "@bondhouse/order-management";
import { createPortfolioService } from "services";
import YieldXPortfolio from "models/YieldXPortfolio";
import { INDIVIDUAL_INVESTOR } from "__mocks__/@bondhouse/investor/__fixtures__";
import { PROPOSAL_MOCK } from "__mocks__/@bondhouse/income-portfolios/__fixtures__";
import { MOCK_BESTFIT_PORTFOLIO_ASSETS } from "__mocks__/@bondhouse/position-management/__fixtures__";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mockGeneratedId")
}));

describe.skip("testing create portfolio functionalities", () => {
  const portfoliosApi = new PortfoliosApi();
  // const proposalsApi = new ProposalsApi();
  const ordersApi = new OrdersApi();
  const externalPortfolioApi = new ExternalPortfolioApi();
  const portfolioMappingsApi = new PortfolioMappingsApi();
  const selectedInvestor = INDIVIDUAL_INVESTOR;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("execute live inpaas portfolio", async () => {
    const inpaasPortfolio = YieldXPortfolio.fromInpaasProposal(
      PROPOSAL_MOCK,
      []
    );
    // const createPortfolioService = new CreatePortfolioService(
    //   portfoliosApi,
    //   ordersApi,
    //   externalPortfolioApi,
    //   portfolioMappingsApi
    // );
    const executedPortfolio = await createPortfolioService.executeLivePortfolio(
      {
        referencePrices: {},
        executionPreferences: {
          goodTillCancel: true,
          fullFillRequired: true
        },
        selectedInvestor,
        selectedPortfolio: inpaasPortfolio
      }
    );

    // Check returned portfolio ID matches mock LIVE portfolio
    expect(executedPortfolio.id).toBe("samplePortfolioId");

    // Check internal fund transfers working properly
    expect(portfoliosApi.internalPortfolioFundTransfer).toHaveBeenCalledTimes(
      1
    );
    expect(portfoliosApi.internalPortfolioFundTransfer).toHaveBeenCalledWith(
      "investorId",
      "samplePortfolioId",
      {
        currency: "USD",
        quantity: inpaasPortfolio.totalMarketValue
      }
    );

    // Check rover preferences being updated
    expect(ordersApi.createOrder).toHaveBeenCalledTimes(
      inpaasPortfolio.positions.length
    );
  });

  test("execute live custom portfolio", async () => {
    const customPortfolio = YieldXPortfolio.fromAssets(
      "mockBestFitPortfolioId",
      MOCK_BESTFIT_PORTFOLIO_ASSETS
    );
    // const createPortfolioService = new CreatePortfolioService(
    //   portfoliosApi,
    //   ordersApi,
    //   externalPortfolioApi,
    //   portfolioMappingsApi
    // );
    const executedPortfolio = await createPortfolioService.executeLivePortfolio(
      {
        referencePrices: {},
        executionPreferences: {
          goodTillCancel: true,
          fullFillRequired: true
        },
        selectedPortfolio: customPortfolio,
        selectedInvestor
      }
    );

    // Check returned portfolio ID matches mock LIVE portfolio
    expect(executedPortfolio.id).toBe("samplePortfolioId");

    // Check live portfolio was created
    expect(portfoliosApi.createPortfolioForInvestor).toHaveBeenCalledTimes(1);
    // Check internal fund transfers working properly
    expect(portfoliosApi.internalPortfolioFundTransfer).toHaveBeenCalledTimes(
      1
    );
    expect(portfoliosApi.internalPortfolioFundTransfer).toHaveBeenCalledWith(
      "investorId",
      "samplePortfolioId",
      {
        currency: "USD",
        quantity: customPortfolio.totalMarketValue
      }
    );

    // Check rover preferences being updated
    expect(ordersApi.createOrder).toHaveBeenCalledTimes(
      customPortfolio.positions.length
    );
  });

  test("paper inpaas portfolio", async () => {
    const inpaasPortfolio = YieldXPortfolio.fromInpaasProposal(
      PROPOSAL_MOCK,
      []
    );
    // const createPortfolioService = new CreatePortfolioService(
    //   portfoliosApi,
    //   ordersApi,
    //   externalPortfolioApi,
    //   portfolioMappingsApi
    // );
    const id = await createPortfolioService.savePaperPortfolio({
      selectedPortfolio: inpaasPortfolio
    });

    // Check returned portfolio ID matches mock LIVE portfolio
    expect(id).toBe("mockGeneratedId");
  });

  test("paper custom portfolio", async () => {
    const customPortfolio = YieldXPortfolio.fromAssets(
      "mockBestFitPortfolioId",
      MOCK_BESTFIT_PORTFOLIO_ASSETS
    );
    // const createPortfolioService = new CreatePortfolioService(
    //   portfoliosApi,
    //   ordersApi,
    //   externalPortfolioApi,
    //   portfolioMappingsApi
    // );
    const id = await createPortfolioService.savePaperPortfolio({
      selectedPortfolio: customPortfolio
    });
    expect(id).not.toBe(customPortfolio.getId());

    expect(externalPortfolioApi.createExternalPortfolio).toHaveBeenCalledTimes(
      1
    );
    expect(externalPortfolioApi.createExternalPortfolio).toHaveBeenCalledWith({
      portfolio: {
        ...customPortfolio.asPmsPortfolio(),
        app: AppType.CUSTOM,
        id: "mockGeneratedId",
        createdAt: `${new Date().toISOString().split(".")[0]}Z`,
        updatedAt: `${new Date().toISOString().split(".")[0]}Z`
      }
    });
  });

  test("update portfolio status", async () => {
    const customPortfolio = YieldXPortfolio.fromAssets(
      "mockBestFitPortfolioId",
      MOCK_BESTFIT_PORTFOLIO_ASSETS
    );
    // const createPortfolioService = new CreatePortfolioService(
    //   portfoliosApi,
    //   ordersApi,
    //   externalPortfolioApi,
    //   portfolioMappingsApi
    // );

    const id = await createPortfolioService.savePaperPortfolio({
      selectedPortfolio: customPortfolio
    });

    expect(id).not.toBe(customPortfolio.getId());
    expect(customPortfolio.getStatus()).toBeTruthy();

    const result = await createPortfolioService.updateStatus(
      customPortfolio.getId(),
      PortfolioStatus.TERMINATED
    );

    expect(result).toBeTruthy();
  });
});
