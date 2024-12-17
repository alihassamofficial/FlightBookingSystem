import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FlightProvider } from "./context/FlightContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FlightProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FlightProvider>
);
