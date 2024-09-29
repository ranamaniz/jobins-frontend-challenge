import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_TITLES } from "../utils/constants";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = PAGE_TITLES[location?.pathname] || "Jobins";
    document.title = title;
  }, [location?.pathname]);
};

export default usePageTitle;
