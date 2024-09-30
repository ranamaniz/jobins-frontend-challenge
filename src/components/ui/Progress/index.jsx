const Progress = ({ className = "", value = "0", type = "success" }) => {
  const bg = `bg-${type}`;

  return (
    <div className={`h-[6px] bg-[#E9E7FD] rounded-lg ${className}`}>
      <div
        className={`${bg} h-[6px] rounded-lg  `}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
