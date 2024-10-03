import { memo, useEffect, useState } from "react";
import SearchIcon from "../../../assets/icons/search.svg?react";
import IconButton from "../Button/IconButton";
import useDebounce from "../../../hooks/useDebounce";

const Search = ({ onChange, value = "", className = "" }) => {
  const [search, setSearch] = useState(value);

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    onChange(debouncedSearch);
  }, [debouncedSearch]);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };
  return (
    <div className="relative">
      <input
        onChange={handleChange}
        value={search}
        placeholder="Search..."
        className={`outline-none px-4 py-2 rounded min-w-50 w-full ${className} pr-7`}
      />
      <IconButton
        Icon={SearchIcon}
        className="absolute top-1/2 right-0 translate-center"
      />
    </div>
  );
};

export default memo(Search);
