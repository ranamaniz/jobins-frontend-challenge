import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import OrderManagement from "./pages/OrderManagement.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      { path: "order-management", element: <OrderManagement /> },
      { path: "brand", element: <PlaceholderPage /> },
      { path: "add-products", element: <PlaceholderPage /> },
      { path: "product-list", element: <PlaceholderPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
