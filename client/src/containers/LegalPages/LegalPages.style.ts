import styled from "styled-components";
import { Container, Col } from "react-bootstrap";

export const LegalMenu = styled(Col).attrs({})`
  border-bottom: solid 1px var(--border-new);
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    padding: 0.75rem 0;
    margin: 0;
    display: flex;
    align-items: center;
    flex-flow: row;
    position: relative;
    li {
      padding: 0.25rem 2rem;
      position: relative;

      &::after {
        content: "";
        border-right: solid 1px var(--border-new);
        height: 100%;
        width: 1px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
      }

      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }
  }

  a {
    display: flex;
    padding: 0.5rem 0 0.15rem;
    margin-bottom: 0.25rem;
    font-weight: bold;
    color: var(--subtext-3);
    border-bottom: solid 2px transparent;
    transition: all 300ms ease-out;

    &,
    &:hover {
      text-decoration: none;
    }
    &:hover {
      color: white;
    }

    &.active {
      color: white;
      border-color: var(--primary);
    }
  }
`;
export const LegalWrapper = styled(Container).attrs({})`
  padding-bottom: 3rem;

  ul,
  li,
  ol,
  p,
  span,
  b,
  table,
  tr,
  td {
    color: var(--subtext-3);
  }
  a {
    color: var(--primary);
    text-decoration: underline;
  }
  b {
    color: var(--subtext-1);
  }
  .subtitle {
    text-decoration: underline;
    display: block;
  }

  table {
    width: 95%;
    margin: 1rem auto;
    padding: 0.25rem 1rem;
    tr {
      td {
        &:first-of-type {
          width: 25%;
        }
      }
    }
  }
  ol {
    counter-reset: item;
    padding: 0 0 0 0.75rem;
    > li {
      margin-bottom: 0.5rem;
      &:before {
        font-weight: bold;
        color: var(--subtext-1);
      }
      > ol {
        > li {
          color: var(--subtext-3);
          &::before {
            color: var(--subtext-3);
            font-weight: normal;
          }
        }
      }
    }
  }
  li {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  li:before {
    content: counters(item, ".") ". ";
    counter-increment: item;
  }
`;
