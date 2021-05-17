import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { User, UserStatus } from "@bondhouse/iam";
import { Container, Row } from "react-bootstrap";
import { State } from "xstate";
import ErrorAlert from "../../../elements/Alert/ErrorAlert";
import { ReactComponent as Left } from "../../../assets/svg/left.svg";
import {
  BackLink,
  UserDetailsCard,
  UserDetailsBack,
  UserDetailsNav,
  UserDetailsContent
} from "../../../components/UserBlock.styles";
import UserSideNav from "./SideNav/UserSideNav";
import DeactivateUserModal from "./DeactivateUserModal/DeactivateUserModal";
import { UsersStateSchema, UsersContext, UsersEvent } from "../Users.state";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import ResetPassword from "./ResetPassword/ResetPassword";

interface Props {
  user: User;
  state: State<UsersContext, UsersEvent, UsersStateSchema>;
  refreshUsers: () => void;
  refreshDetails: () => void;
}

const UserDetails = ({ user, state, refreshUsers, refreshDetails }: Props) => {
  const location = useLocation();
  const history = useHistory();

  const onModalHide = (options?: {
    shouldRefreshUsers?: boolean;
    shouldRefreshPage?: boolean;
  }) => {
    if (options?.shouldRefreshUsers) {
      refreshUsers();
    }
    if (options?.shouldRefreshPage) {
      refreshDetails();
    }
    history.push(location.pathname, location.state);
  };
  return (
    <Container>
      {state.matches("error") && <ErrorAlert />}
      <Row>
        <UserDetailsBack>
          <BackLink to="/users">
            <Left strokeWidth="5" stroke="white" width="16px" height="16px" />
            <span>Back to manage users</span>
          </BackLink>
        </UserDetailsBack>
      </Row>
      <Row>
        <UserDetailsCard>
          <UserDetailsNav>
            <UserSideNav user={user} error={state.matches("error")} />
          </UserDetailsNav>
          <UserDetailsContent>
            <PersonalInformation user={user} refreshPage={refreshDetails} />
          </UserDetailsContent>
        </UserDetailsCard>
      </Row>
      <ResetPassword
        show={location.hash === "#reset-password"}
        email={user.email}
        onHide={onModalHide}
      />
      <DeactivateUserModal
        userId={user.id}
        onHide={onModalHide}
        show={location.hash === "#deactivate"}
        deactivating={user.status === UserStatus.ACTIVE}
      />
    </Container>
  );
};

export default UserDetails;
