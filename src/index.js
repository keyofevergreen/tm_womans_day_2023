import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamsPage from "./pages/TeamsPage";
import RebusPage from "./pages/RebusPage";
import GiftPage from "./pages/GiftPage";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/teams", element: <TeamsPage /> },
  { path: "/rebus", element: <RebusPage /> },
  { path: "/gift", element: <GiftPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
