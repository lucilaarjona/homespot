import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "../NavBar/NavBarStyled";

const NavBarUser = ({ open }) => {
  return (
    <>
      <NavbarWrapper open={open}>
        <div id="headerMenu">
          <p id="menu">MENÚ</p>
        </div>
        <div id="background">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p id="link">Cerrar sesión</p>
          </Link>
        </div>
      </NavbarWrapper>
    </>
  );
};

export default NavBarUser;
