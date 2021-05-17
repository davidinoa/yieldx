import React from "react";
import { Nav, TabContainer } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { PortfolioType } from "@bondhouse/income-portfolios";
import YieldXPortfolio from "models/YieldXPortfolio";
import {
  Asset5,
  Order2,
  useRoverUniverseGetAssetsQuery
} from "providers/graphql/hooks";
import { StyledNav, StyledNavItem } from "./PortfolioTabs.styles";

type Props = {
  portfolio: YieldXPortfolio;
  orders?: Array<Order2>;
};

export default function PortfolioTabs({ portfolio, orders = [] }: Props) {
  const history = useHistory();
  const { hash, pathname, search } = useLocation();

  const { data: assetsData } = useRoverUniverseGetAssetsQuery({
    variables: {
      getAssetsRequestInput: {
        assetIds: orders.map(order => order.assetId)
      }
    },
    skip: !orders || orders.length === 0
  });

  const pendingAssets = assetsData?.roverUniverseGetAssets?.assets.filter(
    it => !!it
  ) as Asset5[] | undefined;
  const isMultiOrder =
    pendingAssets?.some(asset => asset?.assetType === "BOND") &&
    pendingAssets?.some(asset => asset?.assetType === "FUND");

  const handleTabSelection = (key: string | null) => {
    if (key === "")
      history.push({
        pathname,
        search
      });
    else
      history.push({
        pathname,
        hash: key ?? undefined,
        search
      });
  };

  const isNotReview = !pathname.includes("portfolio-review");
  if (
    portfolio.isMultiAsset() ||
    (portfolio.getType() === PortfolioType.LIVE && isNotReview) ||
    isMultiOrder
  ) {
    return (
      <TabContainer
        data-testid="portfolio-tabs"
        id="portfolio-tabs"
        activeKey={hash}
        onSelect={handleTabSelection}
      >
        <StyledNav>
          <StyledNavItem active={!hash}>
            <Nav.Link
              data-testid="PortfolioTabs-Overview"
              eventKey=""
              className={!hash ? "active" : undefined}
            >
              Total portfolio
            </Nav.Link>
          </StyledNavItem>

          {(portfolio.isMultiAsset() || isMultiOrder) && (
            <StyledNavItem active={hash === "#bonds"}>
              <Nav.Link
                data-testid="PortfolioTabs-Bonds"
                eventKey="#bonds"
                className={hash === "#bonds" ? "active" : undefined}
              >
                Bonds only
              </Nav.Link>
            </StyledNavItem>
          )}

          {(portfolio?.isMultiAsset() || isMultiOrder) && (
            <StyledNavItem active={hash === "#funds"}>
              <Nav.Link
                data-testid="PortfolioTabs-Funds"
                eventKey="#funds"
                className={hash === "#funds" ? "active" : undefined}
              >
                Funds only
              </Nav.Link>
            </StyledNavItem>
          )}

          {portfolio.getType() === PortfolioType.LIVE && isNotReview && (
            <StyledNavItem active={hash === "#orders"}>
              <Nav.Link
                data-testid="PortfolioTabs-Orders"
                eventKey="#orders"
                className={hash === "#orders" ? "active" : undefined}
              >
                Orders/Trades
              </Nav.Link>
            </StyledNavItem>
          )}
        </StyledNav>
      </TabContainer>
    );
  }
  return null;
}
