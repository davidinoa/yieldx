import { Col, Container, Row } from "react-bootstrap";
import PageTitle from "elements/PageTitle/PageTitle";
import React, { useCallback, useState } from "react";
import { Dropdown } from "elements/Dropdown/Dropdown";
import {
  Portfolio3,
  Position2,
  usePositionManagementGetPortfoliosQuery
} from "providers/graphql/hooks";
import { SelectPortfolioRow } from "components/SelectPortfolioRow/SelectPortfolioRow";
import { Spinner } from "elements/Spinner/Spinner";
import NoItemsMessage from "components/NoItemsMessage";
import { ReactComponent as NoItemIcon } from "assets/svg/no-portfolio.svg";

interface Props {
  onChange: (selectedId?: string) => void;
  selectedPortfolioId?: string;
}

export function SelectPortfolio({ selectedPortfolioId, onChange }: Props) {
  const [orderBy, setOrderBy] = useState<string>();

  const {
    data: liveData,
    loading: liveLoading
  } = usePositionManagementGetPortfoliosQuery();
  const livePortfolios = liveData?.positionManagementGetPortfolios?.portfolios?.filter(
    it => it?.name !== "CASH_ONLY_PORTFOLIO"
  );
  const onSelect = useCallback((id: string) => () => onChange(id), [onChange]);
  const onDeselect = useCallback(() => onChange(undefined), [onChange]);
  return (
    <Container>
      <PageTitle
        page
        reversed
        title="Select portfolio"
        subtitle="Choose one of your custom portfolios for optimization."
        alignment="left"
      />
      <Row className="justify-content-between mb-4">
        <Col xs={6}>
          {/* TODO: Replace with <Input /> element in the future that supports rounded/square borders and icons without formik context */}
          <input placeholder="Search..." />
        </Col>
        <Col xs={3}>
          <Dropdown
            placeholder="Order by"
            name="sortBy"
            items={[
              {
                label: "Date created",
                value: "createdAt"
              },
              {
                label: "Last updated",
                value: "updatedAt"
              }
            ]}
            value={orderBy}
            onSelected={setOrderBy}
          />
        </Col>
      </Row>
      {!liveLoading && !livePortfolios && (
        <NoItemsMessage
          className="m-auto"
          title="No portfolios"
          message="It looks like there aren't any portfolios created yet."
          Icon={<NoItemIcon />}
        />
      )}
      {livePortfolios && !liveLoading ? (
        (livePortfolios as Portfolio3[])?.map(it => {
          return (
            <SelectPortfolioRow
              name={it.name}
              createdAt={it.createdAt}
              positions={it.positions as Array<Position2>}
              isSelected={selectedPortfolioId === it.id}
              onSelect={onSelect(it.id)}
              onDeselect={onDeselect}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </Container>
  );
}
