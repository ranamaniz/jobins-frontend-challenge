import { NavLink } from "react-router-dom";

const SidebarNavLink = ({ to, Icon, title, isSidebarOpen }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return `flex gap-2 items-center mb-2 hover:bg-[#F3F4F8] 
          hover:text-[#23272E] hover:font-semibold rounded-md  text-secondary text-sm px-4 py-2 
           ${isActive ? "bg-[#F3F4F8] " : ""}`;
        }}
      >
        {({ isActive }) => {
          return (
            <>
              <Icon className="h-5 w-5" />
              {isSidebarOpen && (
                <span
                  className={`${isActive ? "text-primary font-semibold " : ""}`}
                >
                  {title}
                </span>
              )}
            </>
          );
        }}
      </NavLink>
    </li>
  );
};

export default SidebarNavLink;
