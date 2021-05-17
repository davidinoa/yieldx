/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";
import { Container } from "react-bootstrap";
import ReactSlider, { ReactSliderProps } from "react-slider";
import React from "react";
import { AXP, navbar, bottomNav } from "../../../theme/theme.style";
import { mediaQuery } from "../../../theme/breakpoints.style";
import { ratings } from "./SearchOptionsBar/RatingsSlider/RatingsSlider";

export const agGridHeight = {
  xs: css`
    height: calc(
      100vh - ${navbar.height.xs} - ${bottomNav.height.xs} -
        ${AXP.titleRow.height.xs} - ${AXP.statusRow.height.xs}
    );
  `,
  md: css`
    height: calc(
      100vh - ${navbar.height.xs} - ${bottomNav.height.xs} -
        ${AXP.titleRow.height.xs} - ${AXP.filterRow.height.xs} -
        ${AXP.filterRow.height.xs} - ${AXP.statusRow.height.xs}
    );
  `,
  lg: css`
    height: calc(
      100vh - ${navbar.height.xs} - ${bottomNav.height.xs} -
        ${AXP.titleRow.height.xs} - ${AXP.filterRow.height.xs} -
        ${AXP.statusRow.height.xs}
    );
  `,
  xxl: css`
    height: calc(
      100vh - ${navbar.height.xxl} - ${bottomNav.height.xxl} -
        ${AXP.titleRow.height.xxl} - ${AXP.filterRow.height.xxl} -
        ${AXP.statusRow.height.xxl}
    );
  `
};

export const SearchPageContainer = styled(Container)`
  *::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }
  ::-webkit-scrollbar-button {
    background: #cccccc !important;
  }
  *::-webkit-scrollbar-track-piece {
    background: #888888 !important;
  }
  *::-webkit-scrollbar-thumb {
    background: #eeeeee !important;
  }

  .ag-theme-alpine-dark {
    ${agGridHeight.xs};
    width: 100%;

    ${mediaQuery("md")} {
      ${agGridHeight.md};
    }
    ${mediaQuery("lg")} {
      ${agGridHeight.lg};
    }
    ${mediaQuery("xxl")} {
      ${agGridHeight.xxl};
    }

    .ag-popup {
      height: 0px;
      width: 0px;
    }
  }
  .ag-header-cell,
  .ag-header-group-cell,
  .ag-cell {
    line-height: 24px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .ag-header-cell-label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ag-header-cell-text {
    font-weight: bold;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }
  .ag-filter-toolpanel-search,
  .ag-group-title-bar {
    background: var(--page);
  }
  .ag-tool-panel-wrapper,
  .ag-filter-toolpanel-instance-filter {
    background: var(--dark);
  }
`;

export const OptionsBar = styled(Container)`
  border-bottom: 1px solid var(--border-new);
  display: none;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
  //background: rgba(255,0,.3,.3);

  ${mediaQuery("md")} {
    display: flex;
  }
  ${mediaQuery("lg")} {
    flex-direction: row;
    height: ${AXP.titleRow.height.xs};
  }
  ${mediaQuery("xxl")} {
    height: ${AXP.titleRow.height.xxl};
  }

  .slider-label {
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }

  .hide-non-tradable {
    input {
      margin-top: 0;
    }
    label {
      display: flex;
      font-weight: bold;
      font-size: 9px;
      letter-spacing: 0.21em;
      text-transform: uppercase;
      margin-left: 0.15rem;

      ${mediaQuery("xxl")} {
        font-size: 11px;
      }
    }
  }
  .disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  button.btn-clear-filters {
    background: var(--lightest);
    font-size: 0.65rem;
    font-weight: bold;
    padding: 0.35rem 0.5rem;
    border-radius: 0.25rem;
    ${mediaQuery("xxl")} {
      padding: 0.35rem 0.75rem;
      font-size: 0.75rem;
    }
  }
`;

export const SearchContainer = styled.div.attrs({
  className: "d-flex col-24 col-lg-6 col-xl-5 align-items-center"
})`
  flex: none;
  height: ${AXP.filterRow.height.xs};

  ${mediaQuery("xxl")} {
    height: ${AXP.filterRow.components.searchInput.height.xxl};
    font-size: 0.9rem;
  }

  .axp-search-input {
    width: 100%;
    border: 1px solid var(--border-new);
    background: inherit;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.35rem;
    font-size: 0.85rem;
    height: ${AXP.filterRow.components.searchInput.height.xs};

    ${mediaQuery("xxl")} {
      height: ${AXP.filterRow.components.searchInput.height.xxl};
      font-size: 0.9rem;
      margin-left: 0.75rem;
    }

    ::placeholder {
      color: var(--lightest);
      opacity: 0.75;
    }
  }
`;

export const FiltersContainer = styled.div.attrs({
  className:
    "d-flex col-24 col-lg-18 col-xl-16 col-xxl-16 col-uxl-14 align-items-center"
})`
  height: ${AXP.filterRow.height.xs};
  flex: none;
`;

export const AddToCartButton = styled.button.attrs({
  type: "button",
  className: "d-flex justify-content-start align-items-center"
})`
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  width: 100%;
  height: 100%;
  background: inherit;
  > svg {
    margin-right: 5px;
  }
`;

export const FavoriteButton = styled.button.attrs({
  type: "button"
})`
  background: inherit;
  > svg.favorite {
    > path {
      fill: white;
      stroke: white;
    }
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
`;

const StyledThumb = styled.div`
  width: 15px;
  height: 15px;
  text-align: center;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  > span {
    position: absolute;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    left: 50%;
    top: -1.5rem;
    transform: translateX(-50%);
  }
`;

export const Thumb: ReactSliderProps["renderThumb"] = (props, state) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledThumb data-testid={`slider-thumb-${state.index}`} {...props}>
    {state.valueNow > 0 && state.valueNow < 25 && (
      <span>{ratings[state.valueNow]}</span>
    )}
  </StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props: any) => {
    if (props.index === 1) return "var(--primary)";
    if (props.isLastValue) return "var(--page)";
    return "var(--border-new)";
  }};
  height: 2px;
`;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Track = (props: any, state: any) => (
  <StyledTrack
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    index={state.index}
    isLastValue={state.value[1] === 25 && state.index === 2}
  />
);

export const GridBottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${AXP.statusRow.height.xs};
  padding: 0 0.75rem;

  ${mediaQuery("xxl")} {
    height: ${AXP.statusRow.height.xxl};
  }

  .label {
    font-weight: bold;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
    font-size: 0.575rem;

    ${mediaQuery("xxl")} {
      font-size: 0.625rem;
    }
  }
  .value {
    margin: 0 0 0 0.5rem;
    font-size: 0.75rem;

    ${mediaQuery("xxl")} {
      font-size: 0.9rem;
    }
  }
`;
