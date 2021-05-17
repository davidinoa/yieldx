import {
  Portfolio3,
  PortfolioStatus,
  useRoverPortfolioAnalyzerAnalyzePortfolioQuery
} from "providers/graphql/hooks";
import toPortfolioInput from "util/toInputPortfolio";
import {
  DataColumn,
  PortfolioRow,
  StatusColumn,
  StatusIcon
} from "../InvestorPortfolios.styles";
import {
  ColumnLabel as Label,
  ColumnValue as Value,
  RowButton
} from "../../InvestorAccount.styles";
import { displayDate } from "containers/Users/UserList/UserList";
import React from "react";
import { currencyFormatter, portfolioColorMap } from "../InvestorPortfolios";
import { Spinner } from "elements/Spinner/Spinner";

interface Props {
  portfolio: Portfolio3;
}

export function InvestorPortfolioRow({ portfolio }: Props) {
  const { data, loading } = useRoverPortfolioAnalyzerAnalyzePortfolioQuery({
    variables: {
      enableEstimatedPerformance: true,
      analyzePortfolioRequestInput: {
        portfolio: toPortfolioInput(portfolio)
      }
    }
  });
  const nav =
    data?.roverPortfolioAnalyzerAnalyzePortfolio?.analysis.netAssetValue;
  return (
    <PortfolioRow key={portfolio.id}>
      <StatusColumn>
        <StatusIcon color={portfolioColorMap[portfolio.status]} />
      </StatusColumn>
      <DataColumn className="col">
        <Value>{portfolio.name}</Value>
        <Label>portfolio name</Label>
      </DataColumn>

      <DataColumn>
        <Value>{displayDate(portfolio.createdAt)}</Value>
        <Label>account created</Label>
      </DataColumn>
      <DataColumn>
        {nav && !loading && <Value>{currencyFormatter.format(nav)}</Value>}
        {!nav || (loading && <Spinner />)}
        <Label>total value</Label>
      </DataColumn>
      <DataColumn>
        {portfolio.status !== PortfolioStatus.Ready ? (
          <RowButton disabled>details</RowButton>
        ) : (
          <RowButton as="a" href={`/yieldx/portfolios/live/${portfolio.id}`}>
            details
          </RowButton>
        )}
      </DataColumn>
    </PortfolioRow>
  );
}
