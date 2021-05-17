import React from "react";
import { UsersApi } from "@bondhouse/iam";
import ModalBase from "../../../../components/ModalBase/ModalBase";
import {
  ButtonContainer,
  CancelButton,
  ContinueButton,
  InfoText
} from "../../../../components/ModalBase/ModalBase.styles";

const userService = new UsersApi();
interface Props {
  show: boolean;
  userId: string;
  deactivating: boolean;
  onHide: (options?: {
    shouldRefreshUsers?: boolean;
    shouldRefreshPage?: boolean;
  }) => void;
}
function DeactivateUserModal({
  show,
  onHide,
  userId,
  deactivating = true
}: Props) {
  return (
    <ModalBase onHide={onHide} show={show}>
      {deactivating && (
        <>
          <h1>Are you sure you want to deactivate this user?</h1>
          <InfoText>
            Once it&rsquo;s done, user will automatically lose access to YieldX
            platform.
          </InfoText>
          <ButtonContainer>
            <CancelButton
              onClick={async () => {
                try {
                  const response = await userService.blockUser(userId, {
                    block: true
                  });
                  if (response) {
                    onHide({
                      shouldRefreshUsers: false,
                      shouldRefreshPage: true
                    });
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              Deactivate
            </CancelButton>
            <ContinueButton onClick={() => onHide()}>Cancel</ContinueButton>
          </ButtonContainer>
        </>
      )}
      {!deactivating && (
        <>
          <h1>Are you sure you want to reactivate this user?</h1>
          <InfoText>
            Once it&rsquo;s done, user will automatically regain access to
            YieldX platform.
          </InfoText>

          <ButtonContainer>
            <CancelButton onClick={() => onHide()}>Cancel</CancelButton>
            <ContinueButton
              onClick={async () => {
                try {
                  const response = await userService.blockUser(userId, {
                    block: false
                  });
                  if (response) {
                    onHide({
                      shouldRefreshUsers: false,
                      shouldRefreshPage: true
                    });
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              Reactivate
            </ContinueButton>
          </ButtonContainer>
        </>
      )}
    </ModalBase>
  );
}

export default DeactivateUserModal;
