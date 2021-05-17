import { atom } from "recoil";

export const executionPreferencesState = atom<
  | undefined
  | {
      fullFillRequired: boolean;
      goodTillCancel: boolean;
    }
>({
  key: "executionPreferencesState",
  default: undefined
});
