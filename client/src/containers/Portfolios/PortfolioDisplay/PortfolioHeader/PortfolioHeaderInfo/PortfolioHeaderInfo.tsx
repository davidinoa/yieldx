import React from "react";
import { useHistory } from "react-router";
import { Investor } from "providers/graphql/hooks";
import YieldXPortfolio from "models/YieldXPortfolio";
import getPortfolioDisplayStatus from "util/getPortfolioDisplayStatus";
import PortfolioMetadata from "./PortfolioMetadata/PortfolioMetadata";
import { Info } from "../PortfolioHeader.styles";
import PortfolioHeaderTitle from "./PortfolioHeaderTitle/PortfolioHeaderTitle";
import AppTypeRow from "./AppTypeRow/AppTypeRow";

interface Props {
  isReview?: boolean;
  portfolio: YieldXPortfolio;
  investor?: Investor;
}

export default function PortfolioHeaderInfo({
  isReview = false,
  portfolio,
  investor
}: Props) {
  const history = useHistory();
  const status = getPortfolioDisplayStatus(
    portfolio.getType(),
    portfolio.getStatus()
  );
  const { proposalRequest } = portfolio.getInpaasData()?.proposal ?? {};
  const isInpaas = portfolio.getInpaasData() !== undefined;
  const investorData = investor
    ? {
        id: investor.id,
        givenName: investor.investorInfo.givenName,
        familyName: investor.investorInfo.familyName
      }
    : undefined;
  return (
    <Info>
      <AppTypeRow
        status={status}
        appType={portfolio.getAppType()}
        onEditGoals={
          isReview && isInpaas && !history.location.pathname.includes("edit")
            ? () => {
                history.push("/inpaas/goals");
              }
            : undefined
        }
      />
      {isReview ? (
        <PortfolioHeaderTitle
          isReview={isReview}
          isInpaas={proposalRequest !== undefined}
        />
      ) : (
        <PortfolioHeaderTitle
          status={status}
          portfolioName={portfolio.getName()}
        />
      )}
      <PortfolioMetadata
        proposalRequest={proposalRequest}
        savedPortfolioData={
          !isReview
            ? {
                createdAt: portfolio.getCreatedAt(),
                investorData
              }
            : undefined
        }
      />
    </Info>
  );
}
