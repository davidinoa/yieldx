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
  & + & {
    border-left: 1px solid var(--border-new);
  }
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
`;

export const Status = styled.li`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  div:first-child {
    margin-right: 5px;
  }
`;

export const StatusLegend = styled.ul`
  display: flex;
  align-self: flex-end;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  > ${Status} + ${Status} {
    margin-left: 20px;
  }
`;

export const BankRow = styled(ListItem).attrs({ className: "row" })``;

export const BankList = styled(List).attrs({
  className: "container-fluid"
})``;

export default Root;
