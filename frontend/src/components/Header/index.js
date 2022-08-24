import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderStyled, Logo } from "./HeaderStyled";
import MenuButton from "../MenuButton/MenuButton";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const viewButtons = {
    "/register": (
      <button className="buttonLogIn" onClick={() => navigate("/logIn")}>
        Iniciar sesión
      </button>
    ),
    "/logIn": (
      <button onClick={() => navigate("/register")}> Crear cuenta</button>
    ),
    "/": (
      <div className="containerButton">
        <button onClick={() => navigate("/register")}> Crear cuenta</button>
        <button className="buttonLogIn" onClick={() => navigate("/logIn")}>
          Iniciar sesión
        </button>
      </div>
    ),
    default: null,
  };

  return (
    <>
      {" "}
      <HeaderStyled>
        <Link to="/">
          <Logo>
            <div className="initialContainer">
              <div className="logo2">HS</div>
            </div>
            <div className="slogan">Feels like home</div>
          </Logo>
        </Link>
        {viewButtons[pathname || "default"]}
      </HeaderStyled>
      <NavBar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
      <Outlet />
    </>
  );
};

export default Header;
