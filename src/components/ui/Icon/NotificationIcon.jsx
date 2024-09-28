import Icon from "./Icon";

const NotificationIcon = ({ size = "md", count, ...props }) => {
  return (
    <button {...props} className="relative">
      <Icon src="/icons/bell.svg" size={size} />
      <span className="absolute -right-1 -top-1 rounded-50 h-4 w-4 bg-danger text-xs text-white">
        {count}
      </span>
    </button>
  );
};

export default NotificationIcon;
