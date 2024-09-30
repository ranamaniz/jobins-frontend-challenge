import { Suspense, useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import SuspenseFallback from "../components/SuspenseFallback/SuspenseFallback";
import usePageTitle from "../hooks/usePageTitle";
import useWindowSize from "../hooks/useWindowSize";

const collpaseBreakpoint = 1250;

const MainLayout = () => {
  const { width: windowWidth } = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    windowWidth > collpaseBreakpoint || false
  );

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useLayoutEffect(() => {
    const hasCrossedBreakpoint = windowWidth > collpaseBreakpoint;
    setIsSidebarOpen((prevState) => {
      if (prevState !== hasCrossedBreakpoint) {
        return windowWidth > collpaseBreakpoint;
      }
      return prevState;
    });
  }, [windowWidth]);

  const gridCols = isSidebarOpen
    ? "grid-cols-[260px_1fr]"
    : "grid-cols-[64px_1fr] sm:grid-cols-[96px_1fr]";

  usePageTitle();

  return (
    <section className={`h-screen grid ${gridCols} grid-rows-[62px_1fr]`}>
      <Sidebar
        onSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <Header />
      <Suspense fallback={<SuspenseFallback />}>
        <main className="col-[2/3] row-[2/3] p-6 pt-0 overflow-auto grid grid-cols-1 2xl:justify-items-center">
          <section className=" 2xl:min-w-[1128px]">
            <Outlet />
          </section>
        </main>
      </Suspense>
    </section>
  );
};

export default MainLayout;
