import { useEffect, useState } from "react";

const useFetch = (service, searchParams) => {
  const {
    currentPage,
    currentPerPage,
    status,
    searchString,
    startDate,
    endDate,
  } = searchParams;

  const [data, setData] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const fetchData = async () => {
    try {
      setData((prevData) => ({
        ...prevData,
        loading: true,
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
  }, [currentPage, currentPerPage, status, searchString, startDate, endDate]);

  return data;
};

export default useFetch;
