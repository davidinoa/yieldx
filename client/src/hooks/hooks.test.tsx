import { renderHook } from "@testing-library/react-hooks";
import usePagination from "./usePagination";

test("usePagination", () => {
  const { result } = renderHook(() => usePagination([], 7));
  const [currentPage, totalPages, setCurrentPage] = result.current;
  expect(currentPage).toEqual(1);
  expect(totalPages).toEqual(1);
  expect(setCurrentPage).toBeDefined();
});
