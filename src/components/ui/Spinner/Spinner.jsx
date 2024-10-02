const Spinner = ({ size = "md", info = "", className = "" }) => {
  const sizeMap = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const spinnerSize = sizeMap[size] || sizeMap["md"];

  return (
    <div className={`flex justify-center items-center flex-col ${className}`}>
      <div
        className={`${spinnerSize} rounded-50 border-2 border-white border-t-2 animate-spin bg-transparent border-t-blue-400  `}
      ></div>
      <span className="text-secondary">{info}</span>
    </div>
  );
};

export default Spinner;
