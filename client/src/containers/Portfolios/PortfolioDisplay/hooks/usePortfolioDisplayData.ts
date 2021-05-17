import { useHistory, useLocation, useParams } from "react-router-dom";
import {
  Order2,
  PortfolioType,
  Position2,
  useOrderManagementGetOrdersQuery
} from "providers/graphql/hooks";
import useGetYieldxPortfolio from "providers/graphql/hooks/useGetYieldxPortfolio";
import useGetPortfolioInvestor from "providers/graphql/hooks/useGetPortfolioInvestor";
import useGetInvestorCashPortfolio from "providers/graphql/hooks/useGetInvestorCashPortfolio";
import useCancelOrder from "containers/Portfolios/PortfolioDisplay/hooks/useCancelOrder";
import useDeleteExternalPortfolio from "providers/graphql/hooks/useDeleteExternalPortfolio";
import useLiquidatePortfolio from "containers/Portfolios/PortfolioDisplay/hooks/useLiquidatePortfolio";
import useDeposit from "containers/Portfolios/PortfolioDisplay/hooks/useDeposit";
import useWithdrawal from "containers/Portfolios/PortfolioDisplay/hooks/useWithdrawal";
import {
  AlertLevel,
  AlertMessage,
  useAlertContext
} from "providers/alerts/AlertProvider";

type PortfolioDisplayParams = {
  portfolioId: string;
  type: string;
};

export default function usePortfolioDisplayData() {
  const { type, portfolioId } = useParams<PortfolioDisplayParams>();
  const portfolioType =
    type === "external" ? PortfolioType.External : PortfolioType.Live;

  const history = useHistory();
  const { pathname, hash } = useLocation();

  const {
    portfolio,
    loading: portfolioLoading,
    error: portfolioError
  } = useGetYieldxPortfolio({ portfolioId, portfolioType });
  if (portfolioError) console.error(portfolioError);
  const {
    data: ordersData,
    loading: ordersLoading,
    error: ordersError
  } = useOrderManagementGetOrdersQuery({
    variables: {
      portfolioId
    },
    skip: portfolioType === "EXTERNAL" || !portfolio
  });
  const orders = ordersData?.orderManagementGetOrders?.orders;
  const cancelOrder = useCancelOrder();
  const deleteExternal = useDeleteExternalPortfolio();
  const {
    investor,
    error: investorError,
    loading: investorLoading
  } = useGetPortfolioInvestor(
    portfolioId,
    !portfolio || portfolioType !== PortfolioType.Live
  );

  const {
    data: { cashPortfolio },
    error: cashPortfolioError,
    loading: cashPortfolioLoading
  } = useGetInvestorCashPortfolio(investor?.id);

  const liquidatePortfolio = useLiquidatePortfolio();
  const makeDeposit = useDeposit();
  const makeWithdrawal = useWithdrawal();
  const { triggerAlert } = useAlertContext();
  return {
    portfolio,
    portfolioLoading,
    portfolioError,
    orders,
    ordersLoading,
    ordersError,
    investorError,
    investorLoading,
    cashPortfolioError,
    cashPortfolioLoading,
    history,
    pathname,
    hash,
    investorCashAvailable: cashPortfolio?.cashAvailable,
    onDelete: async () => {
      try {
        await deleteExternal(portfolioId).then(() => {
          triggerAlert(
            "You portfolio has been closed successfully",
            AlertLevel.success,
            { timeout: 2500 }
          );
        });
      } catch (err) {
        console.error(err);
        triggerAlert(AlertMessage.Unexpected, AlertLevel.danger);
      }
      history.push("/portfolios#alert=PortfolioDeleted");
    },
    onCancelOrder: async (orderId: string) => {
      try {
        await cancelOrder(orderId, portfolioId);
        history.push(`${pathname}#orders`);
      } catch (e) {
        console.error(e);
      }
    },
    onLiquidate: async () => {
      const investorId = investor?.id;
      if (!investorId) throw Error("Investor ID is missing");
      if (!portfolio)
        throw Error("Portfolio is undefined. Failed to liquidate");
      if (!orders) throw Error("Orders undefined, failed to liquidate");
      await liquidatePortfolio(portfolio, orders as Array<Order2>);
      history.push(`/investors/${investorId}#portfolios`, {
        shouldRefresh: true
      });
    },

    onDeposit: async (amount: number) => {
      const investorId = investor?.id;
      if (!investorId) throw Error("Investor ID is missing");
      if (!portfolio) throw Error("Portfolio missing");
      if (!cashPortfolio) throw Error("Cash investor/portfolio is missing");
      makeDeposit({
        investorId,
        portfolio,
        amount,
        cashPortfolio: cashPortfolio as {
          cashPos: Position2;
          cashAvailable: number;
          portfolioId: string;
        }
      });
      history.push(pathname);
    },

    onWithdraw: async (amount: number) => {
      const investorId = investor?.id;
      if (!investorId) throw Error("Investor ID is missing");
      if (!portfolio) throw Error("Portfolio missing");
      if (!cashPortfolio) throw Error("Cash investor/portfolio is missing");
      makeWithdrawal({
        investorId,
        portfolio,
        amount,
        cashPortfolio: cashPortfolio as {
          cashPos: Position2;
          cashAvailable: number;
          portfolioId: string;
        }
      });
      history.push(pathname);
    }
  };
}
