import { ApexAccount, ApexAccountsApi } from "@bondhouse/apex";
import { PortfolioType } from "@bondhouse/income-portfolios";
import {
  Investor,
  InvestorsApi,
  PortfolioDeliveryInstructionsApi
} from "@bondhouse/investor";
import { atom, atomFamily, selectorFamily } from "recoil";
import { getPortfolioState } from "recoil-state/portfoliosApi";
import { LinkedBankAccount, Position2 } from "providers/graphql/hooks";

export interface CashManageInvestor {
  apexAccount: ApexAccount;
  investor: Investor;
  cashPortfolio: {
    cashPos: Position2;
    cashAvailable: number;
    portfolioId: string;
  };
}

export interface InvestorAndExternal {
  investor: Investor;
  apexAccount?: ApexAccount | null;
}

const investorsApi = new InvestorsApi();
const apexAccountsApi = new ApexAccountsApi();
const portfolioDeliveryInstructionsApi = new PortfolioDeliveryInstructionsApi();

export const deliveryInstructionsByInvestor = atomFamily({
  key: "deliveryInstructionsByInvestor",
  default: selectorFamily({
    key: "deliveryInstructionsByInvestor/Default",
    get: (investorId: string) => async () => {
      const {
        data: { deliveryInstructions }
      } = await portfolioDeliveryInstructionsApi.getDeliveryInstructionsByInvestorId(
        investorId
      );
      return deliveryInstructions;
    }
  })
});

export const getInvestorSelector = selectorFamily({
  key: "getInvestorSelector",
  get: (investorId: string) => async () => {
    const {
      data: { investor }
    } = await investorsApi.getInvestor(investorId);
    return investor;
  }
});

export const getApexWithInvestor = atomFamily({
  key: "getApexWithInvestor",
  default: selectorFamily({
    key: "getApexWithInvestor/Default",
    get: (investorId: string) => async () => {
      try {
        const {
          data: { apexAccount }
        } = await apexAccountsApi.getApexAccountByInvestorId(investorId);
        return apexAccount;
      } catch (e) {
        return null;
      }
    }
  })
});

export const getCashOnlyPortfolio = selectorFamily({
  key: "getCashOnlyPortfolio",
  get: (investorId: string) => ({ get }) => {
    const deliveryInstructions = get(
      deliveryInstructionsByInvestor(investorId)
    );
    // Get cash only portfolio from portfolios. Set cash portfolio and remove it from portfolios
    const cashOnlyPortfolioId = deliveryInstructions.find(
      instruction => instruction.cashOnly === true
    )?.portfolioId;
    if (cashOnlyPortfolioId) {
      const port = get(
        getPortfolioState({
          portfolioId: cashOnlyPortfolioId,
          portfolioType: PortfolioType.LIVE
        })
      );
      if (port === undefined) throw Error("Cash portfolio had error");
      const { portfolio } = port;
      const cashPos = portfolio.positions.find(
        position => position.id === "CASH-USD"
      );
      if (!cashPos) return null;
      return {
        portfolioId: portfolio.id,
        cashPos,
        cashAvailable:
          (cashPos?.unsettled ?? 0) > 0
            ? cashPos?.settled ?? 0
            : cashPos?.quantity ?? 0
      };
    }
    return null;
  }
});

export const selectedLinkedBankState = atom<LinkedBankAccount | undefined>({
  key: "selectedLinkedBank",
  default: undefined
});

export const fundingSourceState = atom<"wire" | "plaid" | undefined>({
  key: "fundingSource",
  default: undefined
});

export const investmentAmountState = atom({
  key: "investmentAmount",
  default: 0
});
