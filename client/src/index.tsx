import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./AppLayout";
import * as serviceWorker from "./serviceWorker";
import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";
import Children from "./pages/Children";
import Sex from "./pages/Sex";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/children",
        element: <Children />,
      },
      {
        path: "/sex",
        element: <Sex />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
