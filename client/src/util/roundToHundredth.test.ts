import { roundToHundredth } from "./roundToHundredth";

describe("given numbers should be rounded to nearest 100th", () => {
  test("whole numbers should be the same", () => {
    expect(roundToHundredth(0)).toBe(0);
    expect(roundToHundredth(10)).toBe(10);
    expect(roundToHundredth(5)).toBe(5);
  });
  test("10th place should remain the same", () => {
    expect(roundToHundredth(10.1)).toBe(10.1);
    expect(roundToHundredth(5.5)).toBe(5.5);
  });
  test("should be rounded to nearest 100th", () => {
    expect(roundToHundredth(10.1222222)).toBe(10.12);
    expect(roundToHundredth(5.54444444)).toBe(5.54);
    expect(roundToHundredth(5.54555555)).toBe(5.55);
  });
});
