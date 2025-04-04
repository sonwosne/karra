import React from "react";
import ReactDOM from "react-dom/client";
import DiliApp from "./App"; // DiliApp ni chaqiramiz

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DiliApp /> {/* Shu yerda ishlatamiz */}
  </React.StrictMode>
);
