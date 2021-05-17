import { useDeleteExternalPortfolioMutation } from "providers/graphql/hooks";

function useDeleteExternalPortfolio() {
  const [closePortfolio] = useDeleteExternalPortfolioMutation();
  return (portfolioId: string) =>
    closePortfolio({
      variables: {
        id: portfolioId
      },
      update(cache) {
        cache.modify({
          id: `Portfolio3:${portfolioId}`,
          fields(fieldValue, details) {
            return details.DELETE;
          }
        });
      }
    });
}

export default useDeleteExternalPortfolio;
