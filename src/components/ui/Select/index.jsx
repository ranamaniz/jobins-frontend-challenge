import { memo, useEffect, useState } from "react";
import ChevronDown from "../../../assets/icons/chevron-down-default.svg?react";

const Select = ({
  name = "",
  id = "",
  className = "",
  onChange,
  options = [],
  value = "",
  prefix = "",
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    if (value !== selectedValue) {
      setSelectedValue(value);
    }
  }, [value, selectedValue]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    onChange(e);
  };

  return (
    <div className="relative">
      <select
        name={name}
        id={id}
        className={`outline-none border border-secondary rounded-md px-5 py-[10px] ${className}  `}
        onChange={handleChange}
        value={selectedValue}
      >
        {options?.map((option) => (
          <option value={option?.value} key={option?.label}>
            {option?.label}
          </option>
        ))}
      </select>
      {prefix && (
        <div className=" flex justify-center  items-center bg-white w-full h-full rounded-md absolute top-1/2 left-1/2 translate-center pointer-events-none">
          <span className=" text-secondary text-[15px] flex items-center">
            {prefix} &nbsp; <span className="capitalize ">{selectedValue}</span>
            <ChevronDown />
          </span>
        </div>
      )}
    </div>
  );
};

export default memo(Select);
