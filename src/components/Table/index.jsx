import Pagination from "../Pagination";

const Table = ({ columns, dataSource, totalCount }) => {
  return (
    <div className={`overflow-x-auto rounded-2xl max-h-[415px]`}>
      <table className="w-full bg-white  rounded-2xl relative border-separate border-spacing-0">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="shadow-bottom-border bg-white rounded-t-2xl text-secondary font-medium text-[13px] text-left px-6 py-4 sticky top-0 "
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource?.map((data, i) => (
            <tr key={i}>
              {columns.map((column) => {
                return (
                  <td
                    key={data?.id}
                    className="text-left text-[15px] px-6 py-4 border-b border-b-secondary "
                  >
                    {column?.render
                      ? column?.render()
                      : data[column?.dataIndex]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={dataSource?.length} totalCount={totalCount} />
    </div>
  );
};

export default Table;
