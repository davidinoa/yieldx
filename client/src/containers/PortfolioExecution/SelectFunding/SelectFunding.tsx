import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  Card,
  Container,
  Root
} from "containers/Investors/InvestorForms/SelectInvestorType/SelectInvestorType.styles";
import { ReactComponent as WireIcon } from "assets/svg/wire-transfer.svg";
import { ReactComponent as Bank } from "assets/svg/bank.svg";
import { Title } from "../Select.styles";
import WireModal from "./WireModal/WireModal";
import { fundingSourceState } from "services/InvestorService";
import AppBottomNav from "elements/AppBottomNav/AppBottomNav";
import { TransferDirection } from "providers/graphql/hooks";

interface Props {
  warn: boolean;
  transferDirection: TransferDirection;
}

function SelectFunding({ warn, transferDirection }: Props) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const setFunding = useSetRecoilState(fundingSourceState);
  return (
    <>
      <WireModal show={warn} />
      <Root xs={{ offset: 4, span: 16 }} className="mt-5">
        <div>
          <Title>bank list</Title>
          <h1 className="mb-3">Select a funding source</h1>
        </div>
        <Container className="d-flex">
          <div className="d-flex justify-content-center align-items-center">
            <Card>
              <WireIcon className="organization" />
              <h1>Wire Transfer</h1>
              <span>
                Initiate a transfer of funds via a wire transfer from the bank
                account of your choice
              </span>
              <button
                type="button"
                onClick={async () => {
                  await setFunding("wire");
                  if (transferDirection === TransferDirection.Withdraw)
                    history.push(`${url}/linked-bank`, history.location.state);
                  else {
                    const slugs = url.split("/funding-source");
                    history.push(
                      `${slugs[0]}/review-options`,
                      history.location.state
                    );
                  }
                }}
              >
                Select
              </button>
            </Card>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Card>
              <Bank className="organization" />
              <h1>Bank</h1>
              <span>
                Initiate a transfer of funds directly from your bank account.
              </span>
              <button
                type="button"
                onClick={async () => {
                  await setFunding("plaid");
                  history.push(`${url}/linked-bank`, history.location.state);
                }}
              >
                Select
              </button>
            </Card>
          </div>
        </Container>
      </Root>
      <AppBottomNav onPrevious={() => history.goBack()} hideNext />
    </>
  );
}

export default SelectFunding;
