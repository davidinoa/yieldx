import React from "react";
import {
  PortfolioList,
  Root,
  Status,
  StatusIcon,
  StatusLegend
} from "./InvestorPortfolios.styles";
import Pagination from "elements/Pagination/Pagination";
import usePagination from "hooks/usePagination";
import NoPortfoliosMessage from "components/NoItemsMessage";
import { ReactComponent as NoItemIcon } from "assets/svg/no-portfolio.svg";
import getCurrPageData from "util/getCurrPageData";
import { Portfolio3, PortfolioStatus } from "providers/graphql/hooks";
import { InvestorPortfolioRow } from "./InvestorPortfolioRow/InvestorPortfolioRow";

type Status = {
  label: string;
  color: string;
};

export const portfolioColorMap = {
  READY: "#42F1D2",
  ACTIVE: "#42F1D2",
  PENDING: "#FAE369",
  TRACKING: "#6980A6",
  TERMINATED: "#6980A6"
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

interface Props {
  portfolios: Portfolio3[];
}

function InvestorPortfolios({ portfolios }: Props) {
  const [currentPage, totalPages, setCurrentPage] = usePagination(
    portfolios,
    6
  );
  const statusTotals = portfolios.reduce(
    (acc, portfolio) => {
      switch (portfolio.status) {
        case PortfolioStatus.Ready:
          return {
            ...acc,
            ACTIVE: acc.ACTIVE + 1
          };
        case PortfolioStatus.Terminated:
          return {
            ...acc,
            TERMINATED: acc.TERMINATED + 1
          };
        default:
          return {
            ...acc,
            PENDING: acc.PENDING + 1
          };
      }
    },
    {
      ACTIVE: 0,
      PENDING: 0,
      TERMINATED: 0
    }
  );
  return (
    <>
      {portfolios.length === 0 && (
        <NoPortfoliosMessage
          title="No portfolios"
          message="It looks like there aren't any portfolios created yet."
          Icon={<NoItemIcon />}
        />
      )}
      {portfolios.length > 0 && statusTotals && (
        <>
          <Root>
            <StatusLegend>
              {Object.entries(statusTotals).map(([label, number]) => (
                <Status key={label} className="status">
                  <StatusIcon
                    color={
                      portfolioColorMap[label as keyof typeof statusTotals]
                    }
                  />
                  <span>{label}:</span>
                  <span>{number}</span>
                </Status>
              ))}
            </StatusLegend>

            <PortfolioList>
              {getCurrPageData(portfolios, 6, currentPage).map(portfolio => (
                <InvestorPortfolioRow
                  portfolio={portfolio}
                  key={portfolio.id}
                />
              ))}
            </PortfolioList>
            <Pagination
              total={totalPages}
              current={currentPage}
              handleChange={setCurrentPage}
            />
          </Root>
        </>
      )}
    </>
  );
}

export default InvestorPortfolios;
