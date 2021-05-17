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

  .comparison-toggle {
    top: 0;
    right: 50%;
    transform: translateX(50%);
  }

  .toggle-button {
    font-size: 10px;
    width: 43px;
    :first-of-type {
      margin-left: 5px;
    }
    :last-of-type {
      margin-right: 5px;
    }
  }

  .vertical-separator {
    height: 80%;
    width: 2px;
    background: var(--border-new);
  }
`;
