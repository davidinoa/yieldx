import React, { useCallback } from "react";
import { Dropdown } from "react-bootstrap";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import {
  Container,
  InvestorRow as BankRow,
  SelectButton,
  TextContainer,
  Title
} from "containers/PortfolioExecution/Select.styles";
import { Spinner } from "elements/Spinner/Spinner";
import Pagination from "elements/Pagination/Pagination";
import getCurrPageData from "util/getCurrPageData";
import PlaidButton from "components/PlaidButton/PlaidButton";
import BottomNav from "containers/Investors/CreateInvestor/BottomNav/BottomNav";
import { ReactComponent as NoItemIcon } from "assets/svg/no-bank.svg";
import NoItemsMessage from "components/NoItemsMessage";
import { selectedLinkedBankState } from "services/InvestorService";
import {
  LinkedBankAccount,
  useInvestorGetLinkedBankAccountsQuery
} from "providers/graphql/hooks";

interface Props {
  onNext?: () => void;
  investorId: string;
}

function SelectBankAccount({ onNext, investorId }: Props) {
  const history = useHistory();
  const [currPage, setCurrPage] = React.useState(1);
  const {
    data: bankData,
    loading: bankLoading
  } = useInvestorGetLinkedBankAccountsQuery({
    variables: {
      investorId
    },
    skip: !investorId
  });
  const bankAccounts = bankData?.investorGetLinkedBankAccounts?.linkedBankAccounts.filter(
    it => !!it
  ) as LinkedBankAccount[] | undefined;
  const goBack = useCallback(history.goBack, [history]);
  const [selectedBank, selectBank] = useRecoilState(selectedLinkedBankState);
  const totalPages = Math.ceil((bankAccounts?.length || 0) / 5);
  return (
    <Container className="row mt-5">
      <div className="col-16 offset-4">
        <div className="d-flex align-items-end justify-content-between">
          <div>
            <Title>bank list</Title>
            <h1 className="m-0">Select a bank</h1>
          </div>
          <div className="d-flex align-items-end">
            <div className="dropdown-container mx-3">
              <p className="dropdown-label">sort by</p>
              <Dropdown drop="down">
                <Dropdown.Toggle id="dropdown-basic">
                  <span style={{ marginRight: 115 }}>Sort By</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Account type</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <PlaidButton investorId={investorId} onDone={goBack} />
          </div>
        </div>
        <div className="data-rows">
          {bankAccounts &&
            bankAccounts.length > 0 &&
            getCurrPageData(bankAccounts, 5, currPage).map(bank => {
              const { id, bankName, accountType, createdAt, mask } = bank;

              return (
                <BankRow key={id} className="row">
                  <div className="col right-border m-auto">
                    <div>
                      <p className="value">{bankName}</p>
                      <p className="label">bank name</p>
                    </div>
                  </div>
                  <div className="col-4 offset-1 right-border m-auto">
                    <TextContainer>
                      <p className="value">{accountType}</p>
                      <p className="label">account type</p>
                    </TextContainer>
                  </div>
                  <div className="col-4 offset-1 right-border m-auto">
                    <TextContainer>
                      <p className="value">
                        {dayjs(createdAt).format("MMM D, YYYY")}
                      </p>
                      <p className="label">link date</p>
                    </TextContainer>
                  </div>
                  <div className="col-4 offset-1 right-border m-auto">
                    <TextContainer>
                      <p className="value">{`**** **** **** ${mask}`}</p>
                      <p className="label">account number</p>
                    </TextContainer>
                  </div>
                  <div className="col-3 center">
                    <SelectButton
                      type="button"
                      className={
                        selectedBank?.id === id ? "selected" : undefined
                      }
                      onClick={() => selectBank(bank)}
                    >
                      {selectedBank?.id === id ? "Selected" : "Select"}
                    </SelectButton>
                  </div>
                </BankRow>
              );
            })}
          {bankLoading || (!bankAccounts && <Spinner />)}
          {bankAccounts && bankAccounts.length === 0 && (
            <NoItemsMessage
              className="m-auto"
              title="No linked bank accounts"
              message="It looks like there aren't any bank accounts linked yet."
              Icon={<NoItemIcon />}
            />
          )}
        </div>
        <Pagination
          total={totalPages}
          current={currPage}
          handleChange={setCurrPage}
        />
      </div>
      <BottomNav
        onNext={
          onNext
          // const slugs = path.split('/funding-source/linked-bank')
          // history.push(`${slugs[0]}/review-options`, history.location.state);
        }
        onPrevious={() => history.goBack()}
        blockNext={!selectedBank}
      />
    </Container>
  );
}

export default SelectBankAccount;
