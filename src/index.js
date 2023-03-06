import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TeamsPage from "./pages/TeamsPage";
import RebusPage from "./pages/RebusPage";
import GiftPage from "./pages/GiftPage";

const router = createBrowserRouter([
  { path: "/", element: <TeamsPage /> },
  { path: "/rebus", element: <RebusPage /> },
  { path: "/gift", element: <GiftPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
