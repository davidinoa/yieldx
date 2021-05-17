import styled from "styled-components";

export const ComparisonRow = styled.div`
  .comparison-label {
    font-family: var(--font-secondary);
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }

  .horizontal-separator {
    height: 2px;
    width: 80%;
    background: var(--border-new);
  }
  .vertical-separator {
    height: 80%;
    width: 2px;
    background: var(--border-new);
  }
  .comparison-value-container {
    margin: auto auto 0 auto;
  }
`;
