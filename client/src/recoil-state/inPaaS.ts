import { atom } from "recoil";

export type InPaaSFormState = {
  investmentAmount?: number;
  goal: "targetIncome" | "targetRisk" | "targetYield";
  targetIncome?: number;
  targetYield?: number;
  minimumWeight: number;
  maximumWeight: number;
  targetRisk?: number;
};

export const inpaasFormState = atom<InPaaSFormState | null>({
  key: "inpaasFormState",
  default: null
});
