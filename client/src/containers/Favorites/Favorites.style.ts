/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Container } from "react-bootstrap";

export const WatchListWrapper = styled(Container)`
  .ag-theme-alpine-dark {
    height: 600px;
    //width: 100%;
    .ag-popup {
      height: 0px;
      width: 0px;
    }
  }
  .ag-header-cell-label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ag-header-cell-text {
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }
`;
