import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "../index.css";
export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white font-sans flex flex-col transition-colors duration-200">
      <Header />
      <main className="max-w-[770px] mx-auto px-8 w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
