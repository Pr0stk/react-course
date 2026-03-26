import React from "react";
import "../styles/Header.css";

export default function Header() {

  return (
    <header className="header">
      <div className="header__logo">REACT COURSE</div>

      <nav className="header__nav">
        <a href="#">Home</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}