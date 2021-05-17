/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { WatchList, WatchListApi } from "@bondhouse/rover-preferences";
import { User } from "@bondhouse/iam";
import { userService } from ".";

type OnUpdate = (watchList: WatchList) => void;
type Callbacks = {
  onUpdate: OnUpdate;
};

let currentSubscriberId = 0;

/**
 * Data provider & service for the user's shopping cart
 *
 * provides methods to query the current cart information and allow callers to subscribe
 * to updates
 */
export class WatchListService {
  private readonly subscribers: { [id: string]: Callbacks };

  private watchListApi: WatchListApi = new WatchListApi();

  private watchList?: WatchList;

  private user?: User;

  private watchListFetching?: Promise<WatchList>;

  constructor() {
    this.subscribers = {};
  }

  /**
   * Subscribes to updates. The caller provide
   * callbacks that will be invoked when updates happen
   * to Carts
   *
   * The method immediately returns a subscriberId which can be used to unsubscribe
   * @param onUpdate
   */
  subscribe(onUpdate: OnUpdate): number {
    currentSubscriberId += 1;
    this.subscribers[currentSubscriberId] = { onUpdate };
    if (this.watchList) {
      onUpdate(this.watchList);
    } else if (!this.watchListFetching) {
      this.watchListFetching = this.refreshWatchList();
      this.watchListFetching.then(() => this.notifySubscribers());
    }
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
   * Calls the Cart SDKs for the latest cart but does not notify
   * subscribers
   *
   * Updates internal state
   */
  async refreshWatchList() {
    const { id } = await userService.getUser();
    return new Promise<WatchList>((res, rej) =>
      this.watchListApi
        .getWatchList(id)
        .then(cv => {
          this.watchList = cv.data.watchList;
          this.watchListFetching = undefined;
          res(cv.data.watchList);
        })
        .catch(err => {
          this.watchListFetching = undefined;
          rej(err);
        })
    );
  }

  async refreshWatchListAndNotify() {
    await this.refreshWatchList();
    this.notifySubscribers();
  }

  /**
   * Retrieves either the current watch list in memory or that
   * from the server via SDK call
   *
   * This operation does not notify subscribers
   */
  async getWatchList(): Promise<WatchList> {
    if (this.watchListFetching) return this.watchListFetching;
    if (this.watchList)
      return new Promise<WatchList>(resolve => resolve(this.watchList));

    this.watchListFetching = this.refreshWatchList();
    return this.watchListFetching;
  }

  private async getUser() {
    if (!this.user) {
      this.user = await userService.getUser();
    }
    return this.user;
  }

  private notifySubscribers() {
    if (this.watchListFetching)
      this.watchListFetching.then(watchList => {
        for (const id in this.subscribers) {
          this.subscribers[id].onUpdate(watchList);
        }
      });
    else if (this.watchList)
      for (const id in this.subscribers) {
        this.subscribers[id].onUpdate(this.watchList);
      }
  }

  async deleteWatchListItem(assetId: string) {
    if (this.watchList) {
      this.watchList = {
        ...this.watchList,
        items:
          this.watchList.items.filter(item => item.assetId !== assetId) || []
      };
      this.notifySubscribers();
    }
    const { id } = await this.getUser();
    this.watchListApi.deleteWatchListItem(id, assetId);
  }

  async createOrReplaceWatchListItem(assetId: string) {
    if (this.watchList) {
      this.watchList = {
        ...this.watchList,
        items: [...this.watchList.items, { assetId }]
      };
      this.notifySubscribers();
    }
    const { id } = await this.getUser();
    this.watchListApi.createOrReplaceWatchListItem(id, assetId);
  }

  async clear() {
    const { id } = await this.getUser();
    await this.watchListApi.clearWatchList(id);
    this.refreshWatchListAndNotify();
  }
}
