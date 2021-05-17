import { useRoverPreferencesGetCartQuery } from "providers/graphql/hooks";

function useCart(userId?: string) {
  const { data, loading } = useRoverPreferencesGetCartQuery({
    variables: {
      userId: userId ?? ""
    },
    skip: !userId
  });
  const cart = data?.roverPreferencesGetCart?.cart;
  return { cart, loading: loading || !userId };
}

export default useCart;
