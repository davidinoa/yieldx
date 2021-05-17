import styled from "styled-components";
import { mediaQuery } from "../../../../theme/breakpoints.style";

export const PortfolioSectionWrapper = styled.section.attrs({
  className: "container-fluid"
})`
  //margin-top:2rem;
  margin-bottom: 3rem;
  align-items: flex-start;

  .analytics-card-container {
    min-height: 20rem;
    margin-bottom: 0.85rem;

    > div {
      display: flex;
      height: 100%;
    }
  }
`;

export const SectionTitle = styled.div.attrs({
  className: "col-16"
})`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  h2 {
    margin: 0;
    font-size: 1.15rem;

    ${mediaQuery("xxl")} {
      font-size: 1.5rem;
    }
  }
  svg {
    margin: -0.5rem 0 0 0.35rem;
    vertical-align: middle;
    width: 0.85rem;
    height: 0.85rem;
    ${mediaQuery("xxl")} {
      width: 1rem;
      height: 1rem;
    }
  }
`;
export const SectionEdit = styled.div.attrs({
  className: "col-8 d-flex align-items-center justify-content-end"
})`
  span {
    border: solid 1px var(--border-new);
    color: var(--primary);
    border-radius: 0.25rem;
    font-weight: bold;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;

    ${mediaQuery("xxl")} {
      font-size: 0.9rem;
    }

    b {
      font-weight: bold;
      color: var(--lightest);
      letter-spacing: 0.2em;
      font-size: 0.5rem;
      ${mediaQuery("xxl")} {
        font-size: 0.725rem;
      }
    }
  }
`;

export const EditPositionsButton = styled.button.attrs({
  type: "button",
  className: "pdf-hidden"
})`
  height: 2.5rem;
  min-width: fit-content;
  border: none;
  font-weight: bold;
  text-transform: capitalize;
  background: var(--primary);
  border-radius: 5px;
  font-size: 0.9rem;
  padding: 0.45rem 1.45rem;

  ${mediaQuery("xxl")} {
    padding: 0.55rem 1.75rem;
    font-size: 0.9rem;
  }
`;
