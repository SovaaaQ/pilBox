import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import Medication from "./pages/medication";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/medication" element={<Medication />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
