import React from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { PortfolioType } from "@bondhouse/income-portfolios";
import YieldXPortfolio from "models/YieldXPortfolio";
import { editPositions } from "recoil-state/editPositions";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import BondsView from "./BondsView/BondsView";
import MultiAssetView from "./MultiAssetView/MultiAssetView";
import FundsView from "./FundsView/FundsView";

type Props = {
  portfolio: YieldXPortfolio;
  version?: "CURRENT" | "ORIGINAL";
};

export default function CustomPortfolio({ portfolio, version }: Props) {
  const setPortfolioData = useSetRecoilState(portfolioCreateOrEditState);
  const { hash, pathname } = useLocation();
  const history = useHistory();
  const editPositionCallback = () => {
    if (portfolio.getType() === PortfolioType.LIVE)
      history.push(`${pathname}/edit`);
    else editPositions({ portfolio, setPortfolioData, history });
  };

  const showMulti =
    (!hash && portfolio.isMultiAsset()) ||
    (hash.includes("#invest") && portfolio.isMultiAsset()) ||
    (!hash.includes("#orders") &&
      !portfolio.hasFunds() &&
      !portfolio.hasBonds());
  const showFunds =
    hash === "#funds" || (portfolio.hasFunds() && !portfolio.hasBonds());
  const showBonds =
    hash === "#bonds" || (portfolio.hasBonds() && !portfolio.hasFunds());
  return (
    <Container fluid>
      <Row>
        {showMulti ? (
          <MultiAssetView
            version={version}
            portfolio={portfolio}
            editPositions={editPositionCallback}
          />
        ) : null}
        {showBonds ? (
          <BondsView
            version={version}
            portfolio={portfolio.getBondSleeve()}
            editPositions={editPositionCallback}
          />
        ) : null}
        {showFunds ? (
          <FundsView
            version={version}
            portfolio={portfolio.getFundSleeve()}
            editPositions={editPositionCallback}
          />
        ) : null}
      </Row>
    </Container>
  );
}
