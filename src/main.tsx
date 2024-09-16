import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LinkProvider } from "./common/LinkContextAPI";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LinkProvider>
      <App />
    </LinkProvider>
  </React.StrictMode>
);
