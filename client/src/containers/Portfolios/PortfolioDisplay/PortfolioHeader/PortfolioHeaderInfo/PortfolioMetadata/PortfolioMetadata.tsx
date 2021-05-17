import React from "react";
import { ProposalRequest } from "@bondhouse/income-portfolios";
import Decimal from "util/Decimal";
import { roundToHundredth } from "util/roundToHundredth";
import getProposalTargetValues from "util/getProposalTargetValues";
import { MetadataRow } from "containers/Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeaderInfo/PortfolioMetadata/PortfolioMetadata.styles";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface Props {
  proposalRequest?: ProposalRequest;
  savedPortfolioData?: {
    investorData?: {
      givenName: string;
      familyName: string;
      id: string;
    };
    createdAt: string;
  };
}

export default function PortfolioMetadata({
  proposalRequest,
  savedPortfolioData
}: Props) {
  const { investorData, createdAt } = savedPortfolioData || {};
  const targetValues = proposalRequest
    ? getProposalTargetValues(
        proposalRequest.goal,
        proposalRequest.investmentAmount
      )
    : null;
  const { targetRisk, targetYield, targetIncome } = targetValues || {
    targetYield: 0,
    targetRisk: 0,
    targetIncome: 0
  };
  const rowClass = clsx("row mt-4 pt-3", {
    "live-inpaas": Boolean(
      savedPortfolioData && savedPortfolioData.investorData && proposalRequest
    ),
    "paper-inpaas": Boolean(
      savedPortfolioData && !savedPortfolioData.investorData && proposalRequest
    )
  });
  return (
    <MetadataRow
      data-testid="PortfolioHeader-PortfolioMetadata"
      className={rowClass}
    >
      {proposalRequest !== undefined && (
        <>
          {!targetRisk ? (
            <>
              <div className="col d-flex flex-column small-col">
                <span className="metadata-label">target yield:</span>
                <span className="metadata-value">
                  {roundToHundredth(targetYield)}%
                </span>
              </div>
              <div className="col d-flex flex-column small-col">
                <span className="metadata-label">target income:</span>
                <span className="metadata-value">
                  ${Decimal.format(targetIncome)}
                </span>
              </div>
            </>
          ) : (
            <div className="col d-flex flex-column small-col">
              <span className="metadata-label">target risk:</span>
              <span className="metadata-value">
                {roundToHundredth(targetRisk)}%
              </span>
            </div>
          )}
          <div className="col d-flex flex-column small-col">
            <span className="metadata-label">allocation:</span>
            <div className="d-flex justify-content-between align-items-center mr-3">
              <div>
                <span className="metadata-value">
                  {proposalRequest?.constraints?.minimumWeight !== undefined
                    ? roundToHundredth(
                        proposalRequest?.constraints?.minimumWeight * 100
                      )
                    : 5}
                  %{" "}
                </span>
                <span className="goal-min-max">/min</span>
              </div>
              <div className="goal-separator" />
              <div>
                <span className="metadata-value">
                  {proposalRequest?.constraints?.maximumWeight !== undefined
                    ? roundToHundredth(
                        proposalRequest?.constraints?.maximumWeight * 100
                      )
                    : 25}
                  %{" "}
                </span>
                <span className="goal-min-max">/max</span>
              </div>
            </div>
          </div>
          {targetRisk !== undefined && !savedPortfolioData && (
            <div className="col " />
          )}
        </>
      )}
      {savedPortfolioData && createdAt && (
        <div className="col d-flex flex-column small-col">
          <span className="metadata-label">created at:</span>
          <span className="metadata-value">
            {dayjs.utc(createdAt).local().format("ddd MMM DD[ @]h:mma")}
          </span>
        </div>
      )}
      {investorData && (
        <div className="col d-flex flex-column large-col">
          <span className="metadata-label">investor account:</span>
          <span className="metadata-value">
            <Link to={`/investors/${investorData.id}`}>
              {`${investorData.givenName} ${investorData.familyName}`}
            </Link>
          </span>
        </div>
      )}
    </MetadataRow>
  );
}
