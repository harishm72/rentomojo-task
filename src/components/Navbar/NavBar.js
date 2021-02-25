import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
    </nav>
  );
}

export default NavBar;
