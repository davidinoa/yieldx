import { renderDate } from "./cellRenderers";

describe("renderDate", () => {
  test("correctly renders a date", () => {
    const value = new Date("1984-11-23");
    const text = renderDate({ value });
    expect(text).toBe("1984-11-23");
  });

  test("correctly renders a date with zeros", () => {
    const value = new Date("1984-06-01");
    const text = renderDate({ value });
    expect(text).toBe("1984-06-01");
  });

  test("correctly renders a date-time as a date", () => {
    const value = new Date("1984-06-01T01:23:45.000Z");
    const text = renderDate({ value });
    expect(text).toBe("1984-06-01");
  });

  test("handles nulls", () => {
    const text = renderDate({ value: (null as unknown) as Date });
    expect(text).toBe("");
  });
});
