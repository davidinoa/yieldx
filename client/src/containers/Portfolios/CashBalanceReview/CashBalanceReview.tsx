import React from "react";
import { Col, Row } from "react-bootstrap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { InvestorType } from "@bondhouse/investor";
import { PortfolioType } from "@bondhouse/income-portfolios";
import AppNavbar from "components/AppNavbar/AppNavbar";
import { ReactComponent as Icon } from "assets/svg/individual.svg";
import AppBottomNav from "elements/AppBottomNav/AppBottomNav";
import { yieldXPortfolioSelector } from "recoil-state/getProposalWithPortfolioId";
import { getPortfolioInvestor } from "recoil-state/portfoliosApi";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import { getCashOnlyPortfolio } from "services/InvestorService";
import Decimal from "util/Decimal";
import { ReactComponent as Pencil } from "assets/svg/edit.svg";
import capitalize from "util/capitalize";
import { cartService } from "services";
import {
  BoxStatus,
  BoxStatusCol,
  BoxTotalAvailable,
  CashBalanceContainer,
  CashMessageBox,
  CashMessageBoxContent,
  CashMessageBoxTitle,
  Divider,
  ManageCashButton
} from "./CashBalanceReview.styles";

export default function CashBalanceReview() {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  const portfolio = useRecoilValue(
    yieldXPortfolioSelector({
      portfolioType: PortfolioType.LIVE,
      portfolioId
    })
  );
  if (portfolio === null)
    throw Error(`Portfolio with ID ${portfolioId} not found`);
  const history = useHistory();
  const { pathname } = useLocation();
  const setPortfolioData = useSetRecoilState(portfolioCreateOrEditState);
  const investor = useRecoilValue(getPortfolioInvestor(portfolioId));
  const cashOnlyPortfolio = useRecoilValue(getCashOnlyPortfolio(investor.id));
  const [dollars, cents] = Decimal.format(
    cashOnlyPortfolio?.cashAvailable || 0
  ).split(".");

  return (
    <>
      <AppNavbar appName="Cash balance check" />
      <CashBalanceContainer>
        <CashMessageBox>
          <CashMessageBoxTitle>
            <i>
              <Icon />
            </i>
            <h4>PORTFOLIO&apos;S INVESTOR ACCOUNT</h4>
            <h1>
              {investor.investorType === InvestorType.ORGANIZATION &&
                investor.investorInfo.organizationName}
              {investor.investorType === InvestorType.INDIVIDUAL &&
                `${investor.investorInfo.givenName} ${investor.investorInfo.familyName}`}
            </h1>
          </CashMessageBoxTitle>
          <CashMessageBoxContent>
            <Row>
              <BoxStatus>
                <Row>
                  <BoxStatusCol>
                    <h3>INVESTOR TYPE</h3>
                  </BoxStatusCol>
                  <BoxStatusCol>
                    <span>
                      {capitalize(investor.investorType.toLocaleLowerCase())}
                    </span>
                  </BoxStatusCol>
                </Row>
                <Row>
                  <BoxStatusCol>
                    <h3>ACCOUNT STATUS</h3>
                  </BoxStatusCol>
                  <BoxStatusCol>
                    <span className="status active">
                      <i />
                      Active
                    </span>
                  </BoxStatusCol>
                </Row>
              </BoxStatus>
            </Row>
            <Row>
              <Divider />
            </Row>
            <Row>
              <BoxTotalAvailable>
                <Row>
                  <Col>
                    <h3>Cash available for investing</h3>
                    <span>
                      {`$${dollars}`}
                      <sup>{`.${cents}`}</sup>
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <b>IMPORTANT: </b> If you decide to invest in your
                      portfolio after editing, this will be the maximum amount
                      you can add to it. You won&apos;t be able to save and
                      execute your changes above this value.
                    </p>
                  </Col>
                </Row>
              </BoxTotalAvailable>
            </Row>
          </CashMessageBoxContent>
        </CashMessageBox>
        <AppBottomNav
          previousLabel="Back to portfolio"
          onPrevious={() => history.push(`/portfolios/live/${portfolioId}`)}
          centerButton={
            <ManageCashButton to={`/cash-account/investors/${investor.id}`}>
              <Pencil />
              <span>Manage cash account</span>
            </ManageCashButton>
          }
          onNext={() => {
            setPortfolioData(prev => ({
              ...prev,
              status: "editing",
              portfolioId,
              selectedInvestor: investor
            }));
            const queryParams = new URLSearchParams();
            queryParams.append("portfolioId", portfolioId);
            queryParams.append("portfolioType", PortfolioType.LIVE);
            if (pathname.includes("rebalance"))
              history.push({
                pathname: "/inpaas/goals/rebalance",
                search: queryParams.toString()
              });
            else {
              cartService.clearPortfolioCart();
              cartService
                .createPortfolioCartItems(
                  portfolio.positions.map(it => it.asset.id)
                )
                .then(() =>
                  history.push({
                    pathname: `/asset-explorer/portfolio-builder/edit`,
                    search: queryParams.toString()
                  })
                );
            }
          }}
        />
      </CashBalanceContainer>
    </>
  );
}
