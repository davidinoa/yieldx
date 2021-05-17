import React, { Dispatch, SetStateAction } from "react";
import { Row } from "react-bootstrap";
import { Portfolio } from "@bondhouse/position-management";
import { Spinner } from "elements/Spinner/Spinner";
import {
  CashManagerPortfolioList,
  PortfolioListItem
} from "../ManageCashAccount.styles";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { ReactComponent as NoItemIcon } from "assets/svg/no-portfolio.svg";
import NoPortfoliosMessage from "components/NoItemsMessage";
import { CashManageInvestor } from "services/InvestorService";

interface Props {
  livePortfolioIds?: Array<string>;
  cashPortfolio: CashManageInvestor["cashPortfolio"];
  setTransferPortfolio: Dispatch<SetStateAction<Portfolio | undefined>>;
}

export default function PortfolioItemList({
  cashPortfolio,
  livePortfolioIds,
  setTransferPortfolio
}: Props) {
  return (
    <>
      <Row>
        <CashManagerPortfolioList>
          <Row>
            {!livePortfolioIds && <Spinner />}
            {livePortfolioIds && livePortfolioIds.length === 0 && (
              <NoPortfoliosMessage
                className="m-auto"
                title="No portfolios"
                message="It looks like there aren't any portfolios created yet."
                Icon={<NoItemIcon />}
              />
            )}
            {livePortfolioIds &&
              livePortfolioIds.length > 0 &&
              livePortfolioIds.map(id => {
                return (
                  <PortfolioListItem key={id}>
                    <PortfolioItem
                      portfolioId={id}
                      cashOnlyPortfolio={cashPortfolio}
                      setTransferPortfolio={setTransferPortfolio}
                    />
                  </PortfolioListItem>
                );
              })}
          </Row>
        </CashManagerPortfolioList>
      </Row>
    </>
  );
}
