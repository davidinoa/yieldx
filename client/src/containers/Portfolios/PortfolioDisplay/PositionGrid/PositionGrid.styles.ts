import styled from "styled-components";

export const Root = styled.div.attrs({
  className: "col"
})`
  margin-bottom: 1rem;
  .ag-theme-alpine-dark,
  .ag-theme-alpine {
    height: 400px;
    width: 100%;
    .ag-popup {
      height: 0px;
      width: 0px;
    }
  }
  .ag-cell {
    display: flex;
    align-items: center;
    justify-content: flex-center;
  }
  .ag-react-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-center;
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

  .ag-header {
    background: var(--dark) !important;
  }
`;

export const AdditionalRow = styled.div`
  background: var(--dark);
  width: 100%;
  height: 50px;
  border: 1px solid var(--border-new);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  .row-value,
  .row-label {
    display: inline-block;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .row-label {
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-right: 10px;
    color: #6980a6;
  }
`;
