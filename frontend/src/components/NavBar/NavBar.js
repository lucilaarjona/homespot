import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { NavbarWrapper } from './NavBarStyled'

const NavBar = ({ open }) => {

  const { logged } = useContext(UserContext);
  const { user } = useContext(UserContext);
  return (
    <>

      <NavbarWrapper open={open}>

        {!logged ?
          <>
            <div id="headerMenu"><p id="menu">MENÚ</p></div>
            <div id="background">
              <Link to="/register" style={{ textDecoration: "none" }}><p id="link">Crear cuenta</p></Link>
              <Link to="/logIn" style={{ textDecoration: "none" }}><p id="linkTwo">Iniciar Sesión</p></Link>
            </div>
          </> :
          <>

            <div id="headerMenu">
              <div className="nameContainer">
                <div className="initial">
                  {user.first_name[0]}
                  {user.last_name[0]}
                </div>
              </div>
              <div className="name">
                <div>Hola!
                  {user.first_name.split(" ")[0]}
                </div>
              </div>
            </div>

            <div id="background">
              <div>
                <Link to="/" style={{ textDecoration: "none" }}><p id="linkTwo">Cerrar Sesión</p></Link>
              </div>
            </div>
          </>

        }

      </NavbarWrapper>

    </>


  )
}

export default NavBar