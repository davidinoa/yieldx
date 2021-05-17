import { calculateYieldContributions } from "util/calculateYieldContributions";
import { MOCK_YIELDX_INPAAS_POSITIONS } from "util/generateSectorAllocation.test";

describe("calculateYieldContributions", () => {
  it("Should calculate correctly", () => {
    expect(
      calculateYieldContributions(
        MOCK_YIELDX_INPAAS_POSITIONS,
        10.000187955740415
      )
    ).toStrictEqual({
      names: [
        "DoubleLine Opportunistic Credit Fund",
        "Western Asset Global High Income Fund",
        "Xtrackers High Beta High Yield Bond ETF",
        "Brookfield Real Assets Income Fund Inc"
      ],
      values: [
        36.83048661652847,
        30.568941414198274,
        17.80674359869891,
        14.793828370574335
      ]
    });
  });
});
