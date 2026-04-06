import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "../index.css";
export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex flex-col">
      <Header />
      <main className="max-w-[770px] mx-auto px-8 w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
