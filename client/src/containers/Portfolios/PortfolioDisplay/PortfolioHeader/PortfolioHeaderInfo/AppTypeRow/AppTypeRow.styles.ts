import styled from "styled-components";

export const InfoStatus = styled.div.attrs({
  className: "col-24 d-flex",
  "data-testid": "Header-Info-Status"
})`
  h5 {
    display: inline-block;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.7rem;
    > svg {
      margin: -0.25rem 0.7rem 0 0;

      > path {
        fill: white;
      }
    }
    &.status {
      border-right: solid 1px var(--border-new);
      color: white;
      &::before {
        content: "";
        display: inline-block;
        width: 0.75em;
        height: 0.75em;
        margin-right: 0.5rem;
        border-radius: 100%;
      }
    }
          &.portfolio-status-paper::before{
        background: var(--tracking);
        }
        &.portfolio-status-live::before {
        background: var(--active);
        }
        &.portfolio-status-closed::before {
        background: var(--lightest);
        }
        &.portfolio-status-pending::before {
        background: var(--caution);
        }
  }
`;

export const EditGoalsContainer = styled.div`
  button {
   background: inherit;
   font-weight: bold;
   margin-bottom: 7px;
  font-size: 12px;
  line-height: 15px;
  padding-left: 0;
  color: var(--subtext-3);
  }
  .status-separator {
  margin-left: 10px;
  margin-top: 3px;
    height: 10px;
    width: 1.5px;
    background: var(--border-new);
  }
`;
