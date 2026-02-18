import Header from "./Header";
import { Outlet } from "react-router-dom";
import "../index.css";
export default function Layout() {
  return (
    <div className="min-h-screen text-white font-sans max-w-3xl mx-auto">
      <Header />

      <main className="px-10">
        <Outlet />
      </main>
    </div>
  );
}
