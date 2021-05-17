import React from "react";
import { LinkedBanksAccountsApi } from "@bondhouse/investor";
import ModalBase from "../../../components/ModalBase/ModalBase";
import {
  InfoText,
  ButtonContainer,
  CancelButton,
  ContinueButton
} from "../../../components/ModalBase/ModalBase.styles";

interface Props {
  onHide: () => void;
  show: boolean;
  investorId: string;
  linkedBankId: string;
  setError: (err?: string) => void;
  isSubmitting: boolean;
  setSubmitting: (isSubmitting: boolean) => void;
}

const linkedBanksAccountsApi = new LinkedBanksAccountsApi();

function UnlinkBankModal({
  onHide,
  setError,
  show,
  investorId,
  linkedBankId,
  isSubmitting,
  setSubmitting
}: Props) {
  return (
    <ModalBase onHide={onHide} show={show}>
      <h1>Are you sure you want to unlink this bank account?</h1>
      <InfoText>
        Once you confirm, the account will be unlinked from YieldX
      </InfoText>
      <ButtonContainer>
        <CancelButton
          disabled={isSubmitting}
          onClick={async () => {
            setSubmitting(true);
            setError(undefined);
            try {
              await linkedBanksAccountsApi.removeLinkedBankAccount(
                investorId,
                linkedBankId
              );
              setSubmitting(false);
              onHide();
            } catch (e) {
              setError(e.response?.data?.message || "unknown error");
              setSubmitting(false);
              onHide();
            }
          }}
        >
          Confirm
        </CancelButton>
        <ContinueButton onClick={onHide}>Dismiss</ContinueButton>
      </ButtonContainer>
    </ModalBase>
  );
}

export default UnlinkBankModal;
