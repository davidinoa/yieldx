import React from "react";
import { Container, Row } from "react-bootstrap";
import getCurrPageData from "util/getCurrPageData";
import Pagination from "elements/Pagination/Pagination";
import PageTitle from "elements/PageTitle/PageTitle";
import {
  ListContainer,
  ListFilters
} from "components/ListPages/ListPages.styles";
import usePagination from "hooks/usePagination";
import useGetPortfoliosTyped from "providers/graphql/hooks/useGetPortfoliosTyped";
import PortfolioListItem from "containers/Portfolios/PortfolioList/PortfolioListItem/PortfolioListItem";
import { Portfolio3, PortfolioType } from "providers/graphql/hooks";
import { Spinner } from "elements/Spinner/Spinner";
import getPortfoliosStatusCount from "containers/Portfolios/PortfolioList/getPortfoliosStatusCount";
import ErrorAlert from "elements/Alert/ErrorAlert";
import StatusList from "./StatusList/StatusList";
import EmptyListFallback from "./EmptyListFallback/EmptyListFallback";

const RECORDS_PER_PAGE = 20;
export default function PortfolioList() {
  const { portfolios, loading, error } = useGetPortfoliosTyped();
  const [currentPage, totalPages, setCurrentPage] = usePagination(
    portfolios ?? [],
    RECORDS_PER_PAGE
  );

  return (
    <Container>
      {error && <ErrorAlert />}
      <Row>
        <PageTitle
          page
          title="Manage portfolios"
          subtitle="Portfolio List"
          alignment="left"
        />
      </Row>

      {loading && <Spinner />}
      {!loading && portfolios && portfolios.length > 0 && (
        <>
          <Row>
            <StatusList
              statusCount={getPortfoliosStatusCount(
                portfolios as Array<{
                  portfolio: Portfolio3;
                  portfolioType: PortfolioType;
                }>
              )}
            />
            <ListFilters />
          </Row>
          <Row>
            <ListContainer>
              {getCurrPageData(portfolios, RECORDS_PER_PAGE, currentPage).map(
                ({ portfolio, portfolioType }) => (
                  <PortfolioListItem
                    key={((portfolio as unknown) as Portfolio3).id}
                    portfolio={(portfolio as unknown) as Portfolio3}
                    portfolioType={portfolioType}
                  />
                )
              )}
              <Pagination
                total={totalPages}
                current={currentPage}
                handleChange={setCurrentPage}
              />
            </ListContainer>
          </Row>
        </>
      )}
      {!loading && (!portfolios || portfolios.length === 0) && (
        <Row>
          <EmptyListFallback />
        </Row>
      )}
    </Container>
  );
}
