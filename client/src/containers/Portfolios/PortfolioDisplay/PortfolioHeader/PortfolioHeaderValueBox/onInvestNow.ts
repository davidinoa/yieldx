import * as H from "history";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
import { AppType } from "@bondhouse/position-management";
import { isTradingOpen } from "containers/Portfolios/PortfolioDisplay/Modals/ExecutionHoursModal/ExecutionHoursModal";
import YieldXPortfolio from "models/YieldXPortfolio";
import { PortfolioUIState } from "services/PortfolioService";
import { calculateDaysSince } from "util/calculateDaysSince";

export default function onInvestNow({
  history,
  portfolio,
  setShowHoursModal,
  setShowInvestModal,
  setPortfolioState
}: {
  history: H.History<unknown>;
  portfolio: YieldXPortfolio;
  setShowInvestModal: Dispatch<SetStateAction<boolean>>;
  setShowHoursModal: Dispatch<SetStateAction<boolean>>;
  setPortfolioState: SetterOrUpdater<PortfolioUIState>;
}) {
  const tradingOpen = isTradingOpen(dayjs());
  const isProposalStale =
    calculateDaysSince(portfolio.getUpdatedAt() ?? portfolio.getCreatedAt()) >=
    1;
  if (
    process.env.NODE_ENV === "development" ||
    window.location.host.split(".")[0] === "dev"
  ) {
    if (portfolio.getAppType() === AppType.INPAAS && !isProposalStale) {
      setPortfolioState({
        status: "executing",
        currentPortfolio: portfolio
      });
      history.push("/execute-portfolio");
    } else setShowInvestModal(true);
  } else if (process.env.NODE_ENV === "production" && tradingOpen)
    setShowInvestModal(true);
  else if (process.env.NODE_ENV === "production" && !tradingOpen)
    setShowHoursModal(true);
}
