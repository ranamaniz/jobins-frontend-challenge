import BoxIcon from "../../assets/icons/box.svg?react";
import CartIcon from "../../assets/icons/cart.svg?react";
import CirclePlusIcon from "../../assets/icons/circle-plus.svg?react";
import HamburgerIcon from "../../assets/icons/hamburger-menu.svg?react";
import HomeIcon from "../../assets/icons/home.svg?react";
import Logo from "../../assets/icons/logo.svg?react";
import StarIcon from "../../assets/icons/star.svg?react";

import IconButton from "../ui/button/IconButton";
import SidebarNavLink from "./SidebarNavLink";

const Sidebar = ({ onSidebarToggle, isSidebarOpen }) => {
  return (
    <section
      className={`bg-white p-6 h-screen ${
        isSidebarOpen ? "w-64" : "w-24"
      } transition-transform   duration-200    ease-in-out  `}
    >
      <section
        className={`flex ${
          !isSidebarOpen ? "justify-center" : "justify-between"
        } mb-6 relative`}
      >
        <section className={`flex items-center gap-1`}>
          <Logo className="fill-white" />
          {isSidebarOpen && (
            <h1 className="font-bold text-[22px] px-2">JoBins</h1>
          )}
        </section>
        <IconButton
          aria-label="Toggle Sidebar"
          aria-expanded={isSidebarOpen}
          Icon={HamburgerIcon}
          onClick={onSidebarToggle}
          className={`transition-transform duration-200 ease-in-out ${
            !isSidebarOpen ? "absolute -right-6 rotate-180 " : ""
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
