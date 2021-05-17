/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AccountStatus } from "@bondhouse/apex";
import { atom, useRecoilValue } from "recoil";
import { InvestorsApi } from "@bondhouse/investor";
import { UserType } from "@bondhouse/iam";
import PageTitle from "elements/PageTitle/PageTitle";
import { InvestorAndExternal } from "services/InvestorService";
import { userState } from "services/userState";
import InvestorListItems from "./InvestorListItems/InvestorListItems";
import InvestorStatusCount from "./InvestorStatusCount/InvestorStatusCount";

const investorsApi = new InvestorsApi();

function InvestorList() {
  const user = useRecoilValue(userState);
  const investors = useRecoilValue(investorsAtom);
  const canCreateAccount =
    user.userType === UserType.ADMIN ||
    user.institutionId === "bondhouse" ||
    user.institutionId === undefined;

  const statusCounts = getStatusCounts(
    investors.map(({ investor, apexAccount }) => ({
      investor,
      apexAccount
    }))
  );
  return (
    <Container>
      <Row>
        <Col>
          <PageTitle
            page
            subtitle="INVESTOR LIST"
            title="Select an investor account"
            alignment="left"
          />
        </Col>
      </Row>

      <InvestorStatusCount
        statusCounts={statusCounts}
        canCreateAccount={canCreateAccount}
      />
      <InvestorListItems
        investors={investors}
        canCreateAccount={canCreateAccount}
      />
    </Container>
  );
}

export function getStatusCounts(
  investorsWithStatus: Array<InvestorAndExternal>
) {
  return investorsWithStatus.reduce(
    (acc, { apexAccount }) => {
      return {
        active:
          apexAccount?.status === AccountStatus.ACTIVE
            ? acc.active + 1
            : acc.active,
        inactive:
          apexAccount?.status === AccountStatus.INACTIVE
            ? acc.inactive + 1
            : acc.inactive,
        pending:
          apexAccount?.status === AccountStatus.PENDING
            ? acc.pending + 1
            : acc.pending,
        cancelled:
          apexAccount?.status === AccountStatus.CANCELED
            ? acc.cancelled + 1
            : acc.cancelled,
        error:
          apexAccount == null || apexAccount?.status === AccountStatus.ERROR
            ? acc.error + 1
            : acc.error
      };
    },
    {
      active: 0,
      inactive: 0,
      pending: 0,
      cancelled: 0,
      error: 0
    }
  );
}

export const investorsAtom = atom({
  key: "investorsAtom",
  default: (async () => {
    const {
      data: { investors }
    } = await investorsApi.getInvestors();
    return investors;
  })()
});

export default InvestorList;
