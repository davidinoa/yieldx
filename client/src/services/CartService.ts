import { Cart, CartApi } from "@bondhouse/rover-preferences";
import { User, UsersApi } from "@bondhouse/iam";
import { assetsService, userService } from "services";

const cartApi = new CartApi();
const usersApi = new UsersApi();
type OnUpdate = (cart: Cart, added: string[], removed: string[]) => void;
type Callbacks = {
  onUpdate: OnUpdate;
};

let currentSubscriberId = 0;

let currentPortfolioCartSubscriberId = 0;

/**
 * Data provider & service for the user's shopping cart
 *
 * provides methods to query the current cart information and allow callers to subscribe
 * to updates
 */
export class CartService {
  private readonly subscribers: { [id: string]: Callbacks };

  private readonly portfolioCartSubscribers: { [id: string]: Callbacks };

  private cartApi: CartApi;

  private cart?: Cart;

  private portfolioCart: Cart;

  private user?: User;

  private cartFetching?: Promise<Cart>;

  constructor() {
    this.subscribers = {};
    this.portfolioCartSubscribers = {};
    this.portfolioCart = {
      id: "EDIT_PORTFOLIO_CART",
      items: []
    };
    this.cartApi = cartApi;
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
    if (this.cart) {
      const added = this.cart.items.map(({ assetId }) => assetId);
      onUpdate(this.cart, added, []);
    } else if (!this.cartFetching) {
      this.cartFetching = this.refreshCart();
      this.cartFetching.then((nextCart: Cart) => {
        const added = nextCart.items.map(({ assetId }) => assetId);
        this.notifySubscribers(added, []);
      });
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

  unsubscribeFromPortfolioCart(subscriberId?: number) {
    if (subscriberId) {
      delete this.portfolioCartSubscribers[subscriberId];
    }
  }

  subscribeToPortfolioCart(onUpdate: OnUpdate): number {
    currentPortfolioCartSubscriberId += 1;
    this.portfolioCartSubscribers[currentPortfolioCartSubscriberId] = {
      onUpdate
    };
    const added = this.portfolioCart.items.map(({ assetId }) => assetId);
    onUpdate(this.portfolioCart, added, []);
    return currentSubscriberId;
  }

  /**
   * Calls the Cart SDKs for the latest cart but does not notify
   * subscribers
   *
   * Updates internal state
   */
  async refreshCart() {
    const {
      data: {
        user: { id }
      }
    } = await usersApi.getCurrentUser();
    return new Promise<Cart>((res, rej) =>
      this.cartApi
        .getCart(id)
        .then(cv => {
          this.cart = cv.data.cart;
          this.cartFetching = undefined;
          res(cv.data.cart);
        })
        .catch(err => {
          this.cartFetching = undefined;
          rej(err);
        })
    );
  }

  /**
   * Retrieves either the current cart in memory or that
   * from the server via SDK call
   *
   * This operation does not notify subscribers
   */
  getCart(): Promise<Cart> {
    if (this.cartFetching) return this.cartFetching;
    if (this.cart) return Promise.resolve(this.cart);
    return this.refreshCart();
  }

  getPortfolioCart(): Cart {
    return this.portfolioCart;
  }

  private async getUser() {
    if (!this.user) {
      this.user = await userService.getUser();
    }
    return this.user;
  }

  private notifySubscribers(added: string[], removed: string[]) {
    const { cart } = this;
    if (cart != null) {
      Object.values(this.subscribers).forEach(subscriber => {
        subscriber.onUpdate(cart, added, removed);
      });
    }
  }

  private notifyPortfolioCartSubscribers(added: string[], removed: string[]) {
    const { portfolioCart } = this;
    Object.values(this.portfolioCartSubscribers).forEach(subscriber => {
      subscriber.onUpdate(portfolioCart, added, removed);
    });
  }

  async deleteCartItem(assetId: string) {
    if (this.cart) {
      this.cart = {
        ...this.cart,
        items: this.cart.items.filter(item => item.assetId !== assetId) || []
      };
      this.notifySubscribers([], [assetId]);
    }
    const { id } = await this.getUser();
    this.cartApi.deleteCartItem(id, assetId);
  }

  deletePortfolioCartItem(assetId: string) {
    this.portfolioCart = {
      ...this.portfolioCart,
      items:
        this.portfolioCart.items.filter(item => item.assetId !== assetId) || []
    };
    this.notifyPortfolioCartSubscribers([], [assetId]);
  }

  async createOrReplaceCartItem(assetId: string) {
    const { id } = await this.getUser();
    if (this.cart) {
      await this.cartApi.createOrReplaceCartItem(id, {
        cartItem: { assetId, quantity: 0 }
      });
      await assetsService.getAsset(assetId);
      this.cart = {
        ...this.cart,
        items: [...this.cart.items, { assetId, quantity: 0 }]
      };
      this.notifySubscribers([assetId], []);
    }
  }

  async createPortfolioCartItems(assetIds: Array<string>) {
    this.portfolioCart = {
      ...this.portfolioCart,
      items: [
        ...this.portfolioCart.items,
        ...assetIds.map(it => ({ assetId: it, quantity: 0 }))
      ]
    };
    await assetsService.getAssetsAsArray(assetIds);
    this.notifyPortfolioCartSubscribers(assetIds, []);
  }

  async clearCart() {
    if (this.cart === undefined) throw Error("cart undefined");
    const { id } = await this.getUser();
    const removed = this.cart?.items.map(item => item.assetId) ?? [];
    this.cart = {
      ...this.cart,
      items: []
    };
    this.notifySubscribers([], removed);
    await this.cartApi.clearCart(id);
  }

  clearPortfolioCart() {
    const removed = this.portfolioCart.items.map(item => item.assetId) ?? [];
    this.portfolioCart = {
      ...this.portfolioCart,
      items: []
    };
    this.notifyPortfolioCartSubscribers([], removed);
  }
}
