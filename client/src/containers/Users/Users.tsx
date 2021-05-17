import React, { useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { useMachine } from "@xstate/react";
import UserDetails from "./UserDetails/UserDetails";
import ErrorAlert from "../../elements/Alert/ErrorAlert";
import { Spinner } from "../../elements/Spinner/Spinner";
import UserList from "./UserList/UserList";
import userMachine from "./Users.state";
import { StyledContainer, StyledRow } from "./User.styles";

export default function Users() {
  const [state, send] = useMachine(userMachine);
  const { users } = state.context;
  const { userId } = useParams<{ userId: string }>();
  const selectedUser = users?.find(usr => usr.id === userId);
  const showList = state.matches("idle") || state.matches("inviteModal");
  const isLoading =
    state.matches("gettingUser") ||
    state.matches("gettingAllUsers") ||
    state.matches("refreshingDetails");

  useEffect(() => {
    if (userId) send("VIEW_DETAILS");
    else send("VIEW_LIST");
  }, [userId, send, selectedUser]);

  return (
    <StyledContainer>
      <StyledRow>
        {isLoading && <Spinner />}
        {state.matches("error") && <ErrorAlert data-testid="error" />}
        <Switch>
          <Route exact path="/users">
            {showList && users && (
              <UserList
                data-testid="users"
                list={users}
                send={send}
                state={state}
              />
            )}
          </Route>
          <Route path="/users/:userId">
            {state.matches("details") && selectedUser && (
              <UserDetails
                state={state}
                user={selectedUser}
                refreshUsers={() => send("GET_USERS")}
                refreshDetails={() => send("REFRESH_DETAILS")}
              />
            )}
          </Route>
        </Switch>
      </StyledRow>
    </StyledContainer>
  );
}
