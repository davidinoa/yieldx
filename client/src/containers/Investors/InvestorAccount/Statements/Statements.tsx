import { StatementResponse, StatementsApi } from "@bondhouse/apex";
import dayjs from "dayjs";
import React from "react";
import { selectorFamily, useRecoilValue } from "recoil";
import { ReactComponent as NoItemIcon } from "../../../../assets/svg/no-statement.svg";
import { NoItemAvailable } from "../../../../components/ListPages/ListPages.styles";
import Pagination from "../../../../elements/Pagination/Pagination";
import getCurrPageData from "../../../../util/getCurrPageData";
import { ColumnValue, RowButton } from "../InvestorAccount.styles";
import {
  DataColumn,
  Root,
  StatementList,
  StatementRow
} from "./Statement.styles";

const statementsApi = new StatementsApi();

interface Props {
  investorId: string;
}

const getStatements = selectorFamily({
  key: "getStatements",
  get: (investorId: string) => async () => {
    const now = dayjs();
    const month = now.month();
    try {
      const {
        data: { statementsResponse }
      } = await statementsApi.getAccountStatementsForInvestor(
        investorId,
        "01",
        "2020",
        `${month < 10 ? `0${month}` : month}`,
        `${now.year()}`
      );
      statementsResponse.sort((a, b) => {
        if (a.statmentDate && b.statmentDate) {
          if (dayjs(a.statmentDate) > dayjs(b.statmentDate)) {
            return 1;
          }
          return -1;
        }
        return 0;
      });
      return statementsResponse;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
});

function Statements({ investorId }: Props) {
  const statements = useRecoilValue(getStatements(investorId));
  const [currPage, setCurrPage] = React.useState(1);
  const totalPages = Math.ceil((statements?.length || 0) / 7);
  return (
    <>
      {statements.length > 0 ? (
        <Root>
          <StatementList>
            {getCurrPageData(statements, 7, currPage).map(
              (statement: StatementResponse) => (
                <StatementRow key={statement.statementURL}>
                  <DataColumn className="col">
                    <ColumnValue>{statement.documentType}</ColumnValue>
                  </DataColumn>
                  <DataColumn className="col">
                    <ColumnValue>
                      {dayjs(statement.statmentDate).format("ddd MM/DD/YYYY")}
                    </ColumnValue>
                  </DataColumn>
                  <DataColumn>
                    <RowButton
                      // eslint-disable-next-line no-return-assign
                      onClick={() =>
                        statement.statementURL
                          ? (window.location.href = statement.statementURL)
                          : undefined
                      }
                    >
                      Download
                    </RowButton>
                  </DataColumn>
                </StatementRow>
              )
            )}
          </StatementList>
          <Pagination
            total={totalPages}
            current={currPage}
            handleChange={setCurrPage}
          />
        </Root>
      ) : (
        <NoItemAvailable>
          <NoItemIcon />
          <h2>No statements</h2>
          <p>
            It looks like there aren&rsquo;t any statements. They&rsquo;ll be
            available soon.
          </p>
        </NoItemAvailable>
      )}
    </>
  );
}

export default Statements;
