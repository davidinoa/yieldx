import sanitizeObject from "./sanitizeObject";

describe("sanitizeObject", () => {
  test("does nothing when the original object contains only keys with non-blank values", () => {
    const input = { foo: "bar", baz: 0, quux: { hoge: "poge" } };
    const expected = input;
    expect(sanitizeObject(input)).toEqual(expected);
  });

  test("removes keys with blank values", () => {
    const input = { foo: null, baz: undefined, quux: { hoge: "" } };
    const expected = { quux: {} };
    expect(sanitizeObject(input)).toEqual(expected);
  });
});
