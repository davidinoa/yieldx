import styled from "styled-components";

export const MetadataRow = styled.div`
  max-width: 45%;
  &.live-inpaas {
    max-width: 83%;
  }
  &.paper-inpaas {
    max-width: 66%;
  }
  border-top: 1px solid var(--border-new);
  .small-col {
    max-width: 160px;
  }
  .large-col {
    max-width: 200px;
  }
  .metadata-label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--subtext-3);
  }

  .metadata-value {
    font-family: var(--font-secondary);
    font-size: 12px;
    line-height: 16px;
    a {
      display: inline-block;
      color: white;
    }
  }

  .goal-min-max {
    font-family: var(--font-secondary);
    font-size: 11px;
    line-height: 15px;
    color: var(--subtext-3);
  }

  .goal-separator {
    height: 10px;
    width: 1.5px;
    background: var(--border-new);
  }
`;
