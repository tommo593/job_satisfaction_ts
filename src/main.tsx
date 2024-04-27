import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonalInfo from "../pages/PersonalInfo.tsx";
import QuestionsPage from "../pages/QuestionsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/info",
    element: <PersonalInfo />,
  },
  {
    path: "/questions",
    element: <QuestionsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-0ev58m6e0qdtk4tk.us.auth0.com"
      clientId="2eOJ187wXtzEAl3fvQCvzPq0Ad45UFFb"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
