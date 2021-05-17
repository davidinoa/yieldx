import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  fundingSourceState,
  investmentAmountState,
  selectedLinkedBankState
} from "../services/InvestorService";
import {
  useApexGetAccountByInvestorIdQuery,
  useInvestorGetQuery
} from "../providers/graphql/hooks";
import useGetInvestorCashPortfolio from "../providers/graphql/hooks/useGetInvestorCashPortfolio";

const useTransfersData = (investorId: string) => {
  const fundingSource = useRecoilValue(fundingSourceState);
  const [amount, setAmount] = useRecoilState(investmentAmountState);
  const [selectedBank, setBank] = useRecoilState(selectedLinkedBankState);

  const {
    data: investorData,
    loading: investorLoading,
    error: investorError
  } = useInvestorGetQuery({
    variables: {
      investorId
    }
  });
  const selectedInvestor = investorData?.investorGet?.investor;
  const {
    data: apexData,
    loading: apexLoading,
    error: apexError
  } = useApexGetAccountByInvestorIdQuery({
    variables: {
      investorId
    }
  });
  const apexAccount = apexData?.apexGetAccountByInvestorId?.apexAccount;
  const {
    data: { cashPortfolio },
    loading: cashInvestorLoading,
    error: cashInvError
  } = useGetInvestorCashPortfolio(investorId);

  // cleanup investment amount when component unmounts
  React.useEffect(() => {
    return () => {
      setAmount(0);
      setBank(undefined);
    };
  }, [setAmount, setBank]);
  return {
    data: {
      selectedInvestor,
      apexAccount,
      cashOnlyPortfolio: cashPortfolio
    },
    error: {
      cashInvError,
      investorError,
      apexError
    },
    loading: {
      cashInvestorLoading,
      investorLoading,
      apexLoading
    },
    amount,
    fundingSource,
    selectedBank,
    setAmount
  };
};

export default useTransfersData;
