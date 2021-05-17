import React, { Dispatch, SetStateAction } from "react";
import { Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { editPositions } from "recoil-state/editPositions";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import YieldXPortfolio from "models/YieldXPortfolio";
import onInvestNow from "containers/Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeaderValueBox/onInvestNow";
import {
  DeleteButton,
  ValueCTAs
} from "containers/Portfolios/PortfolioDisplay/PortfolioHeader/PortfolioHeader.styles";
import onRebalance from "containers/Portfolios/PortfolioDisplay/InpaasPortfolio/util/onRebalance";
import {
  AppType2,
  UserType,
  useIamGetCurrentUserQuery
} from "providers/graphql/hooks";

interface Props {
  portfolio: YieldXPortfolio;
  setShowHoursModal: Dispatch<SetStateAction<boolean>>;
  setShowInvestModal: Dispatch<SetStateAction<boolean>>;
}

export default function ExternalHeaderOptions({
  portfolio,
  setShowInvestModal,
  setShowHoursModal
}: Props) {
  const { pathname } = useLocation();
  const history = useHistory();
  const setPortfolioState = useSetRecoilState(portfolioCreateOrEditState);
  const { data: userData, loading: userLoading } = useIamGetCurrentUserQuery();
  const user = userData?.iamGetCurrentUser?.user;
  const isInpaasPortfolio =
    portfolio.getAppType() === AppType2.Inpaas.toString() &&
    portfolio.getInpaasData() !== undefined;
  return (
    <Row data-testid="External-Portfolio-Header-Options">
      <ValueCTAs>
        {!userLoading && user && user.userType !== UserType.Trial && (
          <>
            <button
              type="button"
              data-testid="invest-button"
              className="invest-cta"
              onClick={() =>
                onInvestNow({
                  history,
                  portfolio,
                  setPortfolioState,
                  setShowHoursModal,
                  setShowInvestModal
                })
              }
            >
              Invest now
            </button>
            <span />
          </>
        )}
        <button
          type="button"
          data-testid="rebalance-edit-button"
          onClick={() => {
            if (isInpaasPortfolio) onRebalance(portfolio, history);
            else
              editPositions({
                portfolio,
                setPortfolioData: setPortfolioState,
                history
              });
          }}
        >
          {isInpaasPortfolio ? "Rebalance" : "Edit positions"}
        </button>
        <span />
        <DeleteButton
          data-testid="delete-button"
          onClick={() => history.push(`${pathname}#delete`)}
        >
          Delete
        </DeleteButton>
      </ValueCTAs>
    </Row>
  );
}
