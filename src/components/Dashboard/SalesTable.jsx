import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getSales } from "../../service/salesService";
import { ORDERS_STATUS, STATUS_COLOR_CODE } from "../../utils/constants";
import Pagination from "../Pagination";

import Table from "../Table";
import Search from "../ui/Search";
import { useCallback, useMemo } from "react";
import Select from "../ui/Select";

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
    const statusParam = searchParams.get("status") || "all";
    const orderStatus = ORDERS_STATUS.find(
      (status) => status.value === statusParam
    );

    return orderStatus;
  };

  const status = getStatus();

  const {
    data: salesData,
    loading,
    error,
  } = useFetch(getSales, {
    page: currentPage,
    perPage: currentPerPage,
    status: status?.value,
    searchString,
  });

  const handlePaginationChange = (perPage, page) => {
    if (perPage !== currentPerPage || page !== currentPage) {
      setSearchParams((searchParams) => {
        searchParams.set("perPage", perPage);
        searchParams.set("page", page);
        return searchParams;
      });
    }
  };

  const handleSearch = useCallback((searchValue) => {
    setSearchParams((searchParams) => {
      if (searchParams.get("search") !== searchValue) {
        searchParams.set("search", searchValue);
        searchParams.set("page", 1);
        searchParams.set("status", "all");
      }

      return searchParams;
    });
  }, []);

  const handleStatusChange = (e) => {
    const status = e.target.value;
    setSearchParams((searchParams) => {
      searchParams.set("status", status);
      return searchParams;
    });
  };

  return (
    <div className="mt-4">
      <div className="mb-4 flex space-between">
        <div className="flex items-center  gap-4">
          <Select
            options={ORDERS_STATUS}
            className="border-none shadow w-40  "
            onChange={handleStatusChange}
            value={status?.value}
            prefix="Status: "
          />
          <Search
            onChange={handleSearch}
            value={searchString}
            className="shadow"
          />
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
