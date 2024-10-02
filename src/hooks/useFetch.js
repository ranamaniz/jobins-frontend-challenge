import { useEffect, useMemo, useState } from "react";

const useFetch = (service, searchParams) => {
  const [data, setData] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const stringSearchParams = useMemo(
    () => JSON.stringify(searchParams),
    [searchParams]
  );
  const fetchData = async () => {
    try {
      setData((prevData) => ({
        ...prevData,
        loading: true,
        error: undefined,
      }));

      const resData = await service(searchParams);

      setData({ data: resData, loading: false, error: undefined });
    } catch (e) {
      setData({
        data: undefined,
        loading: false,
        error: e?.message || "Sorry, something went wrong",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [stringSearchParams, service]);

  return data;
};

export default useFetch;
