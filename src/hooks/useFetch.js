import { useEffect, useState } from "react";

const useFetch = (service, searchParams) => {
  const [data, setData] = useState({
    loading: false,
    data: undefined,
    error: "",
  });

  const fetchData = async () => {
    try {
      const resData = await service({ searchParams });

      setData({ data: resData, loading: false, error: "" });
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
  }, [searchParams, service]);

  return data;
};

export default useFetch;
