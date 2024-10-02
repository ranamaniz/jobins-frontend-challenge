import { useState } from "react";
import ChevronLeft from "../../assets/icons/chevron-left.svg?react";
import ChevronRight from "../../assets/icons/chevron-right.svg?react";
import Button from "../ui/Button";
import IconButton from "../ui/Button/IconButton";
import Select from "../ui/Select";

const Pagination = ({
  count,
  page = 1,
  perPage = 10,
  totalCount = 1,
  className = "",
  onChange,
  loading = false,
}) => {
  const [currentPerPage, setCurrentPerPage] = useState(perPage);
  const [currentPage, setCurrentPage] = useState(page);

  const perPages = Math.ceil(totalCount / 10) || 1;

  const perPageOptions = Array.from({ length: perPages }, (_, i) => {
    const value = (i + 1) * 10;
    return { value, label: value };
  });

  const totalPages = Math.ceil(totalCount / currentPerPage);

  const pageOptions = Array.from({ length: totalPages }, (_, i) => {
    const value = i + 1;
    return { value, label: value };
  });

  const handlePerPageChange = (e) => {
    onChange(e.target.value, 1);
    setCurrentPerPage(e.target.value);
  };

  const handlePageChange = (page) => {
    if (page === "+" || page === "-") {
      setCurrentPage((prevPage) => {
        const newPage = page === "+" ? prevPage + 1 : prevPage - 1;

        if (newPage > totalPages || newPage < 1) return prevPage;

        onChange(currentPerPage, newPage);
        return newPage;
      });

      return;
    }

    setCurrentPage((prevPage) => {
      if (prevPage !== page) {
        onChange(currentPerPage, page);
        return page;
      }
      return prevPage;
    });
  };

  return (
    <div
      className={`bg-white px-6 py-4 flex justify-between items-center relative ${className} border-t border-t-secondary ${
        loading ? "pointer-events-none opacity-40" : ""
      }`}
    >
      <div className="text-secondary text-[15px]">
        Showing
        <Select
          className="mx-2"
          onChange={handlePerPageChange}
          options={perPageOptions}
          value={currentPerPage}
        />
        of {Math.ceil(totalCount / 10) * 10}
      </div>
      <div className="flex gap-1">
        <IconButton
          className="px-2 py-1 rounded bg-secondary  hover:bg-secondary/[0.6]  "
          Icon={ChevronLeft}
          onClick={() => {
            handlePageChange("-");
          }}
        />
        {pageOptions?.map((option) => (
          <Button
            key={option.value}
            onClick={(e) => handlePageChange(option?.value)}
          >
            {option?.label}
          </Button>
        ))}
        <IconButton
          className="px-2 py-1 rounded bg-secondary  hover:bg-secondary/[0.6] "
          Icon={ChevronRight}
          onClick={() => handlePageChange("+")}
        />
      </div>
    </div>
  );
};

export default Pagination;
