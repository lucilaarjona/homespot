import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarWrapper } from './NavBarStyled'

const NavBar = ({open}) => {
  return (
    <>
   
    <NavbarWrapper open={open}>
   
    <div id="headerMenu"><p id="menu">MENÚ</p></div>
    <div id="background">
    <Link to="/register" style={{textDecoration:"none"}}><p id="link">Crear cuenta</p></Link>
    <Link to="/logIn" style={{textDecoration:"none"}}><p id="linkTwo">Iniciar Sesión</p></Link>
    </div>
 
  </NavbarWrapper>
  
  </>

  
  )
}

export default NavBar