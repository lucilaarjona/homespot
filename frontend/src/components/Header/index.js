import React, { useState, useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderStyled, Logo } from "./HeaderStyled";
import MenuButton from "../MenuButton/MenuButton";
import NavBar from "../NavBar/NavBar";
import { CategoryContext } from "../../context/CategoryContext";
import { UserContext } from "../../context/UserContext";
import logo from "../../assets/homespot_logo.png"
import { ProductContext } from "../../context/ProductContext";
import { CityContext } from "../../context/CityContext";
const Header = () => {
  const {setErrorLogIn} = useContext(ProductContext)
  const {setProductId} = useContext(ProductContext)
  const navigate = useNavigate();
  const location = useLocation();
  const { setCategorieSelected } = useContext(CategoryContext);
  // const { logged } = useContext(UserContext);
  const { setLogged } = useContext(UserContext);
  const { user } = useContext(UserContext);
  

  const pathname = location.pathname;
  const { setCitySelected } = useContext(CityContext);
  
  const [open, setOpen] = useState(false);
  

  const handleClick = () => {
    setOpen(!open);
  };

  const dataUser = JSON.parse(localStorage.getItem("user"));

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
              setCategorieSelected("");
              setCitySelected ("");
            }} to="/">
            <Logo>
              <div 
              // data-bs-toggle= "collapse"
              // data-bs-target= {categorieSelected?"#collapseOne":null} 
              className="initialContainer">
                {/* <div className="logo2">HS</div> */}
                <img src={logo} alt="logo" />
              </div>
            </Logo>
          </Link>
          <div className="slogan">Feels like home</div>
          <div className="containerButton">
            <div className="nameContainerA">
              <div className="initialA">
                {dataUser?.name.trim()[0].toUpperCase()}
                {dataUser?.lastName.trim()[0].toUpperCase()}
              </div>
            </div>
            <div className="nameA">
              <div>Hola! {dataUser?.name.trim().split(" ")[0]}</div>
            </div>
            <button className="admibtn" onClick={() => {
              navigate("/"); 
              setLogged(false);
              window.localStorage.clear();
              setErrorLogIn(false);
              setProductId("")
              setCategorieSelected("");
              }
              }
              >
              Cerrar sesion
              </button>
              <button  className="admibtn" onClick={() => navigate("/newProduct")}> Crear un producto</button>
            
          </div>
        </HeaderStyled>
      ) : null;
    }
    else if (dataUser) {
      return user ? (
        <HeaderStyled>
          <Link             onClick={() => {
              setErrorLogIn(false);
              setCategorieSelected("");
              setCitySelected ("");
              
            }} to="/">
            <Logo>
              <div 
              // data-bs-toggle= "collapse"
              // data-bs-target= {categorieSelected?"#collapseOne":null} 
              className="initialContainer">
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
              setCategorieSelected("");
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
              setCitySelected ("");
            }}
            to="/"
           
          >
            <Logo>
              <div
              //  data-bs-toggle= "collapse"
              //  data-bs-target= {categorieSelected?"#collapseOne":null}
                className="initialContainer">
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
