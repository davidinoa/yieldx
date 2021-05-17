import React from "react";
import dayjs from "dayjs";
import { InvestorWithApexAccount } from "@bondhouse/investor";
import { AccountStatus } from "@bondhouse/apex";
import {
  CTAColumn,
  DetailsButton,
  ListRow,
  Status,
  StatusColumn
} from "components/ListPages/ListPages.styles";
import { List } from "components/ListPages/List";

interface Props {
  account: InvestorWithApexAccount;
}

export default function InvestorRow({ account }: Props) {
  const { apexAccount, investor } = account;
  const { id, investorInfo, investorType, createdAt } = investor;
  const accountCreatedInLastMinute = dayjs()
    .subtract(2, "minute")
    .isBefore(dayjs(createdAt));
  const { familyName, givenName } = investorInfo;
  const { status } = apexAccount || {
    status: AccountStatus.ERROR
  };
  return (
    <ListRow key={id}>
      <StatusColumn>
        {apexAccount === undefined && !accountCreatedInLastMinute && (
          <Status className="error" />
        )}
        {accountCreatedInLastMinute && <Status className="pending" />}
        {apexAccount !== undefined && (
          <Status className={status.toLocaleLowerCase()} />
        )}
      </StatusColumn>
      <List.Col
        className="p-0"
        label="INVESTOR NAME"
        value={`${givenName} ${familyName}`}
      />
      <List.Col
        label="TYPE"
        value={investorType}
        className="col-4 col-xxl-3 centered"
      />
      <List.Col
        label="CREATED AT"
        className="col-4 col-xxl-3 centered"
        value={dayjs(createdAt).format("MMM D, YYYY")}
      />

      <CTAColumn>
        <DetailsButton
          data-testid="InvestorList-ShowInvestorLink"
          data-disabled={false}
          to={`/investors/${id}`}
        >
          Details
        </DetailsButton>
      </CTAColumn>
    </ListRow>
  );
}
