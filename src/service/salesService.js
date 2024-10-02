export const getSales = async (searchParams) => {
  // eslint-disable-next-line no-useless-catch
  try {
    let url = `${import.meta.env.VITE_API_BASE_URL}/sales`;

    const { perPage, page } = searchParams;

    if (searchParams) {
      url += `?_page=${page}&_per_page=${perPage}`;
    }
    console.log("url", url);

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Sorry, could not fetch the sales data");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};
