const Icon = ({
  src = "",
  alt = "icon",
  size = "md",
  className = "",
  width,
  height,
}) => {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-11 h-11",
    xl: "w-18 h-18",
  };

  const iconSize =
    width && height
      ? `w-[${width}px] h-[${height}px]`
      : isNaN(parseInt(size))
      ? `w-${size} h-${size}`
      : sizes[size] || sizes.md;

  return <img src={src} alt={alt} className={`${iconSize} ${className}`} />;
};

export default Icon;
