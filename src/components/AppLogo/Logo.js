import React from "react";

function Logo() {
  return (
    <div className="app-logo">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
    </div>
  );
}

export default Logo;
