import { lazy } from "react";

export default {
  UniverseManager: lazy(
    () => import("containers/UniverseManager/UniverseManager")
  ),
  LoginSecurity: lazy(() => import("containers/LoginSecurity/LoginSecurity")),
  PortfolioExecution: lazy(
    () => import("containers/PortfolioExecution/PortfolioExecution")
  ),
  InPaaS: lazy(() => import("containers/InPaaS/InPaaS")),
  AssetExplorer: lazy(() => import("containers/AssetExplorer/AssetExplorer")),
  Favorites: lazy(() => import("containers/Favorites/Favorites")),
  Transfers: lazy(() => import("containers/Transfers/Transfers")),
  Dashboard: lazy(() => import("containers/Dashboard/Dashboard")),
  LegalPages: lazy(() => import("containers/LegalPages/LegalPages")),
  CashAccount: lazy(
    () => import("containers/CashAccount/ManageCashAccount/ManageCashAccount")
  ),
  Portfolios: lazy(() => import("containers/Portfolios/Portfolios")),
  Investors: lazy(() => import("containers/Investors/Investors")),
  BestFit: lazy(() => import("containers/BestFit/BestFit")),
  Users: lazy(() => import("containers/Users/Users")),
  TrialExpired: lazy(() => import("elements/TrialExpired/TrialExpired"))
};
