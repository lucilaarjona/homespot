import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'
import { UserContext } from '../../context/UserContext'
import { NavbarWrapper } from './NavBarStyled'

const NavBar = ({ open }) => {

  const { logged ,setLogged} = useContext(UserContext);
  const {  setErrorLogIn, setProductId } = useContext(ProductContext);
  const navigate = useNavigate();
  const dataUser = JSON.parse(localStorage.getItem("user"));

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
                  {dataUser?.name.trim().toUpperCase()[0]}
                  {dataUser?.lastName.trim().toUpperCase()[0]}
                </div>
              </div>
              <div className="name">
                <div>Hola! <b/>
                   {dataUser?.name}
                </div>
              </div>
              </span>
            </div>

            <div id="background">
              <button   onClick={() => {
              navigate("/"); 
              setLogged(false);
              setErrorLogIn(false);
              setProductId("")
              window.localStorage.clear();
              }} >
               <p id="linkTwo">Cerrar Sesión</p>
              </button>
            </div>
          </>

        }

      </NavbarWrapper>

    </>


  )
}

export default NavBar