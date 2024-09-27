import React from "react";

const Avatar = ({ isActive = true }) => {
  return (
    <section className=" w-10 h-10 rounded-50 relative bg-purple-800">
      {/* <img src=""/> */}
      <span
        className={`absolute bottom-0 right-1 ${
          isActive ? "bg-success" : "bg-secondary"
        } w-2 h-2 rounded-50 border border-white`}
      ></span>
    </section>
  );
};

export default Avatar;
