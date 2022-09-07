import React, { useState, useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderStyled, Logo } from "./HeaderStyled";
import MenuButton from "../MenuButton/MenuButton";
import NavBar from "../NavBar/NavBar";
import { CategoryContext } from "../../context/CategoryContext";
import { UserContext } from "../../context/UserContext";
import logo from "../../assets/homespot_logo.png"
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCategorieSelected } = useContext(CategoryContext);
  const { logged } = useContext(UserContext);
  const { user } = useContext(UserContext);
  // const firstInitial = user.first_name[0]
  // const lastName = user.last_name[0]
  // const initialFullName = firstInitial + lastName
  // console.log(firstInitial);

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
                {/* <div className="logo2">HS</div> */}
                <img src={logo}/>
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
                {/* <div className="logo2">HS</div> */}
                <img src={logo}/>
              </div>
              <div className="slogan">Feels like home</div>
            </Logo>
          </Link>
          <button onClick={() => navigate("/register")}> Crear cuenta</button>
        </HeaderStyled>
      );
    } else if (logged) {
      return user ? (
        <HeaderStyled>
          <Link to="/">
            <Logo>
              <div className="initialContainer">
                {/* <div className="logo2">HS</div> */}
                <img src={logo}/>
              </div>
            </Logo>
          </Link>
          <div className="slogan">Feels like home</div>
          <div className="containerButton">
            <div className="nameContainer">
              <div className="initial">
                {user.first_name[0]}
                {user.last_name[0]}
              </div>
            </div>
            <div className="name">
              <div>Hola! {user.first_name.split(" ")[0]}</div>
            </div>
            <button onClick={() => navigate("/")}>Cerrar sesion</button>
            
          </div>
        </HeaderStyled>
      ) : null;
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
                {/* <div className="logo2">HS</div> */}
               <img src={logo}/>
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
