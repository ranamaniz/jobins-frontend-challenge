import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import ChevronDown from "../../../assets/icons/chevron-down-default.svg?react";
import { format } from "date-fns";

const DateRangePicker = ({ startDate, endDate, onChange, className = "" }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      key: "selection",
    },
  ]);

  const [isEndDateSelected, setIsEndDateSelected] = useState(false);

  useEffect(() => {
    if (isEndDateSelected) {
      const startDate = format(dateRange[0]?.startDate, "yyyy-MM-dd");
      const endDate = format(dateRange[0]?.endDate, "yyyy-MM-dd");

      onChange(startDate, endDate);
      setIsEndDateSelected(false);
    }
  }, [isEndDateSelected]);

  const handleDateRangeChange = (item) => {
    setDateRange([item.selection]);
  };

  const handleDateRangeFocusChange = (range) => {
    const isEndDateSelected = range[1] === 0;

    if (isEndDateSelected) {
      setIsEndDateSelected(range[1] === 0);
    }
  };
  return (
    <div className="shadow bg-white relative  w-full sm:w-52  h-10 rounded group">
      <span className="flex  items-center gap-2 justify-center py-2 px-4 text-[15px] text-secondary">
        Filter by date range{" "}
        <ChevronDown className=" transition-all ease-in-out group-hover:rotate-180" />
      </span>
      <div
        className={`
        z-10 shadow absolute top-full right-0 left-0  xs:-left-28 xs:-right-28 md:-left-28  md:right-0 hidden group-hover:block w-72 ${className} `}
      >
        <DateRange
          editableDateInputs={true}
          onChange={handleDateRangeChange}
          moveRangeOnFirstSelection={false}
          onRangeFocusChange={handleDateRangeFocusChange}
          ranges={dateRange}
          maxDate={new Date()}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
