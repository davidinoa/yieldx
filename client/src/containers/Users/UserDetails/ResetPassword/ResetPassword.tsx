import React from "react";
import { PasswordResetTicketsApi } from "@bondhouse/iam";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton,
  InfoText
} from "../../../../components/ModalBase/ModalBase.styles";

const service = new PasswordResetTicketsApi();
interface Props {
  show: boolean;
  email: string;
  onHide: (options?: {
    shouldRefreshUsers?: boolean;
    shouldRefreshPage?: boolean;
  }) => void;
}

export default function ResetPassword({ show, onHide, email }: Props) {
  return (
    <ModalBase onHide={onHide} show={show}>
      <h1>Are you sure you want to reset this user’s password?</h1>
      <InfoText>
        We&rsquo;ll send an e-mail to the user and it&rsquo;ll be necessary to
        create a new password.
      </InfoText>
      <ButtonContainer>
        <CancelButton onClick={() => onHide()}>Cancel</CancelButton>
        <ContinueButton
          onClick={async () => {
            try {
              const response = await service.createPasswordResetTicket(email);
              if (response) {
                onHide({ shouldRefreshPage: true });
              }
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Reset Password
        </ContinueButton>
      </ButtonContainer>
    </ModalBase>
  );
}
