import React, { useCallback, useState } from "react";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import { User, UserStatus } from "@bondhouse/iam";
import {
  EventData,
  State,
  StateSchema,
  StateValue,
  StateValueMap
} from "xstate";
import Pagination from "elements/Pagination/Pagination";
import InvitationModal from "./InvitationModal/InvitationModal";
import {
  DetailsButton,
  EmptyList,
  InviteButton,
  ListContainer,
  ListFilters,
  ListRow,
  ListStatuses,
  NoItemAvailable,
  Status
} from "components/ListPages/ListPages.styles";
import PageTitle from "elements/PageTitle/PageTitle";
import { UsersContext, UsersEvent } from "../Users.state";
import { ReactComponent as NoItemIcon } from "assets/svg/no-user.svg";
import { List } from "components/ListPages/List";

type Props = {
  list: User[];
  perPage?: number;
  state: State<
    UsersContext,
    UsersEvent,
    StateSchema<UsersContext>,
    { value: StateValue | StateValueMap; context: UsersContext }
  >;
  send?: (
    event: string,
    payload?: EventData | Record<string, unknown>
  ) => State<UsersContext>;
};

export default function UserList({ list, perPage = 7, send, state }: Props) {
  const [currPage, setCurrPage] = useState(1);
  const [activeOnly, setActiveOnly] = useState(false);
  const userTotals = getStatusTotals(list);
  const sendInviteCallback = useCallback(
    (email: string, userType: string) =>
      send &&
      send("INVITE", {
        data: {
          email,
          userType
        }
      }),
    [send]
  );
  const resendCallback = useCallback(() => send && send("AGAIN"), [send]);
  const hideCallback = useCallback(() => send && send("CLOSE_MODAL"), [send]);
  const targetList = deriveTargetList(list, activeOnly);
  const renderUsers = getCurrPageUsers(targetList, perPage, currPage);
  const totalPages = Math.ceil(targetList.length / perPage);
  return (
    <>
      <Container>
        <Row>
          <PageTitle
            page
            subtitle="USER LIST"
            title="Manage users"
            alignment="left"
          />
        </Row>
        <Row>
          <ListStatuses>
            <span>
              <Status className={`${UserStatus.ACTIVE.toLowerCase()}`} />
              <b>Active:</b>
              {userTotals.active}
            </span>
            <span>
              <Status className={`${UserStatus.BLOCKED.toLowerCase()}`} />
              <b>Deactivated:</b>
              {userTotals.deactivated}
            </span>
          </ListStatuses>
          <ListFilters>
            {userTotals.deactivated > 0 && (
              <FormCheck
                custom
                id="checkbox"
                type="checkbox"
                label="hide deactivated"
                onChange={() => {
                  setActiveOnly(!activeOnly);
                  setCurrPage(1);
                }}
              />
            )}
            <InviteButton
              type="button"
              onClick={() => send && send("OPEN_MODAL")}
            >
              invite user
            </InviteButton>
          </ListFilters>
        </Row>
        <Row>
          <ListContainer>
            {renderUsers.map(user => {
              return (
                <ListRow key={user.id} status={user.status}>
                  <List.Col className="col-1 no-borders">
                    <Status className={user.status?.toLocaleLowerCase()} />
                  </List.Col>
                  <List.Col
                    label="FULL NAME"
                    value={`${user.first} ${user.last}`}
                    className="col-10 col-xxl-12"
                  />
                  <List.Col
                    className="col-6"
                    label="EMAIL"
                    value={user.email}
                  />
                  <List.Col
                    className="col-4 col-xxl-3 centered"
                    label="CREATION DATE"
                    value={user.createdAt ? displayDate(user.createdAt) : "-"}
                  />
                  <List.Col className="col-3 col-xxl-2 centered">
                    <DetailsButton
                      data-testid="UserList-ShowUserLink"
                      data-disabled={false}
                      to={`/users/${user.id}`}
                    >
                      Details
                    </DetailsButton>
                  </List.Col>
                </ListRow>
              );
            })}
            <Row>
              <Col>
                <Pagination
                  total={totalPages}
                  current={currPage}
                  handleChange={setCurrPage}
                />
              </Col>
            </Row>
          </ListContainer>
          {!renderUsers.length && (
            <EmptyList>
              <div className="content">
                <NoItemAvailable>
                  <NoItemIcon />
                  <h2>No user accounts</h2>
                  <p>It looks like you haven’t invited any users.</p>
                </NoItemAvailable>
              </div>
            </EmptyList>
          )}
        </Row>
      </Container>
      <InvitationModal
        success={state.matches("inviteModal.success")}
        sending={state.matches("inviteModal.inviting")}
        error={state.matches("inviteModal.error")}
        inviteAnother={resendCallback}
        sendInvite={sendInviteCallback}
        show={state.matches("inviteModal")}
        hide={hideCallback}
      />
    </>
  );
}

export function displayDate(str: string) {
  const input = new Date(str);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const Formatter = new Intl.DateTimeFormat("en-US", options);
  return Formatter.format(input);
}

function deriveTargetList(fetched: User[], activeOnly: boolean) {
  const activeList = fetched.filter(user => user.status === UserStatus.ACTIVE);
  const targetList = activeOnly ? activeList : fetched;
  return targetList;
}

function getCurrPageUsers(users: User[], perPage: number, current: number) {
  const listPosition = (current - 1) * perPage;
  const toRender = users.slice(listPosition, listPosition + perPage);
  return toRender;
}

function getStatusTotals(list: User[]) {
  const active = list.filter(user => user.status === UserStatus.ACTIVE);
  const deactivated = list.filter(user => user.status === UserStatus.BLOCKED);
  return {
    active: active.length,
    deactivated: deactivated.length
  };
}
