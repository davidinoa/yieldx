import React from "react";
import { Action, Size } from "elements/Button/Action";
import Decimal from "util/Decimal";
import {
  Position2,
  Status,
  useRoverPortfolioAnalyzerAnalyzePortfolioQuery
} from "providers/graphql/hooks";
import { Spinner } from "elements/Spinner/Spinner";
import { ColAlign, List } from "../ListPages/List";

type Props = {
  name: string;
  createdAt: string;
  positions: Array<Position2>;
  isSelected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
};

export function SelectPortfolioRow({
  createdAt,
  name,
  positions,
  isSelected,
  onSelect,
  onDeselect
}: Props) {
  const { data, loading } = useRoverPortfolioAnalyzerAnalyzePortfolioQuery({
    variables: {
      analyzePortfolioRequestInput: {
        portfolio: {
          positions,
          createdAt,
          currency: "USD",
          id: "temp-portfolio-id",
          name,
          status: Status.Ready
        }
      }
    }
  });
  const marketValue =
    data?.roverPortfolioAnalyzerAnalyzePortfolio?.analysis.netAssetValue;

  return (
    <List.Row>
      <List.Col value={name} label="PORTFOLIO NAME" className="pl-3" />
      <List.Col
        value={createdAt}
        label="DATE CREATED"
        xs={4}
        align={ColAlign.Center}
      />
      <List.Col
        value={
          marketValue && !loading
            ? `$${Decimal.format(marketValue)}`
            : undefined
        }
        label="TOTAL VALUE"
        xs={4}
        align={ColAlign.Center}
      >
        {!marketValue || loading ? <Spinner /> : null}
      </List.Col>
      <List.Col xs={3}>
        <Action
          text={isSelected ? "Selected" : "Select"}
          inverted
          size={Size.Large}
          onClick={isSelected ? onDeselect : onSelect}
        />
      </List.Col>
    </List.Row>
  );
}
