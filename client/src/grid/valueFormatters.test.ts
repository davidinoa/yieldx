import { ValueFormatterParams } from "@ag-grid-community/core";
import { createNumberFormatter } from "./valueFormatters";

const baseParams = { data: { foo: 1 } } as ValueFormatterParams;

describe("createNumberFormatter", () => {
  test("formats numbers to whole numbers", () => {
    const params = { ...baseParams, value: 1.2 };
    const formatValue = createNumberFormatter(0, false, false);
    const text = formatValue(params);
    expect(text).toBe("1");
  });

  test("formats numbers to two decimal places", () => {
    const params = { ...baseParams, value: 1.235 };
    const formatValue = createNumberFormatter(2, false, false);
    const text = formatValue(params);
    expect(text).toBe("1.24");
  });

  test("formats numbers to four decimal places", () => {
    const params = { ...baseParams, value: 1.235 };
    const formatValue = createNumberFormatter(4, false, false);
    const text = formatValue(params);
    expect(text).toBe("1.2350");
  });

  test("formats numbers with dollars", () => {
    const params = { ...baseParams, value: 1.235 };
    const formatValue = createNumberFormatter(2, false, true);
    const text = formatValue(params);
    expect(text).toBe("$1.24");
  });

  test("formats numbers with percents", () => {
    const params = { ...baseParams, value: 1.235 };
    const formatValue = createNumberFormatter(2, true, false);
    const text = formatValue(params);
    expect(text).toBe("1.24%");
  });

  test("formats strings as themselves", () => {
    const params = { ...baseParams, value: "foo" };
    const formatValue = createNumberFormatter(2, false, false);
    const text = formatValue(params);
    expect(text).toBe("foo");
  });

  test("formats nulls as empty strings", () => {
    const params = { ...baseParams, value: null };
    const formatValue = createNumberFormatter(2, false, false);
    const text = formatValue(params);
    expect(text).toBe("");
  });
});
