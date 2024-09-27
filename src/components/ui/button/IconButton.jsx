const IconButton = ({ Icon, className = "", iconClassName = "", ...props }) => {
  return (
    <button {...props} className={className}>
      <Icon className={iconClassName} />
    </button>
  );
};

export default IconButton;
