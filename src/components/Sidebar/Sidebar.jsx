import BoxIcon from "../../assets/icons/box.svg?react";
import CartIcon from "../../assets/icons/cart.svg?react";
import CirclePlusIcon from "../../assets/icons/circle-plus.svg?react";
import HamburgerIcon from "../../assets/icons/hamburger-menu.svg?react";
import HomeIcon from "../../assets/icons/home.svg?react";
import StarIcon from "../../assets/icons/star.svg?react";

import IconButton from "../ui/Button/IconButton";
import Icon from "../ui/Icon/Icon";
import SidebarNavLink from "./SidebarNavLink";

const Sidebar = ({ onSidebarToggle, isSidebarOpen }) => {
  return (
    <section
      className={`bg-white px-2 py-6 sm:p-6  ${
        isSidebarOpen ? "w-64" : "w-16  sm:w-24"
      } transition-transform duration-200 ease-in-out col-[1/2] row-[1/3]`}
    >
      <section
        className={`flex ${
          !isSidebarOpen ? "justify-center" : "justify-between"
        } mb-6 items-center relative`}
      >
        <section className={`flex items-center gap-1`}>
          <Icon src="/icons/jobins-logo.svg" width={28} height={24} />
          {isSidebarOpen && (
            <h1 className="font-bold text-[22px] px-2">JoBins</h1>
          )}
        </section>
        <IconButton
          aria-label="Toggle Sidebar"
          aria-expanded={isSidebarOpen}
          Icon={HamburgerIcon}
          onClick={onSidebarToggle}
          className={` bg-white rounded-md pr-1 py-1 transition-transform duration-200 ease-in-out ${
            !isSidebarOpen ? "absolute -right-5 sm:-right-10 rotate-180 " : ""
          } `}
        />
      </section>

      <aside>
        <nav
          aria-label="Main menu"
          className={`${isSidebarOpen ? "mb-6" : ""}`}
        >
          {isSidebarOpen && (
            <h2 className="text-xs text-secondary px-4 mb-4">Main Menu</h2>
          )}
          <ul>
            <SidebarNavLink
              isSidebarOpen={isSidebarOpen}
              to=""
              Icon={HomeIcon}
              title="Dashboard"
            />
            <SidebarNavLink
              isSidebarOpen={isSidebarOpen}
              to="order-management"
              Icon={CartIcon}
              title="Order Management"
            />
            <SidebarNavLink
              isSidebarOpen={isSidebarOpen}
              to="brand"
              Icon={StarIcon}
              title="Brand"
            />
          </ul>
        </nav>

        <nav aria-label="Products" className="mb-6">
          {isSidebarOpen && (
            <h2 className="text-xs text-secondary px-4 mb-4">Products</h2>
          )}
          <ul>
            <SidebarNavLink
              isSidebarOpen={isSidebarOpen}
              to="add-products"
              Icon={CirclePlusIcon}
              title="Add Products"
            />
            <SidebarNavLink
              isSidebarOpen={isSidebarOpen}
              to="product-list"
              Icon={BoxIcon}
              title="Product List"
            />
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Sidebar;
