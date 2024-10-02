const Select = ({
  name = "",
  id = "",
  className = "",
  onChange,
  options = [],
  value = "",
}) => {
  return (
    <select
      name={name}
      id={id}
      className={`outline-none  border border-secondary rounded-md px-5 py-[10px] ${className}  `}
      onChange={onChange}
      value={value}
    >
      {options?.map((option) => (
        <option value={option?.value} key={option?.label}>
          {option?.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
