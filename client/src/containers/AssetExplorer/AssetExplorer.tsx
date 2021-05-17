import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Cart } from "@bondhouse/rover-preferences";
import AppNavbar from "components/AppNavbar/AppNavbar";
import LandingPage from "components/LandingPage/LandingPage";
import { yieldXPortfolioSelector } from "recoil-state/getProposalWithPortfolioId";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import YieldXPortfolio from "models/YieldXPortfolio";
import { assetsService, cartService } from "services";
import PortfolioReview from "components/PortfolioReview/PortfolioReview";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import PortfolioBuilder from "./PortfolioBuilder/PortfolioBuilder";
import Search from "./Search/Search";

const landingInfo = {
  title: "Robust analytics tool",
  text:
    "The Asset Explorer app is a robust analytics tool to search, filapter, sort and identify fixed income assets to add to a portfolio or save to a watch list.",
  link: "/asset-explorer/search",
  tag: "asset-explorer"
};

export default function AssetExplorer() {
  const { pathname, search } = useLocation();
  const portfolioQueryParams = parsePortfolioQuery(search);
  const originalPortfolio = useRecoilValue(
    yieldXPortfolioSelector(portfolioQueryParams)
  );
  const isEditing = pathname.includes("edit");
  const portfolioData = useRecoilValue(portfolioCreateOrEditState);
  const [portfolio, setPortfolio] = useState<YieldXPortfolio>();
  const [currentBasket, setCurrentBasket] = useState<Cart>();
  useEffect(() => {
    if (originalPortfolio && !portfolioData.cartContext) {
      cartService.clearPortfolioCart();
      cartService.createPortfolioCartItems(
        originalPortfolio.positions.map(it => it.asset.id)
      );
    }
  }, [originalPortfolio, portfolioData.cartContext]);
  useEffect(() => {
    if (
      portfolioQueryParams != null ||
      portfolioData.cartContext === "portfolio-cart"
    ) {
      const unsubId = cartService.subscribeToPortfolioCart(nextCart =>
        setCurrentBasket(nextCart)
      );
      return () => cartService.unsubscribeFromPortfolioCart(unsubId);
    }
    const unsubId = cartService.subscribe(nextCart =>
      setCurrentBasket(nextCart)
    );
    return () => cartService.unsubscribe(unsubId);
  }, [portfolioQueryParams, portfolioData.cartContext]);
  useEffect(() => {
    if (currentBasket !== undefined) {
      const assetIds = currentBasket.items.map(it => it.assetId);
      assetsService.getAssets(assetIds).then(assetCache => {
        const assets = assetIds.map(it => assetCache[it]);
        setPortfolio(prev => {
          if (!prev) {
            if (portfolioData.currentPortfolio) {
              return new YieldXPortfolio(
                portfolioData.currentPortfolio.clone().asPmsPortfolio(),
                assets
              );
            }
            if (
              originalPortfolio &&
              originalPortfolio.positions.length === currentBasket.items.length
            ) {
              return new YieldXPortfolio(
                originalPortfolio.clone().asPmsPortfolio(),
                assets
              );
            }
            return YieldXPortfolio.fromAssets("axp", assets);
          }
          prev.buySellAssetIdsDiff(
            prev.positions.map(cv => cv.assetId),
            assetIds,
            assetCache
          );
          return prev.clone();
        });
      });
    }
  }, [currentBasket, originalPortfolio, portfolioData.currentPortfolio]);
  return (
    <Switch>
      <Route
        exact
        path="/asset-explorer"
        component={() => LandingPage(landingInfo)}
      />
      <>
        <AppNavbar
          appName={
            isEditing ? "AssetExplorer / Editing portfolio" : "AssetExplorer"
          }
        />
        <Route
          path={["/asset-explorer/search", "/asset-explorer/search/edit"]}
          component={Search}
        />
        <Route
          path={[
            "/asset-explorer/portfolio-builder",
            "/asset-explorer/portfolio-builder/edit"
          ]}
        >
          {currentBasket && currentBasket.items.length === 0 && isEditing && (
            <Redirect to="/asset-explorer/search/edit" />
          )}
          {currentBasket && currentBasket.items.length === 0 && !isEditing && (
            <Redirect to="/asset-explorer/search" />
          )}
          {currentBasket && currentBasket.items.length > 0 && portfolio && (
            <PortfolioBuilder
              setPortfolio={setPortfolio}
              portfolio={portfolio}
            />
          )}
          {!portfolio && <YieldXLoader />}
        </Route>
        <Route
          path={[
            "/asset-explorer/portfolio-review",
            "/asset-explorer/portfolio-review/edit"
          ]}
        >
          {portfolio &&
            originalPortfolio &&
            originalPortfolio.isEqualTo(portfolio) && (
              <Redirect
                to={`/asset-explorer/portfolio-builder/edit${search}`}
              />
            )}
          {portfolio &&
            (portfolio.totalMarketValue === 0 ||
              (pathname.includes("edit") && originalPortfolio === null)) && (
              <Redirect to="/asset-explorer/portfolio-builder" />
            )}
          {portfolio && portfolio.totalMarketValue > 0 && (
            <PortfolioReview portfolio={portfolio} />
          )}
        </Route>
      </>
    </Switch>
  );
}
