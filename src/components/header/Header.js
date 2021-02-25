import React from "react";

import Logo from "../AppLogo/Logo";
import NavBar from "../Navbar/NavBar";

const Header = () => {
  return (
    <header className="app-header">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
