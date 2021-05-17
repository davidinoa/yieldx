import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Root = styled.div`
  background: var(--dark);
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 20%;
  > button {
    background: inherit;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 165%;
    text-align: center;
    color: var(--subtext-3);
    width: 225px;
  }
`;

export const EmptyBrowseButton = styled(Link)`
  height: 40px;
  width: 134px;
  border: 1px solid var(--subtext-3);
  box-sizing: border-box;
  border-radius: 5px;
  font-style: normal;
  background: inherit;
  font-weight: bold;
  font-size: 14px;
  line-height: 165%;
  text-align: center;
  color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  > h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    margin: 0;
  }
  > button {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    background: inherit;
    text-decoration-line: underline;
    padding: 0;
  }
`;

export const RowRoot = styled(Row)`
  border-top: 1px solid var(--border-new);
  width: 100%;
  padding: 8px 0;
  :last-of-type {
    border-bottom: 1px solid var(--border-new);
  }
  .name {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 165%;
    /* or 21px */
    text-transform: uppercase;
  }
  .property {
    border-left: 1px solid var(--border-new);
    border-right: 1px solid var(--border-new);
    margin: auto;
    span:nth-of-type(1) {
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      display: block;
      margin-bottom: 4px;
    }
    span:nth-of-type(2) {
      font-style: normal;
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      text-align: center;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      display: block;
      color: #6980a6;
    }
  }

  .delete {
    text-align: center;
    margin: auto;
    button {
      padding: 0;
      background: inherit;
    }
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(25vh - 7vh);
  align-items: center;
  justify-content: center;
`;

export const OptimizeButton = styled(Link)`
  font-weight: bold;
  width: 100%;
  height: 40px;
  padding: 0 1rem;
  background: var(--primary);
  border-radius: 5px;
  margin-bottom: 2rem;
  text-decoration-line: none;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: white;
    text-decoration-line: none;
  }
`;
export const BrowseButton = styled(Link)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  background: inherit;
  color: white;
  width: max-content;
  text-decoration-line: underline;

  :hover {
    color: white;
  }
`;

export const CartItemList = styled.div`
  overflow-y: auto;
  height: 60vh;
`;
