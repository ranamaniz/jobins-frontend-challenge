import React from "react";

const Icon = ({
  src = "",
  alt = "",
  height = 22,
  width = 22,
  className = "",
  size = "medium",
}) => {


  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
};

export default Icon;
