interface InGridFilter {
  filter: string | number;
  filterTo: number;
  filterType: string;
  type: string;
  dateFrom: string;
  dateTo: string;
  values: string[];
}

export interface AgGridFilters {
  [key: string]: any;
}

const getFilter = (filter: InGridFilter) => {
  /**
   *  The filter object from Ag Grid API. In the case of filtering `name` column.
   *  { filter: "Asset Name", filterType: "text", type: "contains"}
   */
  let searchFilter = {};
  const {
    filter: filterContent,
    filterType,
    type,
    filterTo,
    values,
    dateFrom,
    dateTo
  } = filter;
  if (filterType === "text") {
    switch (type) {
      case "contains":
        searchFilter = { containsText: filterContent };
        break;
      case "notContains":
        searchFilter = { doesNotContainText: filterContent };
        break;
      case "equals":
        searchFilter = { equalsText: filterContent };
        break;
      case "notEqual":
        searchFilter = { doesNotEqualText: filterContent };
        break;
      case "startsWith":
        searchFilter = { startsWithText: filterContent };
        break;
      case "endsWith":
        searchFilter = { endsWith: filterContent };
        break;
      default:
        searchFilter = { containsText: filterContent };
        break;
    }
  } else if (filterType === "number") {
    switch (type) {
      case "equals":
        searchFilter = { equalsNumber: filterContent };
        break;
      case "notEqual":
        searchFilter = { doesNotEqualNumber: filterContent };
        break;
      case "lessThan":
        searchFilter = { isLessThanNumber: filterContent };
        break;
      case "lessThanOrEqual":
        searchFilter = { isLessThanOrEqualToNumber: filterContent };
        break;
      case "greaterThan":
        searchFilter = { isGreaterThanNumber: filterContent };
        break;
      case "greaterThanOrEqual":
        searchFilter = { isGreaterThanOrEqualToNumber: filterContent };
        break;
      case "inRange":
        searchFilter = {
          isGreaterThanOrEqualToNumber: filterContent,
          isLessThanOrEqualToNumber: filterTo
        };
        break;
      default:
        searchFilter = { equalsNumber: filterContent };
        break;
    }
  } else if (filterType === "date") {
    const convertedDateFrom = new Date(dateFrom);
    const convertedDateTo = new Date(dateTo);
    switch (type) {
      case "equals":
        searchFilter = { equalsDate: convertedDateFrom };
        break;
      case "greaterThan":
        searchFilter = { isGreaterThanDate: convertedDateFrom };
        break;
      case "lessThan":
        searchFilter = { isLessThanDate: convertedDateFrom };
        break;
      case "notEqual":
        searchFilter = { doesNotEqualDate: convertedDateFrom };
        break;
      case "inRange":
        searchFilter = {
          isGreaterThanOrEqualToDate: convertedDateFrom,
          isLessThanOrEqualToDate: convertedDateTo
        };
        break;
      default:
        searchFilter = { equalsDate: convertedDateFrom };
        break;
    }
  } else if (filterType === "set" && values) {
    // We may need to add `set` type Ag grid column filter params like cusip or isin
    // in the search request in the future.
    // searchFilter = { inText: values };
  }
  return searchFilter;
};

export const convertInGridFilters = (filters: AgGridFilters) => {
  const convertedFilters: { [index: string]: any } = {};
  Object.keys(filters).forEach(key => {
    const inGridFilter = filters[key];
    if (key === "minimumQuantity") key = "bond.minimumDenomination";
    convertedFilters[key] = getFilter(inGridFilter);
  });

  return convertedFilters;
};
