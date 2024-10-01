import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ items, onChange, defaultActiveKey, className = "" }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  console.log("defaultActiveKey Tabs", defaultActiveKey);

  const handleClick = (e, key, value) => {
    setActiveKey((prevKey) => {
      if (prevKey !== key) {
        return key;
      }
      return prevKey;
    });

    onChange(key, value);
  };

  return (
    <div className={`flex ${className}`}>
      {items.map((item) => {
        const isActive = activeKey === item.key;
        return (
          <button
            key={item.key}
            onClick={(e) => handleClick(e, item.key, item.value)}
            className={`text-[15px] box-border px-6 py-4   text-secondary transition-all ease-in-out  duration-300  ${
              isActive
                ? "border-b-2 border-b-action text-action"
                : "border-b-2 border-b-transparent"
            } `}
            aria-pressed={isActive}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultActiveKey: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Tabs;
