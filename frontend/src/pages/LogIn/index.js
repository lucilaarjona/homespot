import React, { useState, useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";
import { LogInStyled } from "./Styles";
import ErrorIcon from '@mui/icons-material/Error';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const LogIn = ({ user, setIsLogged }) => {
  const [logIn, setLogIn] = useState({email: "", password:""})
  const navigate = useNavigate()
  const onSubmitHandler = (e) =>{
      e.preventDefault();
      if(
        logIn.name === user.name && 
        logIn.password === user.password){
        setIsLogged(true);
        navigate("/home")
      } else{
        
      }
  }

  useEffect(()=>{
    document.title = `Iniciar Sesion`;
  })
  return (
    

    <LogInStyled>
   
        <section>
        <div className="title">Iniciar Sesion</div>
        <div className="error">
        <ErrorIcon/>
        Por favor vuelva a intentarlo, sus credenciales son invalidas
        </div>
          <form onSubmit={onSubmitHandler}>
          <div div className="label">
            <div>Email</div>
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setLogIn({ ...LogIn, email: e.target.value })}
            />
            <AlternateEmailIcon className="icons"/>
          </div>
          <div className="label">
            <div>Password</div>
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setLogIn({ ...LogIn, password: e.target.value })}
            />
            <VisibilityOffIcon className="icons"/>
          </div>
            <button className="submit">
              Ingresar
            </button>
            <div className="register">
            ¿Aún no tienes cuenta?
            <span><Link to="/register"> Registrar </Link></span>
            </div>
          </form>
        </section>
    
    </LogInStyled>
    
  );
};

export default LogIn;
