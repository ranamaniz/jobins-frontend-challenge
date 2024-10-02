import { useEffect, useState } from "react";
import SearchIcon from "../../../assets/icons/search.svg?react";
import IconButton from "../Button/IconButton";
import useDebounce from "../../../hooks/useDebounce";

const Search = ({ onChange, value }) => {
  const [search, setSearch] = useState(value);

  const debouncedSearch = useDebounce({ value: search, delay: 1000 });

  useEffect(() => {
    onChange(debouncedSearch);
  }, [debouncedSearch, onChange]);

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
        className="outline-none px-4 py-2 rounded w-50"
      />
      <IconButton
        Icon={SearchIcon}
        className="absolute top-1/2 right-0 translate-center"
      />
    </div>
  );
};

export default Search;
