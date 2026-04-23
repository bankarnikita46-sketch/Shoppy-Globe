// App.jsx - Configures the router using createBrowserRouter
// and lazy-loads all route components for performance optimization.
import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";

// Lazy-loaded components (code splitting)
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

// Layout that wraps every route - shows Header and renders nested routes
function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<p className="loading">Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

// Dynamic router with route params (e.g. /product/:id)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
