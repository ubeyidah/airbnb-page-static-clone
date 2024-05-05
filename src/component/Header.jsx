import React from "react";
import logo from "../../public/assets/logo.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src={logo} />
      </div>
    </header>
  );
}
