import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { Menu, X } from "lucide-react";

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
              ? "text-white text-base"
              : "text-gray-400 text-base hover:text-white transition-colors"
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

  return (
    <>
      <nav className="relative w-full flex items-center justify-between">
        {/* Desktop links */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Mobile hamburger — right side */}
        <button
          className="md:hidden text-white z-[60] relative ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-[#020611] z-[100] flex flex-col px-10 pt-32 transition-opacity duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* X button inside overlay, top right */}
        <button
          className="absolute top-6 right-6 text-white"
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
                    isActive ? "text-white" : "text-gray-500 hover:text-white"
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
