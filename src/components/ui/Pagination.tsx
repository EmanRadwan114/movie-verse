"use client";

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import ReactPaginate from "react-paginate";

interface IProps {
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<IProps> = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createSearchParams = useCallback(
    (name: string, val: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, val);

      return params.toString();
    },
    [searchParams]
  );

  const HandlePageChange = ({ selected }: { selected: number }) => {
    router.replace(
      `${pathname}?${createSearchParams("page", `${selected + 1}`)}`
    );
  };

  return (
    <ReactPaginate
      forcePage={currentPage - 1}
      breakLabel="..."
      onPageChange={HandlePageChange}
      nextLabel={<ChevronsRight />}
      pageRangeDisplayed={2}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      previousLabel={<ChevronsLeft />}
      renderOnZeroPageCount={null}
      containerClassName="flex gap-2 items-center justify-center mt-10"
      pageLinkClassName="hover:bg-muted transition-colors duration-300 px-2 py-1 rounded-sm not-disabled:cursor-pointer"
      activeLinkClassName="bg-primary text-neutral-50"
      previousClassName="px-1 py-1 rounded-sm cursor-pointer"
      nextClassName="px-1 py-1 rounded-sm cursor-pointer"
      disabledClassName="opacity-50 cursor-not-allowed!"
    />
  );
};

export default Pagination;
