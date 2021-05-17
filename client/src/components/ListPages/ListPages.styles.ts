import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { mediaQuery } from "theme/breakpoints.style";

export const ButtonStyle = css`
  text-transform: capitalize;
  font-weight: bold;
  border-radius: 0.25rem;
  padding: 0.55rem 2.15rem;
  font-size: 0.9rem;
  line-height: normal;
  white-space: nowrap;

  ${mediaQuery("xxl")} {
    padding: 0.65rem 2.75rem;
    font-size: 0.95rem;
  }
`;

export const RowNameContent = css`
  display: flex;
  align-items: flex-start;
  span {
    font-weight: normal;
    font-size: 0.875rem;
    ${mediaQuery("xxl")} {
      font-size: 1rem;
    }
  }
  span,
  .label {
    padding: 0;
  }
`;

export const ListStatuses = styled.div.attrs({
  className: "col-17 col-xxl-16"
})`
  display: flex;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  align-items: center;
  justify-content: flex-start;

  ${mediaQuery("xxl")} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  span {
    display: flex;
    align-items: center;
    vertical-align: middle;
    position: relative;
    padding-right: 0.75rem;
    margin-right: 0.75rem;
    font-size: 0.65rem;

    ${mediaQuery("xxl")} {
      padding-right: 1.25rem;
      margin-right: 1.25rem;
      font-size: 0.75rem;
    }

    i {
      display: inline-block;
      margin-right: 0.25rem;
    }
    b {
      margin-right: 5px;
      margin-left: 5px;
      font-weight: bold;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--subtext-3);
    }

    &::after {
      content: "";
      border-right: solid 1px var(--light);
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }

    &:last-of-type {
      &::after {
        border: none;
      }
    }
  }
`;
export const ListFilters = styled.div.attrs({
  className: "col-7 col-xxl-8"
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .custom-control.custom-checkbox {
    .custom-control-.label {
      padding-top: 5px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.2em;
      ::before {
        background: transparent;
        border: 1.5px solid var(--subtext-3);
      }
    }
  }
`;

export const ListContainer = styled.div.attrs({
  className: "container fluid"
})`
  padding-top: 0.35rem;
  .order-filters {
    max-width: 15.625rem;
    margin-left: auto;
  }
  ${mediaQuery("xxl")} {
    padding-top: 1rem;
  }
`;

export const ColVal = styled.span`
  font-weight: bold;
  color: var(--text);
  font-size: 0.725rem;
  ${mediaQuery("xxl")} {
    font-size: 0.875rem;
  }
  margin: 0;
  line-height: normal;
`;

export const ColLabel = styled.span`
  margin: 0;
  font-weight: bold;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--subtext-3);
  ${mediaQuery("xxl")} {
    font-size: 0.6875rem;
  }
`;

export const ListCol = styled(Col)`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  min-height: 3rem;
  align-items: flex-start;
  &.centered {
    align-items: center;
  }

  &.borders-between {
    &::after {
      content: "";
      border-right: solid 1px var(--border-new);
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }

    &:last-of-type {
      &::after {
        border: none;
      }
    }
  }
`;

export const ListRow = styled(Row)`
  height: 70px;
  list-style: none;
  border: 1px solid var(--light);
  background: ${props => props.background ?? "var(--dark)"};
  border-radius: 5px;
  display: ${props => (props.hidden ? "none" : undefined)};
  position: relative;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.45rem;

  .no-borders::after {
    border-right: none !important;
    border-left: none !important;
  }

  ${mediaQuery("xxl")} {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    margin-bottom: 0.575rem;
  }
`;

export const StatusColumn = styled.div.attrs({
  className: "col-1 no-borders"
})`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// TODO: col based sizing makes spinner oblong, but using - min-width: 48px; makes the row overflow

export const InvestorRowName = styled(Col)`
  span {
    padding: 0;
  }
`;

export const InvestorRowType = styled(Col).attrs({
  className: "col-4 col-xxl-3 centered"
})``;

export const UserNameColumn = styled.div.attrs({
  className: "col-10 col-xxl-12"
})`
  ${RowNameContent};
`;

export const UserEmailColumn = styled(Col).attrs({
  className: "col-6"
})`
  .wrap-text {
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
`;

export const PortfolioRowName = styled.div.attrs({
  className: "col-14 col-xxl-16"
})`
  ${RowNameContent};
`;
export const PortfolioRowTemplate = styled(Col).attrs({
  className: "col-2 centered"
})``;

export const RowCreation = styled(Col).attrs({
  className: "col-4 col-xxl-3 centered"
})``;

export const CTAColumn = styled.div.attrs({
  className:
    "d-flex flex-column col-3 col-xxl-2 centered justify-content-center"
})``;

export const Status = styled.i`
  display: flex;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  margin: 0 auto;

  ${mediaQuery("xxl")} {
    height: 6px;
    width: 6px;
  }

  &.active,
  &.ready {
    background: var(--active);
  }
  &.deactivated,
  &.inactive,
  &.blocked,
  &.closed,
  &.terminated {
    background: var(--subtext-3);
  }
  &.tracking {
    background: var(--tracking);
  }
  &.pending {
    background: var(--caution);
  }
  &.error {
    background: var(--issue);
  }
`;

export const DetailsButton = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--page);
  font-weight: bold;
  border-radius: 0.25rem;
  color: white;
  text-decoration: none;
  width: 70px;
  height: 26px;
  font-size: 0.8rem;

  ${mediaQuery("xxl")} {
    width: 90px;
    height: 30px;
    font-size: 0.975rem;
  }

  :hover {
    text-decoration: none;
    color: white;
  }
`;

export const InviteButton = styled.button`
  ${ButtonStyle};
  background: var(--primary);
  margin-left: 1rem;

  ${mediaQuery("xxl")} {
    font-size: 0.95rem;
  }
`;

export const CreateInvestorButton = styled(Link).attrs({})`
  ${ButtonStyle};
  border: 1px solid var(--border-new);
  background: none;
  color: var(--primary);

  :hover {
    text-decoration: none;
    border: 1px solid var(--border-3);
  }

  &.empty-list {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
  }
`;

export const EmptyList = styled(Container).attrs({
  fluid: true
})`
  display: flex;
  min-height: 35rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;

  .content {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: solid 1px var(--border-new);
  }
`;

export const NoItemAvailable = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 2rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 420px;
  text-align: center;

  h2 {
    font-size: 1.75rem;
    margin: 0;
  }
  p {
    color: var(--subtext-3);
    font-size: 1.1rem;
  }
`;
