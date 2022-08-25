import React, { useState, useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderStyled, Logo } from "./HeaderStyled";
import MenuButton from "../MenuButton/MenuButton";
import NavBar from "../NavBar/NavBar";
import { CategoryContext } from "../../context/CategoryContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCategorieSelected } = useContext(CategoryContext);

  const pathname = location.pathname;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const buttonHeader = () => {
    if (pathname === "/register") {
      return (
        <HeaderStyled>
                    <Link
              onClick={() => {
                setCategorieSelected("");
              }}
              to="/"
            > 
            <Logo>
              <div className="initialContainer">
                <div className="logo2">HS</div>
              </div>
              <div className="slogan">Feels like home</div>
            </Logo>
          </Link>
          <button className="buttonLogIn" onClick={() => navigate("/logIn")}>
            Iniciar sesión
          </button>
        </HeaderStyled>
      );
    } else if (pathname === "/logIn") {
      return (
        <HeaderStyled>
                    <Link
              onClick={() => {
                setCategorieSelected("");
              }}
              to="/"
            > 
            <Logo>
              <div className="initialContainer">
                <div className="logo2">HS</div>
              </div>
              <div className="slogan">Feels like home</div>
            </Logo>
          </Link>
          <button onClick={() => navigate("/register")}> Crear cuenta</button>
        </HeaderStyled>
      );
    }  else if(pathname === "/home"){
      return null;
    } else {
      return (
        <HeaderStyled>
          <Link
              onClick={() => {
                setCategorieSelected("");
              }}
              to="/"
            > 
            <Logo>
              <div className="initialContainer">
                <div className="logo2">HS</div>
              </div>
            </Logo>
          </Link>
          <div className="slogan">Feels like home</div>
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
