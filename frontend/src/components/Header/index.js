import React, { useState, useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderStyled, Logo } from "./HeaderStyled";
import MenuButton from "../MenuButton/MenuButton";
import NavBar from "../NavBar/NavBar";
import { CategoryContext } from "../../context/CategoryContext";
import { UserContext } from "../../context/UserContext";
import logo from "../../assets/homespot_logo.png"
import { ProductContext } from "../../context/ProductContext";
const Header = () => {
  const {setErrorLogIn} = useContext(ProductContext)
  const {setProductId} = useContext(ProductContext)
  const navigate = useNavigate();
  const location = useLocation();
  const { setCategorieSelected } = useContext(CategoryContext);
  const { setLogged } = useContext(UserContext);
  const { user } = useContext(UserContext);
  // console.log(user);
  // const firstInitial = user.first_name[0]
  // const lastName = user.last_name[0]
  // const initialFullName = firstInitial + lastName
  // console.log(firstInitial);

  const pathname = location.pathname;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const dataUser = JSON.parse(localStorage.getItem("user"));
  console.log(dataUser);

  const buttonHeader = () => {
    if (pathname === "/register") {
      return (
        <HeaderStyled>
          <Link
            onClick={() => {
              setErrorLogIn(false);
              setCategorieSelected("");
            }}
            to="/"
          >
            <Logo>
              <div className="initialContainer">
                {/* <div className="logo2">HS</div> */}
                <img src={logo} alt="logo"/>
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
              setErrorLogIn(false);
              setCategorieSelected("");
            }}
            to="/"
          >
            <Logo>
              <div className="initialContainer">
                {/* <div className="logo2">HS</div> */}
                <img src={logo} alt="logo"/>
              </div>
              <div className="slogan">Feels like home</div>
            </Logo>
          </Link>
          <button onClick={() => navigate("/register")}> Crear cuenta</button>
        </HeaderStyled>
      );
     } 
    else if (dataUser?.rol === "ADMIN") {
      return user ? (
        <HeaderStyled>
          <Link             onClick={() => {
              setErrorLogIn(false);
            }} to="/">
            <Logo>
              <div className="initialContainer">
                {/* <div className="logo2">HS</div> */}
                <img src={logo} alt="logo" />
              </div>
            </Logo>
          </Link>
          <div className="slogan">Feels like home</div>
          <div className="containerButton">
            <div className="nameContainer">
              <div className="initial">
                {dataUser?.name.trim()[0].toUpperCase()}
                {dataUser?.lastName.trim()[0].toUpperCase()}
              </div>
            </div>
            <div className="name">
              <div>Hola! {dataUser?.name.trim().split(" ")[0]}</div>
            </div>
            <button onClick={() => {
              navigate("/"); 
              setLogged(false);
              window.localStorage.clear();
              setErrorLogIn(false);
              setProductId("")
              }
              }
              >
              Cerrar sesion
              </button>
              <button onClick={() => navigate("/administrator")}> Crear un producto</button>
            
          </div>
        </HeaderStyled>
      ) : null;
    }
    else if (dataUser) {
      return user ? (
        <HeaderStyled>
          <Link             onClick={() => {
              setErrorLogIn(false);
            }} to="/">
            <Logo>
              <div className="initialContainer">
                {/* <div className="logo2">HS</div> */}
                <img src={logo} alt="logo" />
              </div>
            </Logo>
          </Link>
          <div className="slogan">Feels like home</div>
          <div className="containerButton">
            <div className="nameContainer">
              <div className="initial">
                {dataUser?.name.trim()[0].toUpperCase()}
                {dataUser?.lastName.trim()[0].toUpperCase()}
              </div>
            </div>
            <div className="name">
              <div>Hola! {dataUser?.name.trim().split(" ")[0]}</div>
            </div>
            <button onClick={() => {
              navigate("/"); 
              setLogged(false);
              window.localStorage.clear();
              setErrorLogIn(false);
              setProductId("")
              }
              }
              >
              Cerrar sesion
              </button>
            
          </div>
        </HeaderStyled>
      ) : null;
    } 
    else {
      return (
        <HeaderStyled>
          <Link
            onClick={() => {
              setCategorieSelected("");
              setErrorLogIn(false);
            }}
            to="/"
          >
            <Logo>
              <div className="initialContainer">
                {/* <div className="logo2">HS</div> */}
               <img src={logo} alt="logo"/>
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
