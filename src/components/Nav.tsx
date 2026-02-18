import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Menu, X } from "lucide-react";
const NavLinks = () => {
  return (
    <div className="flex gap-6">
      <NavLink className="text-black no-underline" to="/about">
        About
      </NavLink>
      <NavLink className="text-black no-underline" to="/projects">
        Project
      </NavLink>
      <NavLink className="text-black no-underline" to="/contact">
        Contact
      </NavLink>
    </div>
  );
};
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-1/3 flex justify-end">
        <div className="hidden md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>

          {isOpen && (
            <div className="absolute right-4 mt-2">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Nav;
