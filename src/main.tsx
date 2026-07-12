import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./routes/index";
import { AuthProvider } from "./lib/auth-context";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
