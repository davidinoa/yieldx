import React from "react";
import { useLocation } from "react-router-dom";
import { User } from "@bondhouse/iam";
import { Container, Row } from "react-bootstrap";
import { userService } from "services";
import { Spinner } from "elements/Spinner/Spinner";
import ErrorAlert from "elements/Alert/ErrorAlert";
import {
  UserDetailsCard,
  UserDetailsNav,
  UserDetailsContent
} from "components/UserBlock.styles";
import ResetPassword from "./ResetPassword/ResetPassword";
import SidePanel from "./SidePanel";
import PersonalInformation from "../Users/UserDetails/PersonalInformation/PersonalInformation";

const LoginSecurity = () => {
  const { hash } = useLocation();
  const [user, setUser] = React.useState<User>();
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    userService.getUser().then(setUser).catch(setError);
  }, []);

  return !user ? (
    <Spinner />
  ) : (
    <Container fluid>
      <Row>
        <UserDetailsCard className="login-security">
          <UserDetailsNav>
            <SidePanel user={user} error={error} />
          </UserDetailsNav>
          <UserDetailsContent>
            {hash === "#reset-password" ? (
              <ResetPassword userId={user.id} />
            ) : (
              <PersonalInformation
                user={user}
                refreshPage={(newUser: User) => setUser(newUser)}
              />
            )}
          </UserDetailsContent>
        </UserDetailsCard>
      </Row>
      {error ? <ErrorAlert /> : null}
    </Container>
  );
};

export default LoginSecurity;
