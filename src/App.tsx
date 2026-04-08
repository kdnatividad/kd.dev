import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
