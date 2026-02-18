import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <div>
              Home
              <div>
                <h1 className="text-5xl font-semibold tracking-tight">
                  HI KEN HERE.
                </h1>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Route>
    </Routes>
  );
}
