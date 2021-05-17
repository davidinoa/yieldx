import { useHistory, useLocation } from "react-router-dom";
import {
  atom,
  selector,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue
} from "recoil";
import React from "react";
import { FormikState } from "formik";
import {
  Action,
  GetMinMaxYieldRequest,
  NewProposalRequest,
  Proposal,
  ProposalsApi,
  RebalanceProposalRequest
} from "@bondhouse/income-portfolios";
import { InventoriesApi } from "@bondhouse/rover-universe";
import { InPaaSFormState, inpaasFormState } from "recoil-state/inPaaS";
import { userState } from "services/userState";
import parsePortfolioQuery from "util/parsePortfolioQuery";
import { selectedInventoriesAtom } from "../../UniverseManager/SetDefaultUniverses/useSetDefaultUniverses";

const proposalsApi = new ProposalsApi();
const inventoriesApi = new InventoriesApi();

export const inpaasDataSelector = selector({
  key: "inpaasDataSelector",
  get: async ({ get }) => {
    let whitelist: Array<string> | undefined;
    const { inpaas } = get(selectedInventoriesAtom);
    const { institutionId } = get(userState);
    try {
      if (inpaas && institutionId) {
        const {
          data: { inventory }
        } = await inventoriesApi.getInventory(institutionId, inpaas.id);
        whitelist = inventory.assetIds;
      }
    } catch (error) {
      console.error(error);
    }
    const minMaxReq: GetMinMaxYieldRequest = {};
    if (whitelist) minMaxReq.whitelist = whitelist;
    const {
      data: { minYield, maxYield }
    } = await proposalsApi.getMinMaxYield(minMaxReq);
    const {
      data: { minRisk, maxRisk }
    } = await proposalsApi.getMinMaxRisk(minMaxReq);
    return {
      minYield,
      maxYield,
      minRisk,
      maxRisk,
      whitelist
    };
  }
});

async function generateProposal(
  values: FormikState<InPaaSFormState>["values"],
  whitelist?: Array<string>
) {
  if (!values.investmentAmount)
    throw Error("Investment amount is undefined or 0");
  const request: NewProposalRequest = {
    investmentAmount: values.investmentAmount,
    goal: {
      income: values.goal === "targetIncome" ? values.targetIncome : undefined,
      risk: values.goal === "targetRisk" ? values.targetRisk : undefined,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      yield: values.goal === "targetYield" ? values.targetYield : undefined
    },
    constraints: {
      minimumWeight: Number(values.minimumWeight) / 100.0 || undefined,
      maximumWeight: Number(values.maximumWeight) / 100.0 || undefined
    }
  };
  if (whitelist) request.whitelist = whitelist;
  const {
    data: { proposal }
  } = await proposalsApi.newProposal(request);
  return proposal;
}

async function rebalanceProposal(
  portfolioId: string,
  values: FormikState<InPaaSFormState>["values"],
  originalValue: number,
  whitelist?: Array<string>
) {
  if (!values.investmentAmount)
    throw Error("Investment amount is undefined or 0");
  const request: RebalanceProposalRequest = {
    updateInvestmentAmount: {
      action:
        values.investmentAmount > originalValue ? Action.ADD : Action.REDUCE,
      amount: Math.abs(values.investmentAmount - originalValue)
    },
    goal: {
      income: values.goal === "targetIncome" ? values.targetIncome : undefined,
      risk: values.goal === "targetRisk" ? values.targetRisk : undefined,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      yield: values.goal === "targetYield" ? values.targetYield : undefined
    },
    constraints: {
      minimumWeight: Number(values.minimumWeight) / 100.0 || undefined,
      maximumWeight: Number(values.maximumWeight) / 100.0 || undefined
    }
  };
  if (whitelist) request.whitelist = whitelist;
  const {
    data: { proposal }
  } = await proposalsApi.rebalanceProposal(portfolioId, request);
  return proposal;
}

export const proposalAtom = atom<Proposal | null>({
  key: "proposalAtom",
  default: null
});
export default function useGoals(originalValue?: number) {
  const history = useHistory();
  const { search } = useLocation();
  const { portfolioId } = parsePortfolioQuery(search) ?? {};
  const [inpaasFormData, setInpaasData] = useRecoilState(inpaasFormState);
  const { minYield, maxYield, whitelist, maxRisk, minRisk } = useRecoilValue(
    inpaasDataSelector
  );
  const [isSubmitting, setSubmitting] = React.useState(false);
  const submit = useRecoilCallback(
    ({ set }) => async (values: FormikState<InPaaSFormState>["values"]) => {
      setInpaasData(values);
      setSubmitting(true);
      const proposal =
        originalValue !== undefined && portfolioId !== undefined
          ? await rebalanceProposal(
              portfolioId,
              values,
              originalValue,
              whitelist
            )
          : await generateProposal(values, whitelist);
      set(proposalAtom, proposal);
      if (history.location.pathname.includes("rebalance"))
        history.push({
          pathname: `/inpaas/portfolio-review/rebalance`,
          search: history.location.search
        });
      else history.push("/inpaas/portfolio-review");
    }
  );
  return {
    submit,
    isSubmitting,
    minYield,
    maxYield,
    inpaasFormData,
    history,
    maxRisk,
    minRisk
  };
}
