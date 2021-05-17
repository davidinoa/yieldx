import {
  ExternalPortfolioApi,
  PortfoliosApi
} from "@bondhouse/position-management";
import { PortfolioMappingsApi } from "@bondhouse/income-portfolios";
import { WhitelistsApi } from "@bondhouse/rover-whitelist";
import { OrdersApi } from "@bondhouse/order-management";
import { CreatePortfolioService } from "./CreatePortfolioService";
import { CartService } from "./CartService";
import { AssetsService } from "./AssetsService";
import { UserService } from "./UserService";
import { OptimizationService } from "./OptimizationService";
import { WatchListService } from "./WatchListService";
import OrdersService from "./OrdersService";
import { PortfolioAnalysisService } from "./PortfolioAnalysisService";
import { IceDataService } from "./IceDataService";

export const assetsService = new AssetsService();
export const cartService = new CartService();
export const iceDataService = new IceDataService();
export const optimizationService = new OptimizationService(assetsService);
export const ordersService = new OrdersService();
export const portfolioAnalysisService = new PortfolioAnalysisService();
export const userService = new UserService();
export const watchListService = new WatchListService();
export const whitelistsService = new WhitelistsApi();
export const createPortfolioService = new CreatePortfolioService(
  new PortfoliosApi(),
  new OrdersApi(),
  new ExternalPortfolioApi(),
  new PortfolioMappingsApi()
);
