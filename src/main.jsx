import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { app, db } from "./firebase";
import ActionContextProvider from "./context/context";

const appHasMounted = !!app;
const dbHasMounted = !!db;
console.log({ appHasMounted, dbHasMounted });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActionContextProvider>
      <App />
    </ActionContextProvider>
  </React.StrictMode>
);
