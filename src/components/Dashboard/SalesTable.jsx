import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getSales } from "../../service/salesService";
import { ORDERS_STATUS, STATUS_COLOR_CODE } from "../../utils/constants";
import Pagination from "../Pagination";

import Table from "../Table";
import Search from "../ui/Search";
import { useCallback, useMemo } from "react";
import Select from "../ui/Select";
import DateRangePicker from "../ui/DatePicker/DateRangePicker";
import { format, subDays } from "date-fns";

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

  const startDate =
    searchParams.get("start") || format(subDays(new Date(), 30), "yyyy-MM-dd");
  const endDate = searchParams.get("end") || format(new Date(), "yyyy-MM-dd");

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
    startDate,
    endDate,
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

  const handleDateRangeChange = (newStartDate, newEndDate) => {
    if (newStartDate !== startDate || newEndDate !== endDate) {
      setSearchParams((searchParams) => {
        searchParams.set("start", newStartDate);
        searchParams.set("end", newEndDate);
        searchParams.set("page", 1);

        return searchParams;
      });
    }
  };

  return (
    <div className="mt-4">
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:justify-between ">
        <div className="flex sm:items-center gap-4 flex-col sm:flex-row">
          <Select
            options={ORDERS_STATUS}
            className="border-none shadow min-w-40 w-full"
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
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateRangeChange}
          className="self-end"
        />
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
