import { useState, Dispatch, SetStateAction } from "react";

export default function usePagination(records: unknown[], perPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalRecords = records.length || 1;
  const totalPages = Math.ceil(totalRecords / perPage);
  return [currentPage, totalPages, setCurrentPage] as [
    number,
    number,
    Dispatch<SetStateAction<number>>
  ];
}
