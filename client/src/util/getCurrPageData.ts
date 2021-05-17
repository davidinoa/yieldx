import { sortBy } from "lodash";

type PaginationOptions = { itemsPerPage: number; currentPage: number };

export default function getCurrPageData<T>(
  records: T[],
  perPage: number,
  current: number
) {
  const listPosition = (current - 1) * perPage;
  let iteratees = ["createdAt", "name", "type"];
  if (records[0] && "portfolio" in records[0])
    iteratees = [
      "portfolio.createdAt",
      "portfolio.name",
      "portfolio.status",
      "portfolioType"
    ];
  if (records[0] && "investor" in records[0])
    iteratees = [
      "investor.createdAt",
      "investor.investorInfo.familyName",
      "investor.investorInfo.givenName",
      "apexAccount.status"
    ];
  return sortBy(records, iteratees)
    .reverse()
    .slice(listPosition, listPosition + perPage);
}

export type { PaginationOptions };
