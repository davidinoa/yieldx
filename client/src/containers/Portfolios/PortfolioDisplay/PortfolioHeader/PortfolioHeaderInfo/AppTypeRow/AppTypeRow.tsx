import React from "react";
import { Row } from "react-bootstrap";
import { AppType } from "@bondhouse/position-management";
import { EditIcon } from "../../PortfolioHeader.styles";
import { ReactComponent as PortfolioIcon } from "../../../../../../assets/svg/portfolio.svg";
import { EditGoalsContainer, InfoStatus } from "./AppTypeRow.styles";

export type PortfolioDisplayStatus = "PAPER" | "LIVE" | "CLOSED" | "PENDING";

interface Props {
  status?: PortfolioDisplayStatus;
  appType?: AppType;
  onEditGoals?: () => void;
}

export default function AppTypeRow({ status, appType, onEditGoals }: Props) {
  return (
    <Row>
      <InfoStatus>
        {status && (
          <h5
            className={`pr-2 status portfolio-status-${status.toLowerCase()}`}
          >
            {status.toUpperCase()}
          </h5>
        )}
        <h5 className={status !== undefined ? "ml-3" : undefined}>
          <PortfolioIcon width="15" height="13" />
          {`${appType ?? "CUSTOM"} PORTFOLIO`}
        </h5>
        {onEditGoals && (
          <EditGoalsContainer className="d-flex">
            <div className="status-separator" />
            <button
              className="ml-3"
              type="button"
              data-testid="edit-name-button"
              // TODO: make edit name modal open with local state instead of url hash
              onClick={onEditGoals}
            >
              <EditIcon className="mr-2" />
              Edit goals
            </button>
          </EditGoalsContainer>
        )}
      </InfoStatus>
    </Row>
  );
}
