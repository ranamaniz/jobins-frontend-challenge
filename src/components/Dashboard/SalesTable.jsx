import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getSales } from "../../service/salesService";
import { ORDERS_STATUS, STATUS_COLOR_CODE } from "../../utils/constants";
import Pagination from "../Pagination";

import Table from "../Table";
import Search from "../ui/Search";
import { useCallback } from "react";

const SALES_TABLE_COLUMNS = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Customer",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Method",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (data) => {
      const statusCode = data?.status.toLowerCase();
      const statusColor = `${STATUS_COLOR_CODE[statusCode]}`;

      return (
        <span className={`${statusColor} font-semibold`}>{data?.status}</span>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => <button className="text-action">View Details</button>,
  },
];

const SalesTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const currentPerPage = parseInt(searchParams.get("perPage")) || 10;
  const searchString = searchParams.get("search") || "";

  const getStatus = () => {
    const statusParam = searchParams.get("status") || "";
    const orderStatus = ORDERS_STATUS.find(
      (status) => status.value === statusParam && status.value !== "all"
    );

    return orderStatus?.label || "";
  };

  const status = getStatus();

  const {
    data: salesData,
    loading,
    error,
  } = useFetch(getSales, {
    page: currentPage,
    perPage: currentPerPage,
    status,
    searchString,
  });

  const handlePaginationChange = (perPage, page) => {
    setSearchParams((searchParams) => {
      searchParams.set("perPage", perPage);
      searchParams.set("page", page);
      return searchParams;
    });
  };

  const handleSearch = useCallback((searchValue) => {
    setSearchParams((searchParams) => {
      searchParams.set("search", searchValue);
      searchParams.set("page", 1);
      return searchParams;
    });
  }, []);

  return (
    <div className="mt-4">
      <div className="mb-4 flex">
        <div>
          {/* Select */}

          <Search onChange={handleSearch} value={searchString} />
        </div>
        <div>{/* filterby date */}</div>
      </div>
      <Table
        dataSource={salesData?.data}
        columns={SALES_TABLE_COLUMNS}
        totalCount={salesData?.totalCount}
        loading={loading}
        error={error}
      />

      <Pagination
        loading={loading}
        count={salesData?.data?.length}
        totalCount={salesData?.totalCount}
        className="rounded-b-2xl shadow-top-border"
        onChange={handlePaginationChange}
        page={currentPage}
        perPage={currentPerPage}
      />
    </div>
  );
};

export default SalesTable;
