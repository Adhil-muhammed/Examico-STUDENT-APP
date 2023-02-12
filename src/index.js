import { Master } from "master";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import "../src/assests/styles/style.css";
import "../src/assests/styles/mobile.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Master />
  </React.StrictMode>
);

reportWebVitals();
