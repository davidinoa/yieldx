import { displayGains } from "./displayGains";

describe("given numbers should be displayed appropriately", () => {
  test("input of 0 should not have + or -", () => {
    const displayVal = displayGains(0);
    expect(displayVal).toBe("$0.00");
  });
  test("input > 0 should be positive", () => {
    const displayVal = displayGains(5.54);
    expect(displayVal).toBe("+ $5.54");
  });
  test("input < 0 should be negative", () => {
    const displayVal = displayGains(-5.54);
    expect(displayVal).toBe("- $5.54");
  });
  test("input should be rounded to 100th", () => {
    expect(displayGains(5.5444444444444444444)).toBe("+ $5.54");
    expect(displayGains(5.5466666666666666666)).toBe("+ $5.55");
    expect(displayGains(-5.5466666666666666666)).toBe("- $5.55");
  });
});
