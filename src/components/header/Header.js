import React from "react";

import Logo from "../AppLogo/Logo";
import NavBar from "../Navbar/NavBar";

import "./header.css";

const Header = ({ setTheme, isLight }) => {
  return (
    <header className="app-header">
      <Logo />
      <NavBar />
      <label class="switch">
        <input
          type="checkbox"
          checked={isLight}
          onChange={(e) => {
            setTheme(e.target.checked);
          }}
        />
        <span className="slider round"></span>
      </label>
    </header>
  );
};

export default Header;
