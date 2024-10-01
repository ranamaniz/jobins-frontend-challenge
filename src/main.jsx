import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const OrderManagement = lazy(() => import("./pages/OrderManagement.jsx"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
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
