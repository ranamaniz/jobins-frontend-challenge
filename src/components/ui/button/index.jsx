const Button = ({ children, className = "", isActive = false, ...props }) => {
  return (
    <button
      className={`${
        isActive ? "bg-action text-white" : "bg-secondary text-secondary"
      } py-1 px-2 w-7 h-7 rounded hover:bg-action hover:text-white  flex justify-center items-center  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
