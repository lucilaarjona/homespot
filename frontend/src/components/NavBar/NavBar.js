import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'
import { UserContext } from '../../context/UserContext'
import { NavbarWrapper } from './NavBarStyled'

const NavBar = ({ open }) => {

  const { logged, user } = useContext(UserContext);
  const { setLogged, setErrorLogIn, setProductId } = useContext(ProductContext);
  const navigate = useNavigate();
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
              <span className="box">
              <div className="nameContainer">
                <div className="initial">
                  {/* {user.name.trim().toUpperCase()[0]} */}
                  {/* {user.lastName.trim().toUpperCase()[0]} */}
                </div>
              </div>
              <div className="name">
                <div>Hola! <b/>
                   {/* {user.name.split(" ")[0]} */}
                </div>
              </div>
              </span>
            </div>

            <div id="background">
              <div>
                <Link onClick={() => {
              navigate("/"); 
              setLogged(false);
              setErrorLogIn(false);
              setProductId("")
              }} to="/"  style={{ textDecoration: "none" }}><p id="linkTwo">Cerrar Sesión</p></Link>
              </div>
            </div>
          </>

        }

      </NavbarWrapper>

    </>


  )
}

export default NavBar