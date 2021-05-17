import { ValueSetterParams } from "@ag-grid-community/core";
import { createNumberValueSetter } from "./valueSetters";

const baseParams = { data: { foo: 1 } } as ValueSetterParams;

describe("createNumberValueSetter", () => {
  const setValue = createNumberValueSetter("foo");

  test("updates params.data with numeric values", () => {
    const params = { ...baseParams, newValue: 2 };
    setValue(params);
    expect(params.data).toEqual({ foo: 2 });
  });

  test("updates params.data to 0 when provided with a non-numeric value", () => {
    const params = { ...baseParams, newValue: "bar" };
    setValue(params);
    expect(params.data).toEqual({ foo: 0 });
  });

  test("updates params.data to 0 when provided with NaN", () => {
    const params = { ...baseParams, newValue: NaN };
    setValue(params);
    expect(params.data).toEqual({ foo: 0 });
  });

  test("updates params.data to 0 when provided with infinity", () => {
    const params = { ...baseParams, newValue: Infinity };
    const set = createNumberValueSetter("foo");
    set(params);
    expect(params.data).toEqual({ foo: 0 });
  });

  test("updates params.data with strings that represent numeric values", () => {
    const params = { ...baseParams, newValue: "2" };
    setValue(params);
    expect(params.data).toEqual({ foo: 2 });
  });
});
