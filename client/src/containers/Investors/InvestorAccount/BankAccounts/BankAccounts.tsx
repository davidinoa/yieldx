import React, { useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { Root, BankList, BankRow } from "./BankAccounts.styles";
import { DataColumn } from "../InvestorPortfolios/InvestorPortfolios.styles";
import { ColumnValue, ColumnLabel, RowButton } from "../InvestorAccount.styles";
import { displayDate } from "containers/Users/UserList/UserList";
import UnlinkBankModal from "../../Modals/UnlinkBankModal";
import { ReactComponent as NoItemIcon } from "assets/svg/no-bank.svg";
import NoItemsMessage from "components/NoItemsMessage";
import PlaidButton from "components/PlaidButton/PlaidButton";
import ErrorAlert from "elements/Alert/ErrorAlert";
import usePagination from "hooks/usePagination";
import getCurrPageData from "util/getCurrPageData";
import Pagination from "elements/Pagination/Pagination";
import { LinkedBankAccount } from "providers/graphql/hooks";

function BankAccounts({
  data = [],
  investorId
}: {
  data?: LinkedBankAccount[];
  investorId: string;
}) {
  const [currentPage, totalPages, setCurrentPage] = usePagination(data, 6);
  const [bankId, setId] = React.useState<string>();
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string>();
  const location = useLocation();
  const history = useHistory();
  const goBack = useCallback(history.goBack, [history]);
  return (
    <>
      {!data.length && (
        <>
          <div className="" style={{ flexGrow: 0 }}>
            <PlaidButton investorId={investorId} onDone={goBack} />
          </div>
          <NoItemsMessage
            title="No banks"
            message="It looks like there aren't any bank accounts linked yet."
            Icon={<NoItemIcon />}
          />
        </>
      )}
      {bankId && (
        <UnlinkBankModal
          onHide={goBack}
          show={location.hash === "#unlink-bank"}
          investorId={investorId}
          linkedBankId={bankId}
          setError={setError}
          isSubmitting={isSubmitting}
          setSubmitting={setSubmitting}
        />
      )}
      {!!data.length && (
        <Root>
          <Row>
            <Col>
              <div style={{ float: "right" }}>
                <PlaidButton investorId={investorId} onDone={goBack} />
              </div>
            </Col>
          </Row>
          <br />
          <BankList>
            {getCurrPageData(data, 6, currentPage).map(account => (
              <BankRow key={account.id}>
                <DataColumn className="col">
                  <ColumnValue>{account.bankName}</ColumnValue>
                  <ColumnLabel>bank name</ColumnLabel>
                </DataColumn>
                <DataColumn>
                  <ColumnValue>{account.accountType.toLowerCase()}</ColumnValue>
                  <ColumnLabel>Account Type</ColumnLabel>
                </DataColumn>
                <DataColumn>
                  <ColumnValue>{displayDate(account.createdAt)}</ColumnValue>
                  <ColumnLabel>Link Date</ColumnLabel>
                </DataColumn>
                <DataColumn>
                  <ColumnValue>{`**** **** **** ${account.mask}`}</ColumnValue>
                  <ColumnLabel>Account Number</ColumnLabel>
                </DataColumn>
                <DataColumn>
                  <RowButton
                    onClick={() => {
                      setId(account.id);
                      history.push(`/investors/${investorId}#unlink-bank`);
                    }}
                  >
                    unlink
                  </RowButton>
                </DataColumn>
              </BankRow>
            ))}
          </BankList>
          <Pagination
            total={totalPages}
            current={currentPage}
            handleChange={setCurrentPage}
          />
          {error && <ErrorAlert message={error} />}
        </Root>
      )}
    </>
  );
}

export default BankAccounts;
