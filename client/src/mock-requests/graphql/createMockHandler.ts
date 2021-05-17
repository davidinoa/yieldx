import { rest } from "msw";
import {
  AnalyzePortfolioResponse,
  CalculateIntradayReturnResponse,
  CreateOrderResponse,
  GetAllInventoriesResponse,
  GetAssetsResponse,
  GetCartResponse,
  GetComparisonsResponse,
  GetCurrentUserResponse,
  GetDeliveryInstructionsByInvestorIdResponse,
  GetExternalPortfolioResponse,
  GetExternalPortfoliosResponse,
  GetInventoryMappingResponse,
  GetInventoryResponse,
  GetInvestorsResponse,
  GetLinkedBankAccountsResponse,
  GetMinMaxYieldResponse,
  GetOrdersResponse,
  GetPortfolioMappingResponse2,
  GetPortfolioResponse2,
  GetPortfoliosResponse,
  GetProposalResponse,
  PriceAssetResponse,
  Scalars,
  UpdatePortfolioResponse
} from "providers/graphql/hooks";
import logger from "models/Logger";

interface QueryMocks {
  investorGetLinkedBankAccounts?: GetLinkedBankAccountsResponse;
  incomePortfoliosGetComparisons?: GetComparisonsResponse;
  incomePortfoliosGetMinMaxYield?: GetMinMaxYieldResponse;
  incomePortfoliosGetMinMaxRisk?: {
    __typename?: "GetMinMaxRiskResponse";
    maxRisk: Scalars["Float"];
    minRisk: Scalars["Float"];
  };
  roverPortfolioAnalyzerCalculateIntradayReturn?: CalculateIntradayReturnResponse;
  incomePortfoliosGetProposal?: GetProposalResponse;
  investorGets?: GetInvestorsResponse;
  orderManagementGetOrders?: GetOrdersResponse;
  investorGetDeliveryInstructionsById?: GetDeliveryInstructionsByInvestorIdResponse;
  positionManagementGetPortfolio?: GetPortfolioResponse2;
  pricesPriceAsset?: PriceAssetResponse;
  iamGetCurrentUser?: GetCurrentUserResponse;
  roverPreferencesGetCart?: GetCartResponse;
  roverUniverseGetAssets?: GetAssetsResponse;
  positionManagementGetPortfolios?: GetPortfoliosResponse;
  positionManagementGetExternalPortfolios?: GetExternalPortfoliosResponse;
  getInstitutionInventoryMapping?: GetInventoryMappingResponse;
  getAllInventories?: GetAllInventoriesResponse;
  getInventory?: GetInventoryResponse;
  positionManagementGetExternalPortfolio?: GetExternalPortfolioResponse;
  roverPortfolioAnalyzerAnalyzePortfolio?: AnalyzePortfolioResponse;
  incomePortfoliosGetPortfolioMapping?: GetPortfolioMappingResponse2;
  postPortfolioOrders?: CreateOrderResponse;
  patchPortfolio?: UpdatePortfolioResponse;
}

function createMockHandler({
  investorGetLinkedBankAccounts,
  investorGets,
  incomePortfoliosGetComparisons,
  roverPortfolioAnalyzerCalculateIntradayReturn,
  investorGetDeliveryInstructionsById,
  positionManagementGetPortfolio,
  roverPreferencesGetCart,
  iamGetCurrentUser,
  positionManagementGetExternalPortfolios,
  positionManagementGetPortfolios,
  roverUniverseGetAssets,
  getInventory,
  getAllInventories,
  getInstitutionInventoryMapping,
  positionManagementGetExternalPortfolio,
  incomePortfoliosGetPortfolioMapping,
  roverPortfolioAnalyzerAnalyzePortfolio,
  incomePortfoliosGetProposal,
  pricesPriceAsset,
  incomePortfoliosGetMinMaxYield,
  incomePortfoliosGetMinMaxRisk,
  postPortfolioOrders,
  patchPortfolio,
  orderManagementGetOrders
}: QueryMocks) {
  return rest.post("/graphql", (req, res, ctx) => {
    const resp: Array<Record<string, any>> = [];
    logger.info(JSON.stringify(req.body));
    const operations = (req.body as unknown) as Array<{
      operationName: string;
    }>;
    operations.forEach((operation, i) => {
      if (
        operation.operationName === "investorGetLinkedBankAccounts" &&
        investorGetLinkedBankAccounts
      )
        resp.push({
          data: {
            investorGetLinkedBankAccounts
          }
        });
      if (
        operation.operationName === "orderManagementGetOrders" &&
        orderManagementGetOrders
      )
        resp.push({
          data: {
            orderManagementGetOrders
          }
        });

      if (
        operation.operationName === "incomePortfoliosGetMinMaxRisk" &&
        incomePortfoliosGetMinMaxRisk
      ) {
        resp.push({
          data: {
            incomePortfoliosGetMinMaxRisk
          }
        });
      }
      if (
        operation.operationName === "incomePortfoliosGetMinMaxYield" &&
        incomePortfoliosGetMinMaxYield
      ) {
        resp.push({
          data: {
            incomePortfoliosGetMinMaxYield
          }
        });
      }
      if (
        operation.operationName === "incomePortfoliosGetComparisons" &&
        incomePortfoliosGetComparisons
      ) {
        resp.push({
          data: {
            incomePortfoliosGetComparisons
          }
        });
      }
      if (
        operation.operationName ===
          "roverPortfolioAnalyzerCalculateIntradayReturn" &&
        roverPortfolioAnalyzerCalculateIntradayReturn
      ) {
        resp.push({
          data: {
            roverPortfolioAnalyzerCalculateIntradayReturn
          }
        });
      }
      if (
        operation.operationName === "iamGetCurrentUser" &&
        iamGetCurrentUser
      ) {
        resp.push({
          data: {
            iamGetCurrentUser
          }
        });
      }
      if (
        operation.operationName === "positionManagementGetExternalPortfolios" &&
        positionManagementGetExternalPortfolios
      )
        resp.push({
          data: {
            positionManagementGetExternalPortfolios
          }
        });
      if (
        operation.operationName === "positionManagementGetPortfolios" &&
        positionManagementGetPortfolios
      )
        resp.push({
          data: {
            positionManagementGetPortfolios
          }
        });
      if (
        operation.operationName === "roverUniverseGetAssets" &&
        roverUniverseGetAssets
      )
        resp.push({
          data: {
            roverUniverseGetAssets
          }
        });
      if (operation.operationName === "getInventory" && getInventory)
        resp.push({
          data: {
            getInventory
          }
        });
      if (
        operation.operationName === "roverPreferencesGetCart" &&
        roverPreferencesGetCart
      )
        resp.push({
          data: {
            roverPreferencesGetCart
          }
        });
      if (operation.operationName === "getAllInventories" && getAllInventories)
        resp.push({
          data: { getAllInventories }
        });
      if (
        operation.operationName === "getInstitutionInventoryMapping" &&
        getInstitutionInventoryMapping
      )
        resp.push({
          data: { getInstitutionInventoryMapping }
        });
      if (
        operation.operationName === "positionManagementGetExternalPortfolio" &&
        positionManagementGetExternalPortfolio
      )
        resp.push({
          data: { positionManagementGetExternalPortfolio }
        });
      if (
        operation.operationName === "incomePortfoliosGetPortfolioMapping" &&
        incomePortfoliosGetPortfolioMapping
      )
        resp.push({
          data: { incomePortfoliosGetPortfolioMapping }
        });
      if (
        operation.operationName === "roverPortfolioAnalyzerAnalyzePortfolio" &&
        roverPortfolioAnalyzerAnalyzePortfolio
      )
        resp.push({
          data: { roverPortfolioAnalyzerAnalyzePortfolio }
        });
      if (operation.operationName === "pricesPriceAsset" && pricesPriceAsset)
        resp.push({
          data: { pricesPriceAsset }
        });
      if (
        operation.operationName === "incomePortfoliosGetProposal" &&
        incomePortfoliosGetProposal
      )
        resp.push({
          data: { incomePortfoliosGetProposal }
        });
      if (
        operation.operationName === "postPortfolioOrders" &&
        postPortfolioOrders
      )
        resp.push({
          data: {
            postPortfolioOrders: {
              ...postPortfolioOrders,
              id: postPortfolioOrders.order.id + i
            }
          }
        });
      if (operation.operationName === "patchPortfolio" && patchPortfolio)
        resp.push({
          data: { patchPortfolio }
        });
      if (operation.operationName === "investorGets" && investorGets)
        resp.push({
          data: { investorGets }
        });
      if (
        operation.operationName === "investorGetDeliveryInstructionsById" &&
        investorGetDeliveryInstructionsById
      )
        resp.push({
          data: { investorGetDeliveryInstructionsById }
        });
      if (
        operation.operationName === "positionManagementGetPortfolio" &&
        positionManagementGetPortfolio
      )
        resp.push({
          data: { positionManagementGetPortfolio }
        });
    });
    if (resp.length > 0) return res(ctx.json(resp));
    return undefined;
  });
}

export default createMockHandler;
