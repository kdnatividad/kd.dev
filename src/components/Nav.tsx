import { NavLink } from "react-router-dom";
import imageToAdd from "./laptop.jpg";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="w-full">
      <NavLink to="/dashboard">Dashboard</NavLink>;
      <h1>Got this shitty ass Link working working</h1>
      <img src={imageToAdd} alt="Logo" />;
    </div>
  );
};
export default Nav;
