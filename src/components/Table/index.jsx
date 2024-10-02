import Spinner from "../ui/Spinner/Spinner";

const Table = ({ columns, dataSource, loading, error }) => {
  return (
    <div className="relative">
      {loading && <Spinner className="absolute top-1/2 left-1/2 z-10 " />}

      {!loading && error && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-10">
          {error || "Error on data fetch"}
        </span>
      )}

      {!loading && !error && dataSource?.length === 0 && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-10">
          No data
        </span>
      )}
      <div
        className={`overflow-x-auto rounded-t-2xl min-h-[415px] max-h-[415px] relative bg-white ${
          loading ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <table className="w-full bg-white rounded-t-2xl relative border-separate border-spacing-0 min-h-full">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="shadow-bottom-border bg-white rounded-t-2xl text-secondary font-medium text-[13px] text-left px-6 py-4 sticky top-0"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!loading &&
              !error &&
              dataSource?.length > 0 &&
              dataSource?.map((data, i) => (
                <tr key={data?.id}>
                  {columns.map((column, j) => {
                    const keyId = `${data?.id}-${i}${j}`;
                    return (
                      <td
                        key={`${keyId}`}
                        className="text-left text-[15px] px-6 py-4 border-b border-b-secondary "
                      >
                        {column?.render
                          ? column?.render(data)
                          : data[column?.dataIndex]}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
