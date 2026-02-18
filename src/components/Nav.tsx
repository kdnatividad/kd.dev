import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { Menu, X } from "lucide-react";
const NavLinks = () => {
  return (
    <div className="flex gap-6">
      <NavLink className="font-sans text-base" to="/">
        Home
      </NavLink>
      <NavLink className="no-underline" to="/about">
        About
      </NavLink>
      <NavLink className="no-underline" to="/projects">
        Project
      </NavLink>
      <NavLink className="no-underline" to="/contact">
        Contact
      </NavLink>
    </div>
  );
};
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => setIsOpen(!isOpen);

  return (
    <nav className="relative w-full flex items-center justify-between">
      {/* Logo or name */}

      {/* Desktop links */}
      <div className="hidden md:flex gap-6">
        <NavLinks />
      </div>

      {/* Mobile toggle */}
      <div className="md:hidden">
        <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>

        {isOpen && (
          <div className="absolute right-0 top-8 bg-gray-900 p-4 rounded">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};
export default Nav;
