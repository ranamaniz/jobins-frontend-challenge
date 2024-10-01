const defaultUserSrc = "/images/user.png";

const Avatar = ({
  src = defaultUserSrc,
  isActive = true,
  alt = "avatar",
  showStatus = false,
  className = "",
  width = "38",
  height = "38",
}) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className={` rounded-50 object-scale-down bg-gray-200 overflow-hidden align-middle ${className}`}
        width={width}
        height={height}
      />
      {showStatus && (
        <span
          className={`absolute bottom-0 right-1 ${
            isActive ? "bg-success" : "bg-secondary"
          } w-2 h-2 rounded-50 border border-white`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
