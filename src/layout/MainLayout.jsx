import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { useState } from "react";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const gridCols = isSidebarOpen
    ? "grid-cols-[260px_auto]"
    : "grid-cols-[150px_auto]";

  return (
    <main>
      <section className={`grid ${gridCols}`}>
        <Sidebar
          onSidebarToggle={handleSidebarToggle}
          isSidebarOpen={isSidebarOpen}
        />
        <section>
          <Header />
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default MainLayout;
