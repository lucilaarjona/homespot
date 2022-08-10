import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Register from "../Register/Register";
import { LogInStyled } from "./Styles";

const LogIn = ({ userInfo }) => {
  const [logIn, setLogIn] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  return (
    <LogInStyled>
      <Header/>
        <section>
        <div className="title">Iniciar Sesion</div>
          <form>
          <div div className="label">
            <div>Email</div>
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setLogIn({ ...LogIn, email: e.target.value })}
            />
          </div>
          <div className="label">
            <div>Password</div>
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setLogIn({ ...LogIn, password: e.target.value })}
            />
          </div>
            <button className="submit" onClick label="submit">
              {" "}
              Ingresar{" "}
            </button>
            <div className="register">
            ¿Aún no Tienes Cuenta?
              <span><a onClick={() => navigate("/register")}> Registrar</a></span>
            </div>
          </form>
        </section>
      <Footer/>
    </LogInStyled>
  );
};

export default LogIn;
