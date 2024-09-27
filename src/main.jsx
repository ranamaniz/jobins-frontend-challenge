import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import OrderManagement from "./pages/OrderManagement.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Dashboard /> },
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
