import React from "react";
import { InvestorsApi } from "@bondhouse/investor";
import { ApexAccountsApi } from "@bondhouse/apex";
import { RouteComponentProps, useHistory } from "react-router-dom";
import ModalBase from "components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton,
  InfoText
} from "components/ModalBase/ModalBase.styles";
import { ApexAccount2 } from "providers/graphql/hooks";

interface Props {
  onHide: () => void;
  show: boolean;
  investorId: string;
  apexAccount?: ApexAccount2;
  portfoliosWarning?: boolean;
}

const investorsApi = new InvestorsApi();
const apexAccountsApi = new ApexAccountsApi();

function CloseInvestorModal({
  onHide,
  show,
  investorId,
  apexAccount,
  portfoliosWarning
}: Props) {
  const history = useHistory();
  return (
    <ModalBase onHide={onHide} show={show}>
      <h1>
        {portfoliosWarning
          ? "You can't close your investor account right now"
          : "Are you sure you want to close this investor account?"}
      </h1>
      <InfoText>
        {portfoliosWarning
          ? "You must liquidate all your portfolios before closing your investor account."
          : "Once you confirm this option, you won't be able to revert this action."}
      </InfoText>
      {portfoliosWarning ? (
        <ButtonContainer>
          <CancelButton onClick={onHide}>Cancel</CancelButton>
          <ContinueButton
            onClick={() => history.push(`/investors/${investorId}#portfolios`)}
          >
            View Portfolios
          </ContinueButton>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <CancelButton
            onClick={() => closeInvestor(investorId, history, apexAccount)}
          >
            Confirm
          </CancelButton>
          <ContinueButton onClick={onHide}>Dismiss</ContinueButton>
        </ButtonContainer>
      )}
    </ModalBase>
  );
}

async function closeInvestor(
  investorId: string,
  history: RouteComponentProps["history"],
  apexAccount?: ApexAccount2
) {
  try {
    if (apexAccount) await apexAccountsApi.closeApexAccount(apexAccount.id);
  } catch (err) {
    console.error(err);
  }
  try {
    await investorsApi.removeInvestor(investorId);
    history.push("/investors");
  } catch (err) {
    console.error(err);
  }
}

export default CloseInvestorModal;
