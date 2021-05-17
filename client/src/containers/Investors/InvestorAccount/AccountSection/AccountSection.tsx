import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { AccountContainer } from "../InvestorAccount.styles";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import InvestorPortfolios from "../InvestorPortfolios/InvestorPortfolios";
import BankAccounts from "../BankAccounts/BankAccounts";
import InvestorDetails from "../InvestorDetails/InvestorDetails";
import Statements from "../Statements/Statements";
import useAccountSectionData from "hooks/useAccountSectionData";
import {
  Investor,
  InvestorStatus,
  InvestorType
} from "providers/graphql/hooks";
import CloseInvestorModal from "containers/Investors/Modals/CloseInvestorModal";
import { useHistory } from "react-router";
import { Spinner } from "elements/Spinner/Spinner";

function AccountSection() {
  const { hash } = useLocation();
  const { investorId } = useParams<{ investorId: string }>();
  const {
    data: { portfolios, apexAccount, investor, cashPortfolio, bankAccounts },
    loading: {
      apexLoading,
      bankLoading,
      analysisLoading,
      cashInvLoading,
      investorLoading,
      portfoliosLoading
    },
    aum
  } = useAccountSectionData(investorId);
  const history = useHistory();

  const generalInfo = investor ? getGeneralInfo(investor) : null;
  const generalInfoLoading =
    investorLoading ||
    apexLoading ||
    portfoliosLoading ||
    cashInvLoading ||
    analysisLoading;
  return (
    <>
      <AccountContainer>
        {(hash === "#general-info" || hash === "#close-investor") &&
          generalInfoLoading && <Spinner />}
        {(hash === "#general-info" || hash === "#close-investor") &&
          !generalInfoLoading &&
          investor &&
          apexAccount &&
          portfolios &&
          cashPortfolio &&
          generalInfo && (
            <GeneralInfo
              generalInfo={generalInfo}
              apexAccount={apexAccount}
              aum={aum}
              cashPortfolio={cashPortfolio}
              investorId={investorId}
            />
          )}
        {hash === "#portfolios" && portfolios && (
          <InvestorPortfolios portfolios={portfolios} />
        )}
        {hash === "#portfolios" && portfoliosLoading && <Spinner />}
        {(hash === "#linked-banks" || hash === "#unlink-bank") &&
          bankAccounts && (
            <BankAccounts data={bankAccounts} investorId={investorId} />
          )}
        {(hash === "#linked-banks" || hash === "#unlink-bank") &&
          bankLoading && <Spinner />}

        {hash === "#investor-details" && (investorLoading || apexLoading) && (
          <Spinner />
        )}
        {hash === "#investor-details" && investor && apexAccount && (
          <InvestorDetails investor={investor} apexAccount={apexAccount} />
        )}
        {hash === "#statements" && <Statements investorId={investorId} />}
      </AccountContainer>
      <CloseInvestorModal
        onHide={() => history.goBack()}
        show={hash === "#close-investor"}
        investorId={investorId}
        apexAccount={apexAccount}
        portfoliosWarning={
          Boolean((portfolios?.length || 0) > 0) ||
          Boolean(cashPortfolio && cashPortfolio.cashAvailable > 0)
        }
      />
    </>
  );
}

export default AccountSection;

export function getGeneralInfo(investor: Investor) {
  return {
    type: investor.investorType,
    name:
      investor.investorType === InvestorType.Individual
        ? `${investor.investorInfo.givenName} ${investor.investorInfo.familyName}`
        : investor.investorInfo.organizationName || "n/a",
    status: investor.status || InvestorStatus.Inactive
  };
}
