/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import {
  User,
  UserType,
  UsersApi,
  InstitutionUserMappingApi,
  GetUserResponse
} from "@bondhouse/iam";
import { Machine, assign, AnyEventObject, DoneInvokeEvent } from "xstate";
import { userService } from "../../services";

type InviteEvent = {
  type: "INVITE";
  data?: { email: string; userType: UserType };
};

type FetchDone = { type: "done.invoke.fetching"; data?: User[] };

export type UsersEvent = FetchDone | InviteEvent | AnyEventObject;

export interface UsersContext {
  users?: User[];
  currentUser?: User;
}

type metaConfig = {
  test: ({ queryByTestId }: any) => void;
};

export type UsersStateSchema = {
  states: {
    gettingUser: {
      meta: metaConfig;
    };
    gettingAllUsers: {
      meta: metaConfig;
    };
    idle: {
      meta: metaConfig;
    };
    details: {
      meta: metaConfig;
    };
    refreshingDetails: {
      meta: metaConfig;
    };
    inviteModal: {
      states: {
        idle: {
          meta: metaConfig;
        };
        inviting: {
          meta: metaConfig;
        };
        success: {
          meta: metaConfig;
        };
        error: {
          meta: metaConfig;
        };
      };
    };
    error: {
      meta: metaConfig;
    };
  };
};

const test = (rendered: any) => {
  expect(rendered.container).toBeInTheDocument();
};

const meta = { test };

export default Machine<UsersContext, UsersStateSchema, UsersEvent>(
  {
    id: "users",
    initial: "gettingUser",
    states: {
      gettingUser: {
        meta: {
          test: ({ queryByTestId }) => {
            expect(queryByTestId("users")).toBe(null);
          }
        },
        invoke: {
          src: "getCurrentUser",
          onError: {
            target: "error"
          },
          onDone: {
            target: "gettingAllUsers",
            actions: assign((ctx, e) => ({
              ...ctx,
              currentUser: e.data
            }))
          }
        }
      },
      gettingAllUsers: {
        meta,
        invoke: {
          src: "getAllUsers",
          onError: {
            target: "error"
          },
          onDone: {
            target: "idle",
            actions: assign((ctx, e) => ({ ...ctx, users: e.data }))
          }
        }
      },
      idle: {
        meta: {
          test: ({ queryByTestId }) => {
            expect(queryByTestId("users")).toBeDefined();
          }
        },
        on: {
          VIEW_DETAILS: "details",
          OPEN_MODAL: "inviteModal",
          GET_USERS: "gettingAllUsers"
        }
      },
      details: {
        meta,
        on: {
          VIEW_LIST: "gettingUser",
          REFRESH_DETAILS: "refreshingDetails"
        }
      },
      refreshingDetails: {
        meta,
        invoke: {
          src: "getAllUsers",
          onDone: {
            target: "details",
            actions: assign<UsersContext, DoneInvokeEvent<User[]>>({
              users: (ctx, e) => e.data
            })
          },
          onError: {
            target: "error"
          }
        }
      },
      inviteModal: {
        meta,
        initial: "idle",
        states: {
          idle: {
            meta,
            on: {
              INVITE: "inviting",
              CLOSE_MODAL: "#users.idle"
            }
          },
          inviting: {
            meta,
            invoke: {
              src: (ctx, e) =>
                sendInvite(
                  e.data,
                  (ctx.currentUser?.institutionId || "bondhouse") as string
                ),
              onDone: "success",
              onError: "error"
            }
          },
          success: {
            meta,
            on: {
              CLOSE_MODAL: "#users.idle",
              AGAIN: "idle"
            }
          },
          error: {
            meta,
            after: {
              4000: "idle"
            },
            on: {
              CLOSE_MODAL: "#users.idle",
              AGAIN: "idle"
            }
          }
        }
      },
      error: {
        meta,
        after: {
          1000: "idle"
        }
      }
    }
  },
  {
    services: {
      async getAllUsers(ctx) {
        const currentUser = ctx.currentUser as User;
        const { policies = [] } = currentUser;
        const iamPolicies = policies.filter(policy =>
          policy.resource.includes("/iam/api/v1/users/auth0")
        );
        const userIds = iamPolicies
          .map(
            ({ resource }) =>
              resource.split("/").pop()?.replace("*", "") as string
          )
          .filter(userId => currentUser.id !== userId);
        const usersService = new UsersApi();
        const pendingRequests = userIds.map(id => usersService.getUser(id));
        try {
          const responses = await Promise.allSettled(pendingRequests);
          const responsesFulfilled = responses.filter(
            response => response.status === "fulfilled"
          ) as PromiseFulfilledResult<AxiosResponse<GetUserResponse>>[];
          const users = responsesFulfilled.map(
            response => response.value.data.user
          );
          return users;
        } catch (error) {
          throw new Error(error);
        }
      },
      async getCurrentUser() {
        try {
          const user = await userService.getUser();
          return user;
        } catch (error) {
          throw new Error(error);
        }
      }
    }
  }
);

async function sendInvite(
  userData: { email: string; userType: UserType },
  institutionId: string
) {
  const mappingService = new InstitutionUserMappingApi();
  const response = await mappingService.createInstitutionUserMapping(
    institutionId,
    userData
  );
  return response;
}
