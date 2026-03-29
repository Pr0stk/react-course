import React, { useContext } from "react";
import "../styles/Header.css";
import MyButton from "./UI/Button/MyButton";
import { AuthContext } from "../context";

export default function Header() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <header className="header">
      <div className="header__logo">REACT COURSE</div>

      <nav className="header__nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>

      <div>
        <MyButton onClick={logout}>
          выйти
        </MyButton>
      </div>
    </header>
  );
}