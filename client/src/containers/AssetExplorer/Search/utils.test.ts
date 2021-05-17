import { convertInGridFilters } from "./utils";

const AG_GRID_FILTERS = {
  "bond.maturityDate": {
    dateFrom: "2030-10-10 00:00:00",
    dateTo: "2040-10-10 00:00:00",
    type: "inRange",
    filterType: "date"
  },
  name: { filterType: "text", type: "contains", filter: "MA" },
  price: {
    filterType: "number",
    type: "greaterThan",
    filter: 120,
    filterTo: null
  }
};

describe("convertInGridFilters", () => {
  test("should return correct values", () => {
    const convertedFilters = convertInGridFilters(AG_GRID_FILTERS);
    expect(convertedFilters).toEqual({
      "bond.maturityDate": {
        isLessThanOrEqualToDate: new Date("2040-10-10 00:00:00"),
        isGreaterThanOrEqualToDate: new Date("2030-10-10 00:00:00")
      },
      name: { containsText: "MA" },
      price: { isGreaterThanNumber: 120 }
    });
  });
});
