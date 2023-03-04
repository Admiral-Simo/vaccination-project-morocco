import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./AppLayout";
import * as serviceWorker from "./serviceWorker";
import React from "react";

import { Provider } from "react-redux";
import store from "./redux/app";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";
import Children from "./pages/Children";
import Sex from "./pages/Sex";
import ChildProfile from "./pages/ChildProfile";

let persistor = persistStore(store)

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
      {
        path: "/child_profile",
        element: <ChildProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
