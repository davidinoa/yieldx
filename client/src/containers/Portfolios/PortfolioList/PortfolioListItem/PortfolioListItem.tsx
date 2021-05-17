import React from "react";
import { AppType2, Portfolio3, PortfolioType } from "providers/graphql/hooks";
import {
  CTAColumn,
  DetailsButton,
  ListRow,
  Status,
  StatusColumn
} from "components/ListPages/ListPages.styles";
import dayjs from "dayjs";
import { Spinner } from "elements/Spinner/Spinner";
import { ReactComponent as RedAlert } from "assets/svg/red-alert.svg";
import useGetPortfolioInvestor from "providers/graphql/hooks/useGetPortfolioInvestor";
import { List } from "components/ListPages/List";

interface Props {
  portfolio: Portfolio3;
  portfolioType: PortfolioType;
}

function PortfolioListItem({ portfolio, portfolioType }: Props) {
  const { id, name, createdAt } = portfolio;
  const isExternal = portfolioType === PortfolioType.External;
  const status = (isExternal ? "tracking" : portfolio.status).toLowerCase();
  const { investor, error, loading } = useGetPortfolioInvestor(
    id,
    portfolioType !== PortfolioType.Live
  );
  return (
    <ListRow key={id} status={status}>
      <StatusColumn>
        <Status className={status} />
      </StatusColumn>
      <List.Col
        className="col-14 col-xxl-16"
        label={
          investor
            ? `${investor?.investorInfo.givenName} ${investor?.investorInfo.familyName}`
            : undefined
        }
        value={name}
      >
        {(error || null) && <RedAlert />}
        {(loading || null) && <Spinner />}
      </List.Col>
      <List.Col
        className="col-2 centered"
        label="type"
        value={portfolio.app === AppType2.Inpaas ? "InPaaS" : "Custom"}
      />
      <List.Col
        className="col-4 col-xxl-3 centered"
        value={dayjs(createdAt).format("MMM D, YYYY")}
        label="Created at"
      />
      <CTAColumn>
        <DetailsButton
          data-testid="PortfolioList-ShowPortfolioLink"
          to={`/portfolios/${isExternal ? "external" : "live"}/${portfolio.id}`}
        >
          Details
        </DetailsButton>
      </CTAColumn>
    </ListRow>
  );
}

export default PortfolioListItem;
