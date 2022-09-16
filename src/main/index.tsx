import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "@/presentation/components/rotes/route";
import "@/presentation/styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("main") as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </BrowserRouter>
);
