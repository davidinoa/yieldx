import { Asset } from "@bondhouse/rover-universe";
import USD from "./assets/USD";
import muni from "./assets/muni";
import fund from "./assets/fund";

const mockAssets: Record<string, Asset> = {
  USD,
  muni
};

export const mockMultiAssets: Asset[] = [USD, muni, fund];

export default mockAssets;
