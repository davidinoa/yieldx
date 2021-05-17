import React from "react";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { EditIcon, InfoName } from "../../PortfolioHeader.styles";

export type PortfolioDisplayStatus = "PAPER" | "LIVE" | "CLOSED" | "PENDING";

interface ReviewProps {
  portfolioName?: never;
  isReview: boolean;
  isInpaas: boolean;
  status?: PortfolioDisplayStatus;
}

interface SavedProps {
  portfolioName: string;
  isReview?: never;
  isInpaas?: never;
  status?: PortfolioDisplayStatus;
}

export default function PortfolioHeaderTitle({
  portfolioName,
  isReview,
  isInpaas,
  status
}: ReviewProps | SavedProps) {
  const history = useHistory();
  return (
    <Row>
      <InfoName>
        {isReview ? (
          <h1>Review your {isInpaas ? "proposal" : "portfolio"}</h1>
        ) : (
          <h1>
            {portfolioName}
            {status !== "CLOSED" && (
              <button
                type="button"
                data-testid="edit-name-button"
                // TODO: make edit name modal open with local state instead of url hash
                onClick={() =>
                  history.push(`${history.location.pathname}#edit-name`)
                }
              >
                <EditIcon />
              </button>
            )}
          </h1>
        )}
      </InfoName>
    </Row>
  );
}
