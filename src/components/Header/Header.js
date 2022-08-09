import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Component logo opc 3.png";
import { HeaderStyled } from "./HeaderStyled";
import MenuButton from "../MenuButton/MenuButton";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const buttonHeader = () => {
    if (pathname === "/register") {
      return (
        <HeaderStyled>
          <Link to="/">
            <img src={logo} alt={"logo"} />
          </Link>
          <button className="buttonLogIn" onClick={() => navigate("/logIn")}>
            Iniciar sesión
          </button>
        </HeaderStyled>
      );
    } else if (pathname === "/logIn") {
      return (
        <HeaderStyled>
          <Link to="/">
            <img src={logo} alt={"logo"} />
          </Link>
          <button onClick={() => navigate("/register")}> Crear cuenta</button>
        </HeaderStyled>
      );
    } else {
      return (
        <HeaderStyled>
          <Link to="/">
            <img src={logo} alt={"logo"} />
          </Link>
          <div className="containerButton">
            <button onClick={() => navigate("/register")}> Crear cuenta</button>
            <button className="buttonLogIn" onClick={() => navigate("/logIn")}>
              Iniciar sesión
            </button>
          </div>
        </HeaderStyled>
      );
    }
  };

  return (
    <>
      {buttonHeader()}
      <NavBar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
      <Outlet />
    </>
  );
};

export default Header;