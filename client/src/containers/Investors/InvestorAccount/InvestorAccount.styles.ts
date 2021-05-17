import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--border-new);
  padding: 0.35rem;
  border-radius: 0.7rem;

  > * {
    width: 100%;
    max-width: 800px;
    flex-grow: 1;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &::before {
    display: block;
    width: 100%;
    height: 1rem;
    border-radius: 0.4rem 0.4rem 0 0;
    content: " ";
    background: var(--dark);
  }
`;

export const InvestorAccountNav = styled.div.attrs({
  className: "col-5"
})``;

export const InvestorAccountContent = styled.div.attrs({
  className: "col-19"
})``;

export const List = styled.ul`
  width: 100%;
  padding: 0 15px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid var(--border-new);
  :first-of-type {
    border-top: 1px solid var(--border-new);
  }
`;

export const RowButton = styled.button`
  height: 30px;
  min-width: 64px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  background: var(--medium);
  font-weight: bold;
  font-size: 14px;
  justify-content: center;
  text-transform: capitalize;
`;

export const ColumnLabel = styled.span`
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--subtext-3);
`;

export const ColumnValue = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
`;
