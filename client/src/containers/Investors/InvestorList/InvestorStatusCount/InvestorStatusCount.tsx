import React from "react";
import { AccountStatus } from "@bondhouse/apex";
import { Row } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import {
  CreateInvestorButton,
  ListFilters,
  ListStatuses,
  Status
} from "../../../../components/ListPages/ListPages.styles";
import { Spinner } from "../../../../elements/Spinner/Spinner";

interface Props {
  canCreateAccount: boolean;
  statusCounts?: {
    pending: number;
    active: number;
    inactive: number;
    error: number;
  };
}

export default function InvestorStatusCount({
  canCreateAccount,
  statusCounts
}: Props) {
  const { url } = useRouteMatch();

  return (
    <Row>
      <ListStatuses>
        <span>
          <Status className="pending" />
          <b>Pending:</b>
          {statusCounts === undefined ? (
            <span>
              <Spinner />
            </span>
          ) : (
            statusCounts.pending
          )}
        </span>
        <span>
          <Status className="active" />
          <b>Active:</b>
          {statusCounts === undefined ? (
            <span>
              <Spinner />
            </span>
          ) : (
            statusCounts.active
          )}
        </span>
        <span>
          <Status className="inactive" />
          <b>Inactive:</b>
          {statusCounts === undefined ? (
            <span>
              <Spinner />
            </span>
          ) : (
            statusCounts.inactive
          )}
        </span>
        <span>
          <Status className={`${AccountStatus.ERROR.toLowerCase()}`} />
          <b>ISSUES:</b>
          {statusCounts === undefined ? (
            <span>
              <Spinner />
            </span>
          ) : (
            statusCounts.error
          )}
        </span>
      </ListStatuses>
      {canCreateAccount && (
        <ListFilters>
          <CreateInvestorButton
            data-testid="InvestorList-CreateInvestorLink"
            to={`${url}/create/investor-type`}
          >
            Create investor account
          </CreateInvestorButton>
        </ListFilters>
      )}
    </Row>
  );
}
