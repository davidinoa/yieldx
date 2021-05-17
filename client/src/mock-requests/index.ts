import { AppType } from "@bondhouse/position-management";
import { PortfolioType as IncPortfolioType } from "@bondhouse/income-portfolios";
import { rest } from "msw";
import {
  CreateOrderRequest,
  CreateOrderResponse
} from "@bondhouse/order-management";
import { createGetPortfolioHandler } from "./position-management/createGetPortfolioHandler";
import { createGetOrdersHandler } from "./order-management/createGetOrdersHandler";
import { createGetPortfolioInstructionHandler } from "./investors/createGetPortfolioInstructionsHandler";
import { defaultGetInvestor } from "./investors/defaultGetInvestor";
import { getCashPortfolioHandler } from "./position-management/getCashPortfolio";
import { defaultGetApexAccount } from "./investors/defaultGetApexAccount";
import { cancelOrderOk } from "./order-management/cancelOrderOk";
import { defaultGetInvestorInstructions } from "./investors/defaultGetInvestorInstructions";
import createPortfolioObject from "./position-management/util/createMockPortfolio";
import { createGetPortfolioMappingHandler } from "./income-portfolios/createGetPortfolioMappingHandler";
import {
  createGetProposalHandler,
  createMockProposal
} from "./income-portfolios/createGetProposalHandler";
import { getFundAssets } from "./rover-universe/getFundAssets";
import { getTrades } from "./position-management/getTrades";

export default [
  getFundAssets,
  cancelOrderOk,
  getTrades,
  rest.patch(
    "/apis/position-management/v1/portfolios/mock-*",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }
  ),

  rest.post(
    "/apis/order-management/v1/portfolios/mock-*/orders",
    (req, res, ctx) => {
      const response: CreateOrderResponse = {
        order: {
          assetId: (req.body as CreateOrderRequest).assetId,
          createdAt: "",
          id: "",
          portfolioId: "",
          quantity: (req.body as CreateOrderRequest).quantity
        }
      };
      return res(ctx.status(200), ctx.json(response));
    }
  ),
  createGetOrdersHandler({
    portfolioId: "mock-bond-portfolio-id",
    orders: [
      {
        id: "mock-order-1",
        portfolioId: "mock-portfolio-id",
        assetId: "mock-asset-1",
        quantity: 4,
        createdAt: ""
      },
      {
        id: "mock-order-2",
        portfolioId: "mock-portfolio-id",
        assetId: "mock-asset-1",
        quantity: -4,
        createdAt: ""
      },
      {
        id: "mock-order-3",
        portfolioId: "mock-portfolio-id",
        assetId: "mock-asset-3",
        quantity: 4,
        createdAt: ""
      },
      {
        id: "mock-order-4",
        portfolioId: "mock-portfolio-id",
        assetId: "mock-asset-4",
        quantity: 2,
        createdAt: ""
      }
    ]
  }),
  createGetPortfolioHandler(
    createPortfolioObject({
      app: AppType.CUSTOM,
      id: "mock-bond-portfolio-id",
      name: "MOCK BOND PORTFOLIO",
      positions: [
        {
          id: "0f7b424e-4cc7-4ebb-ad9b-709a97a64d66",
          assetId: "0f7b424e-4cc7-4ebb-ad9b-709a97a64d66",
          quantity: 135,
          portfolioId: "mock-bond-portfolio-id",
          settled: 135,
          createdAt: "2020-09-23T14:13:42.837831Z",
          updatedAt: "2020-09-23T14:13:42.837831Z"
        },
        {
          id: "8b27f546-c192-4f47-b6d7-047e87a592d1",
          assetId: "8b27f546-c192-4f47-b6d7-047e87a592d1",
          quantity: 148,
          portfolioId: "mock-bond-portfolio-id",
          settled: 148,
          createdAt: "2020-09-23T14:13:45.929085Z",
          updatedAt: "2020-09-23T14:13:45.929085Z"
        },
        {
          id: "73bf2335-e207-4f70-bb0c-2cb95a954a2f",
          assetId: "73bf2335-e207-4f70-bb0c-2cb95a954a2f",
          quantity: 111,
          portfolioId: "mock-bond-portfolio-id",
          settled: 111,
          createdAt: "2020-09-23T14:13:43.475660Z",
          updatedAt: "2020-09-23T14:13:43.475660Z"
        },
        {
          id: "CASH-USD",
          assetId: "USD",
          quantity: 0,
          portfolioId: "mock-bond-portfolio-id",
          settled: 0,
          createdAt: "2020-09-23T14:13:40.183314Z",
          updatedAt: "2020-09-23T14:13:40.183314Z",
          metadata: {}
        }
      ]
    })
  ),
  createGetOrdersHandler({
    portfolioId: "mock-bond-portfolio-id",
    orders: []
  }),
  createGetPortfolioInstructionHandler({
    portfolioId: "mock-bond-portfolio-id",
    investorId: "mock-investor-id",
    externalEntityId: "mock-apex-id",
    id: "mock-instructions-id",
    cashOnly: false
  }),
  createGetPortfolioHandler(
    createPortfolioObject({
      app: AppType.INPAAS,
      id: "mock-fund-portfolio-id",
      name: "MOCK INPAAS PORTFOLIO",
      positions: [
        {
          id: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
          assetId: "ac1ab82c-c1c4-4d34-83fa-df78c79404bf",
          quantity: 15946,
          portfolioId: "mock-fund-portfolio-id",
          createdAt: "2020-09-23T16:41:29.212724Z",
          updatedAt: "2020-09-23T16:41:29.212724Z"
        },
        {
          id: "3eb44c46-e309-41bd-a87c-d190bb0269bb",
          assetId: "3eb44c46-e309-41bd-a87c-d190bb0269bb",
          quantity: 2169,
          portfolioId: "mock-fund-portfolio-id",
          createdAt: "2020-09-23T16:41:29.212724Z",
          updatedAt: "2020-09-23T16:41:29.212724Z"
        },
        {
          id: "ff3cee29-0863-44c1-b71b-fd5fda1bea5f",
          assetId: "ff3cee29-0863-44c1-b71b-fd5fda1bea5f",
          quantity: 30824,
          portfolioId: "mock-fund-portfolio-id",
          createdAt: "2020-09-23T16:41:29.212724Z",
          updatedAt: "2020-09-23T16:41:29.212724Z"
        },
        {
          id: "f601e45f-0b64-45d6-83aa-990d2631b064",
          assetId: "f601e45f-0b64-45d6-83aa-990d2631b064",
          quantity: 46407,
          portfolioId: "mock-fund-portfolio-id",
          createdAt: "2020-09-23T16:41:29.212724Z",
          updatedAt: "2020-09-23T16:41:29.212724Z"
        },
        {
          id: "USD",
          assetId: "USD",
          quantity: 20002.26740000001,
          portfolioId: "mock-fund-portfolio-id"
        }
      ]
    })
  ),
  createGetOrdersHandler({
    portfolioId: "mock-fund-portfolio-id",
    orders: []
  }),
  createGetPortfolioInstructionHandler({
    portfolioId: "mock-fund-portfolio-id",
    investorId: "mock-investor-id",
    externalEntityId: "mock-apex-id",
    id: "mock-instructions-id",
    cashOnly: false
  }),
  createGetPortfolioMappingHandler({
    portfolioId: "mock-fund-portfolio-id",
    proposalId: "mock-proposal-id",
    portfolioType: "LIVE" as IncPortfolioType
  }),
  createGetProposalHandler(
    createMockProposal({
      id: "mock-proposal-id",
      portfolioId: "mock-fund-portfolio-id",
      assetIds: []
    })
  ),
  defaultGetInvestor,
  defaultGetInvestorInstructions,
  getCashPortfolioHandler({
    portfolioId: "mock-cash-portfolio-id",
    cashAvailable: 900_000
  }),
  defaultGetApexAccount,
  cancelOrderOk
  // limitPortfolioList
];
