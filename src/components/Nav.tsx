import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/projects", label: "project" },
  { to: "/contact", label: "contact" },
];

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="flex gap-8 text-gray-400">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onClick}
          className={({ isActive }) =>
            isActive
              ? "text-gray-900 dark:text-white text-base"
              : "text-gray-500 dark:text-gray-400 text-base hover:text-gray-900 dark:hover:text-white transition-colors"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
      <nav className="relative w-full flex items-center justify-between">
        {/* Desktop links */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-900 dark:text-white z-[60] relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-white dark:bg-[#020611] z-[100] flex flex-col px-10 pt-32 transition-opacity duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* X button inside overlay, top right */}
        <button
          className="absolute top-6 right-6 text-gray-900 dark:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <ul className="flex flex-col gap-6">
          {links.map((link, i) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-4xl font-bold uppercase tracking-tight transition-colors ${
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  }`
                }
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
