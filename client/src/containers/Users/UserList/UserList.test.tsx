import React from "react";
import { State, StateSchema, StateValue } from "xstate";
import UserList from "./UserList";
import { render } from "../../../test/utils";
import { UsersContext, UsersEvent } from "../Users.state";

test("render", () => {
  const mockState = ({
    matches: jest.fn(),
    actions: [],
    activities: { getCurrentUser: false, getAllUsers: false },
    meta: { "users.idle": {} },
    events: [],
    value: "idle",
    context: {
      currentUser: {
        id: "auth0|5e1f2ee24d58ca0e75dcbae5",
        first: "David",
        last: "Inoa",
        userType: "ADMIN",
        email: "david@bondhouse.com",
        terms: true,
        institutionId: "adbedc86-e795-4334-b1bd-7cbdf1fbe3bf",
        policies: [],
        createdAt: "2020-01-15T15:25:22.271918Z",
        updatedAt: "2020-05-21T17:06:21.669708Z",
        metadata: {
          sharedPoliciesId: "0bc1c40c-34bc-4cc7-8a0a-ccb7af301b99",
          adminPoliciesId: "776d6ffd-65ea-4250-a15a-33be47195b5b"
        }
      },
      users: [
        {
          id: "auth0|5ebc29481d7e8c198291aa0f",
          first: "Tony",
          last: "Neckles",
          userType: "ADMIN",
          email: "joseph4@watson.com",
          terms: true,
          institutionId: "bf8a5597-9569-4510-babd-a6d9655e9f0d",
          policies: [],
          createdAt: "2020-05-13T17:07:20.338779Z",
          updatedAt: "2020-06-10T17:27:05.980944Z",
          status: "BLOCKED"
        }
      ]
    },
    _event: {
      name: "done.invoke.getAllUsers",
      data: { type: "done.invoke.getAllUsers" },
      $$type: "scxml",
      type: "external",
      origin: "getAllUsers"
    },
    _sessionid: "x:0",
    historyValue: {
      current: "idle",
      states: { inviteModal: { current: "idle", states: {} } }
    },
    history: {
      actions: [
        {
          type: "xstate.stop",
          activity: {
            id: "getCurrentUser",
            src: "getCurrentUser",
            onError: { target: "error" },
            onDone: {
              target: "gettingAllUsers",
              actions: { type: "xstate.assign" }
            },
            type: "xstate.invoke"
          }
        },
        {
          type: "xstate.start",
          activity: {
            id: "getAllUsers",
            src: "getAllUsers",
            type: "xstate.invoke"
          }
        }
      ],
      activities: { getCurrentUser: false },
      meta: {},
      events: [],
      value: "gettingAllUsers",
      context: {},
      _event: {
        name: "done.invoke.getCurrentUser",
        data: { type: "done.invoke.getCurrentUser" },
        $$type: "scxml",
        type: "external",
        origin: "getCurrentUser"
      },
      _sessionid: "x:0",
      historyValue: {
        current: "gettingAllUsers",
        states: { inviteModal: { current: "idle", states: {} } }
      },
      children: {},
      done: false,
      changed: true
    },
    children: {},
    done: false,
    changed: true
  } as unknown) as State<
    UsersContext,
    UsersEvent,
    StateSchema<UsersContext>,
    {
      value: StateValue;
      context: UsersContext;
    }
  >;
  const { container } = render(<UserList list={[]} state={mockState} />);
  expect(container).toBeDefined();
});
