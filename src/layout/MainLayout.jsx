import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Suspense, useState } from "react";
import SuspenseFallback from "../components/SuspenseFallback/SuspenseFallback";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const gridCols = isSidebarOpen
    ? "grid-cols-[260px_auto]"
    : "grid-cols-[96px_auto]";

  return (
    <section className={`grid ${gridCols}`}>
      <Sidebar
        onSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <section className="grid grid-rows-[auto_1fr] h-screen px-6">
        <Header />
        <Suspense fallback={<SuspenseFallback />}>
          <main className="overflow-auto">
            <Outlet />
          </main>
        </Suspense>
      </section>
    </section>
  );
};

export default MainLayout;
