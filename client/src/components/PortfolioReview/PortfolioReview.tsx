import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import dayjs from "dayjs";
import { UserType } from "@bondhouse/iam";
import { PortfolioType } from "@bondhouse/income-portfolios";
import CustomPortfolio from "containers/Portfolios/PortfolioDisplay/CustomPortfolio/CustomPortfolio";
import PortfolioHeader from "containers/Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeader";
import AppBottomNav from "elements/AppBottomNav/AppBottomNav";
import useExecutePortfolioListener from "hooks/useExecutePortfolioListener";
import { ReactComponent as EyeIcon } from "assets/svg/eye.svg";
import { SecondaryButton } from "elements/AppBottomNav/AppBottomNav.styles";
import SavePortfolioModal from "containers/PortfolioExecution/SelectInvestor/SavePortfolioModal/SavePortfolioModal";
import ErrorAlert from "elements/Alert/ErrorAlert";
import InpaasReview from "containers/InPaaS/InpaasReview/InpaasReview";
import NonTradableAlert from "elements/Alert/NonTradableAlert";
import ExecutionHoursModal, {
  isTradingOpen
} from "containers/Portfolios/PortfolioDisplay/Modals/ExecutionHoursModal/ExecutionHoursModal";
import PortfolioTabs from "containers/Portfolios/PortfolioDisplay/PortfolioTabs/PortfolioTabs";
import { userState } from "services/userState";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import YieldXPortfolio from "models/YieldXPortfolio";
import BestFitReview from "containers/BestFit/BestFitReview/BestFitReview";
import EditModal from "containers/BestFit/BestFitReview/EditModal/EditModal";
import { BestFitReviewData } from "recoil-state/bestFit";
import { yieldXPortfolioSelector } from "recoil-state/getProposalWithPortfolioId";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { getPositionData } from "recoil-state/getPositionData";
import { analyzeSleeve } from "recoil-state/portfoliosApi";
import getReviewPreviousLocation from "components/PortfolioReview/getReviewPreviousLocation";
import { ComparisonButton, Root } from "./PortfolioReview.styles";

type Props = {
  portfolio: YieldXPortfolio;
  bestFitData?: BestFitReviewData;
};

export default function PortfolioReview({
  portfolio: tempPortfolio,
  bestFitData
}: Props) {
  const user = useRecoilValue(userState);
  const history = useHistory();
  const { search, pathname } = useLocation();
  const portfolioEditParams = parsePortfolioQuery(search);
  const originalPortfolio = useRecoilValue(
    yieldXPortfolioSelector(portfolioEditParams)
  );
  const [showEditPositionsModal, setShowEditPositionsModal] = React.useState(
    false
  );
  const [showSaveModal, setShowSaveModal] = React.useState(false);
  const setPortfolioState = useSetRecoilState(portfolioCreateOrEditState);
  const [error, setError] = React.useState<string>();
  const [version, setVersion] = React.useState<"CURRENT" | "ORIGINAL">(
    "CURRENT"
  );
  const isEditing = portfolioEditParams !== null && originalPortfolio !== null;
  const portfolio = version === "CURRENT" ? tempPortfolio : originalPortfolio;
  if (!portfolio) throw Error("No portfolio provided");
  useExecutePortfolioListener(portfolio, history);
  const [showTradingHoursModal, setTradingHoursModal] = React.useState(false);

  const nonTradables = portfolio.positions.filter(
    cv => !cv.asset.universes?.liquid
  );

  const blockExecution = version === "ORIGINAL" || nonTradables.length > 0;

  const shouldSaveNewPaper =
    originalPortfolio === null ||
    originalPortfolio.getType() === PortfolioType.LIVE;
  const analysis = useRecoilValue(
    analyzeSleeve({ drawDown: true, posData: getPositionData(portfolio) })
  );
  return (
    <Root>
      {error && <ErrorAlert message={error} bottomNav />}
      <PortfolioHeader portfolio={portfolio} isReview />

      {pathname.includes("/asset-explorer/portfolio-review") && (
        <>
          <PortfolioTabs portfolio={portfolio} />
          <CustomPortfolio
            portfolio={portfolio}
            version={isEditing ? version : undefined}
          />
        </>
      )}

      {pathname.includes("inpaas") && (
        <InpaasReview
          portfolio={portfolio}
          version={isEditing ? version : undefined}
        />
      )}

      {bestFitData && analysis && (
        <BestFitReview
          analysis={analysis}
          reviewData={bestFitData}
          onEditPositions={() => setShowEditPositionsModal(true)}
        />
      )}

      {nonTradables.length > 0 && <NonTradableAlert portfolio={portfolio} />}
      <AppBottomNav
        nextLabel={
          portfolioEditParams?.portfolioType === PortfolioType.LIVE
            ? "Execute Changes"
            : "Execute Portfolio"
        }
        blockNext={blockExecution}
        hideNext={user.userType === UserType.TRIAL}
        secondaryButton={
          <SecondaryButton
            disabled={version === "ORIGINAL"}
            data-testid="PortfolioReview-AppBottomNav-SaveOrUpdate"
            onClick={() => setShowSaveModal(true)}
          >
            {shouldSaveNewPaper ? "Save as Paper" : "Update Paper"}
          </SecondaryButton>
        }
        centerButton={
          isEditing ? (
            <ComparisonButton
              data-testid="PortfolioReview-AppBottomNav-ComparisonButton"
              onClick={() =>
                setVersion(prev =>
                  prev === "ORIGINAL" ? "CURRENT" : "ORIGINAL"
                )
              }
            >
              <EyeIcon />
              {version === "ORIGINAL" ? "Show current" : "Show original"}
            </ComparisonButton>
          ) : undefined
        }
        onPrevious={() =>
          history.push({
            pathname: getReviewPreviousLocation(pathname),
            search: portfolioEditParams === null ? undefined : search
          })
        }
        onNext={async () => {
          const tradingOpen = isTradingOpen(dayjs());
          if (
            process.env.NODE_ENV === "development" ||
            window.location.host.split(".")[0] === "dev" ||
            (process.env.NODE_ENV === "production" && tradingOpen)
          ) {
            await setPortfolioState({
              status: "executing",
              currentPortfolio: portfolio
            });
            history.push({
              pathname:
                portfolioEditParams !== null
                  ? "/execute-portfolio/preferences"
                  : "/execute-portfolio",
              search: portfolioEditParams !== null ? search : undefined
            });
          } else {
            setTradingHoursModal(true);
          }
        }}
      />
      <SavePortfolioModal
        show={showSaveModal}
        onHide={() => setShowSaveModal(false)}
        setError={setError}
        portfolio={portfolio}
      />
      <ExecutionHoursModal
        isOpen={showTradingHoursModal}
        onHide={() => setTradingHoursModal(false)}
        onSave={() => {
          setShowSaveModal(true);
          setTradingHoursModal(false);
        }}
      />
      <EditModal
        isOpen={showEditPositionsModal}
        onClose={() => setShowEditPositionsModal(false)}
        portfolio={portfolio}
      />
    </Root>
  );
}
