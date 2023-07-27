import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="realestatedom.jp.auth0.com"
     clientId="ncOqtJhDkJSID0Fj8iTUqZXLnorufH4T"
     authorizationParams={{
      redirect_uri: "https://real-estate-app-9j2l.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
