import React, { useState } from "react";
import { Link, Outlet,  useNavigate } from "react-router-dom";
import { HeaderStyled, Logo } from "./HeaderUserStyled";
import MenuButton from "../MenuButton/MenuButton";
import NavBarUser from "./navBarUser";

const Header = ({ user }) => {
  const navigate = useNavigate();
 



  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const userInitial = `${user.userName.trim()[0]}${user.surname.trim()[0]}`;
  console.log(userInitial);

  const buttonHeader = () => {
    return (
      <HeaderStyled>
        <Link to="/">
          <Logo>
            <div className="initialContainerLogo">
              <div className="logo2">HS</div>
            </div>
          </Logo>
        </Link>
        <div className="slogan">Feels like home</div>
        <div className="container">
          <button onClick={() => navigate("/")}>Cerrar sesion</button>
          <div className="name">
            <div>Hola! {user.userName}</div>
          </div>
          <div className="initialContainer">
            <div className="initial">{userInitial.toUpperCase()}</div>
          </div>
        </div>
      </HeaderStyled>
    );
  };

  return (
    <>
      {buttonHeader()}
      <NavBarUser open={open} />
      <MenuButton open={open} handleClick={handleClick} />
      <Outlet />
    </>
  );
};

export default Header;
