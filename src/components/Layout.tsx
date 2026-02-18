import Header from "./Header";
import { Outlet } from "react-router-dom";
import "../index.css";
export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Header /> {/* full width, constrains content inside */}
      <main className="max-w-3xl mx-auto px-8">
        <Outlet />
      </main>
    </div>
  );
}
