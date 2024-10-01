import useFetch from "../../hooks/useFetch";
import { getSales } from "../../service/salesService";

import Table from "../Table";

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
  },
  {
    title: "Action",
    key: "action",
    render: () => <button className="text-action">View Details</button>,
  },
];

const SalesTable = () => {
  const { data: salesData, loading, error } = useFetch(getSales);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-4">
      <Table
        dataSource={salesData?.data}
        columns={SALES_TABLE_COLUMNS}
        totalCount={salesData?.totalCount}
      />
    </div>
  );
};

export default SalesTable;
