import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import Pagination from "elements/Pagination/Pagination";
import { portfolioCreateOrEditState } from "recoil-state/portfolioCreateOrEditState";
import getCurrPageData from "util/getCurrPageData";
import YieldXLoader from "elements/YieldXLoader/YieldXLoader";
import {
  InvestorWithApexAccount,
  Status2,
  useInvestorGetsQuery
} from "providers/graphql/hooks";
import SelectInvestorCard from "containers/PortfolioExecution/SelectInvestor/SelectInvestorList/SelectInvestorCard/SelectInvestorCard";
import { SFIPortfolioList } from "../SelectInvestor.style";
import NoAvailableInvestors from "./NoAvailableInvestors";

interface SelectInvestorListProps {
  portfolioValue: number;
}

export function getInvestorName(investor: {
  investorInfo: { givenName: string; familyName: string };
}) {
  const { givenName, familyName } = investor.investorInfo;
  return `${givenName} ${familyName}`;
}

export default function SelectInvestorList({
  portfolioValue
}: SelectInvestorListProps) {
  const {
    data: investorsData,
    loading: investorsLoading
  } = useInvestorGetsQuery({
    errorPolicy: "all"
  });
  const [{ selectedInvestor }, selectInvestor] = useRecoilState(
    portfolioCreateOrEditState
  );
  const accounts = investorsData?.investorGets?.investors?.filter(
    it => it?.apexAccount && it.apexAccount.status !== Status2.Error
  ) as InvestorWithApexAccount[];
  const [currPage, setCurrPage] = React.useState(1);
  const setInvestorCallback = useCallback(
    investor =>
      selectInvestor(prev => ({
        ...prev,
        selectedInvestor: investor
      })),
    [selectInvestor]
  );
  const totalPages = Math.ceil((accounts?.length || 0) / 8);
  if (!investorsLoading && accounts) {
    if (!accounts.length) return <NoAvailableInvestors />;
    return (
      <Row>
        <SFIPortfolioList>
          {getCurrPageData(accounts, 8, currPage).map(account => {
            const { investor } = account || {};
            if (investor)
              return (
                <SelectInvestorCard
                  key={`cash-investor-${investor.id}`}
                  name={getInvestorName(investor)}
                  isSelected={investor.id === selectedInvestor?.id}
                  portfolioValue={portfolioValue}
                  investor={investor}
                  onSelect={setInvestorCallback}
                />
              );
            return null;
          })}
          <Col xs={24}>
            <Pagination
              total={totalPages}
              current={currPage}
              handleChange={setCurrPage}
            />
          </Col>
        </SFIPortfolioList>
      </Row>
    );
  }
  return <YieldXLoader />;
}
