import { UpdateUserRequest, User, UsersApi } from "@bondhouse/iam";

export const usersApi = new UsersApi();
type OnUpdate = (user: User) => void;
type Callbacks = {
  onUpdate: OnUpdate;
};

let currentSubscriberId = 0;

/**
 * UserService is a caching pass-through
 * around the getCurrentUser call
 *
 * Components that require user id should use this service
 * to avoid repeated network calls
 */
export class UserService {
  private readonly subscribers: { [id: string]: Callbacks };

  private usersApi: UsersApi;

  private user?: User;

  private userFetching?: Promise<User>;

  constructor() {
    this.subscribers = {};
    this.usersApi = usersApi;
  }

  /**
   * Subscribes to updates. The caller provide
   * callbacks that will be invoked when updates happen
   * to User
   *
   * The method immediately returns a subscriberId which can be used to unsubscribe
   * @param onUpdate
   */
  subscribe(onUpdate: OnUpdate): number {
    currentSubscriberId += 1;
    this.subscribers[currentSubscriberId] = { onUpdate };

    setTimeout(async () => {
      if (this.user) {
        // on subscribe, if the cart has already been loaded then call onUpdate with that cart immediately
        onUpdate(this.user);
      } else {
        // otherwise, refresh and call every subscriber
        this.refreshUserAndNotify();
      }
    }, 0);

    return currentSubscriberId;
  }

  /**
   * Unsubscribes to updates using the provided subscriberId
   * @param subscriberId
   */
  unsubscribe(subscriberId?: number) {
    if (subscriberId) {
      delete this.subscribers[subscriberId];
    }
  }

  /**
   * Calls the User SDK for the latest cart but does not notify
   * subscribers
   *
   * Updates internal state
   */
  async refreshUser() {
    const userPromise = new Promise<User>((res, rej) =>
      this.usersApi
        .getCurrentUser()
        .then(cv => {
          this.user = cv.data.user;
          this.userFetching = undefined;
          res(cv.data.user);
        })
        .catch(err => {
          this.userFetching = undefined;
          rej(err);
        })
    );
    this.userFetching = userPromise;
    return userPromise;
  }

  async refreshUserAndNotify() {
    await this.refreshUser();
    this.notifySubscribers();
  }

  /**
   * Retrieves either the current cart in memory or that
   * from the server via SDK call
   *
   * This operation does not notify subscribers
   */
  async getUser(): Promise<User> {
    if (this.userFetching) return this.userFetching;
    if (this.user) return new Promise<User>(resolve => resolve(this.user));

    return this.refreshUser();
  }

  private notifySubscribers() {
    if (this.user) {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const id in this.subscribers) {
        this.subscribers[id].onUpdate(this.user);
      }
    }
  }

  addInvestor(investorId: string) {
    if (this.user) {
      this.user = {
        ...this.user,
        policies: [
          ...(this.user.policies ? this.user.policies : []),
          {
            resource: `/apis/investor/v1/investors/${investorId}*`,
            actions: ["*"]
          }
        ]
      };
      this.notifySubscribers();
    }
  }

  addPortfolio(portfolioId: string) {
    if (this.user) {
      this.user = {
        ...this.user,
        policies: [
          ...(this.user.policies ? this.user.policies : []),
          {
            resource: `/apis/position-management/v1/portfolios/${portfolioId}*`,
            actions: ["*"]
          }
        ]
      };
      this.notifySubscribers();
    }
  }

  async updateUser(userId: string, req: UpdateUserRequest) {
    if (this.user) {
      this.user = {
        ...this.user,
        ...req
      };
      this.notifySubscribers();
    }
    return this.usersApi.updateUser(userId, req);
  }
}
