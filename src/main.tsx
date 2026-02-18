import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/projects" element={<div>Projects Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
    </Routes>
  </BrowserRouter>,
);
