import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Spinner } from "elements/Spinner/Spinner";
import YieldXPortfolio from "models/YieldXPortfolio";
import ErrorBoundary from "elements/ErrorBoundary/ErrorBoundary";
import { SpinnerWrapper } from "elements/Spinner/Spinner.styles";
import { PageContainer } from "theme/styles";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import SelectInvestorList from "./SelectInvestorList/SelectInvestorList";
import { HeaderWithValue } from "./HeaderWithValue/HeaderWithValue";
import BottomNav from "containers/Investors/CreateInvestor/BottomNav/BottomNav";

interface Props {
  selectedPortfolio: YieldXPortfolio;
}

function SelectInvestor({ selectedPortfolio }: Props) {
  const history = useHistory();
  const { selectedInvestor } = useRecoilValue(portfolioCreateOrEditState);
  return (
    <PageContainer>
      <HeaderWithValue
        subtitle="INVESTOR ACCOUNTS"
        title="Select an investor account"
        value={selectedPortfolio.totalMarketValue}
      />
      <React.Suspense
        fallback={
          <SpinnerWrapper height="100%">
            <Spinner />
          </SpinnerWrapper>
        }
      >
        <ErrorBoundary>
          <SelectInvestorList
            portfolioValue={selectedPortfolio?.totalMarketValue || 0}
          />
        </ErrorBoundary>
      </React.Suspense>
      <BottomNav
        onNext={() => history.push(`/execute-portfolio/preferences`)}
        blockNext={!selectedInvestor}
        nextLabel="Execute Portfolio"
        onPrevious={() => history.goBack()} // please fix-me
      />
    </PageContainer>
  );
}

export default SelectInvestor;
