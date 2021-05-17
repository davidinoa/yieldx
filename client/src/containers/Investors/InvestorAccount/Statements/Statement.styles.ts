import styled from "styled-components";
import { List, ListItem } from "../InvestorAccount.styles";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  ul {
    padding: 0;
    list-style: none;
  }
`;

export const DataColumn = styled.div.attrs((props: { className: string }) => ({
  className: props.className ?? "col-auto"
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
`;

export const StatementRow = styled(ListItem).attrs({ className: "row" })``;

export const StatementList = styled(List).attrs({
  className: "container-fluid"
})``;

export default Root;
