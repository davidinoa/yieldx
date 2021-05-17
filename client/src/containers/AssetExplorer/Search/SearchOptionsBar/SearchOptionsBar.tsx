import { Col, Form, Row } from "react-bootstrap";
import React, { useCallback } from "react";
import { Filter } from "@bondhouse/search";
import { Interpreter } from "xstate";
import {
  FiltersContainer,
  OptionsBar,
  SearchContainer
} from "../Search.styles";
import ProductTypeFilter, {
  AssetClassesKeys
} from "./Dropdowns/ProductTypeFilter/ProductTypeFilter";
import YieldFilter from "./Dropdowns/YieldFilter/YieldFilter";
import { SearchContext, SearchStateEvent } from "../Search.state";
import RatingsSlider from "./RatingsSlider/RatingsSlider";

interface Props {
  send: Interpreter<SearchContext, never, SearchStateEvent>["send"];
  query: string;
  selectedClass: AssetClassesKeys;
  selectedYield?: string;
  hideNonTradable: boolean;
  tradabilityFilters: Record<string, Filter>;
  selectedRatings: string[];
}

export default function SearchOptionsBar({
  query,
  selectedClass,
  selectedYield,
  tradabilityFilters,
  hideNonTradable,
  selectedRatings,
  send
}: Props) {
  const setAssetClass = useCallback(
    selected => {
      // We should default to un-checking the illiquid box when the user first selects MFs:
      // And then when the user goes back to selecting another asset, the box should be checked again.
      if (
        (selected.key === "mutualFunds" && hideNonTradable) ||
        (selected.key !== "mutualFunds" && !hideNonTradable)
      )
        send("TOGGLE_HIDE");

      send({
        type: "SELECT_ASSET_CLASS",
        assetClass: selected
      });
    },
    [send, hideNonTradable]
  );

  return (
    <Row>
      <OptionsBar fluid>
        <SearchContainer>
          <input
            data-testid="search-query-input"
            className="axp-search-input"
            placeholder="Search by name, issuer, cusip, or ticker"
            onChange={e => send({ type: "QUERY", query: e.target.value })}
            value={query}
          />
        </SearchContainer>
        <FiltersContainer>
          <Col xs={4} xl={4}>
            <ProductTypeFilter
              selectedClass={selectedClass}
              setAssetClass={setAssetClass}
            />
          </Col>
          <Col xs={4} xl={4}>
            <YieldFilter
              setYieldFilter={selected => {
                send({ type: "SELECT_YIELD_FILTER", yieldFilter: selected });
              }}
              selectedYield={selectedYield}
            />
          </Col>
          <Col xs={6} lg={5}>
            <RatingsSlider
              value={selectedRatings}
              setValue={data =>
                send({
                  type: "SELECT_RATINGS_RANGE",
                  ratings: data
                })
              }
              disabled={!/(munis)|(corporates)|(bonds)/.test(selectedClass)}
            />
          </Col>
          <Col
            xs={7}
            xl={6}
            className="d-flex align-items-center justify-content-center hide-non-tradable"
          >
            <Form.Check
              type="checkbox"
              label="Hide Illiquid/Non-Tradable"
              value={String(hideNonTradable)}
              checked={hideNonTradable}
              onChange={() => send("TOGGLE_HIDE")}
              disabled={Object.keys(tradabilityFilters).length === 0}
            />
          </Col>
          <Col
            xs={3}
            xl={2}
            className="d-flex align-items-center justify-content-center"
          >
            <button
              data-testid="clear-all-search-options"
              type="button"
              className="btn-clear-filters"
              onClick={() =>
                send({
                  type: "CLEAR_ALL"
                })
              }
            >
              Clear All
            </button>
          </Col>
        </FiltersContainer>
      </OptionsBar>
    </Row>
  );
}
