import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { RegisterStyled } from "./Styles";

const Register = ({ userRegistry }) => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let value = {
      name,
      email,
      password,
    };
    userRegistry(value);
    e.target.reset();
  };

  return (
    <RegisterStyled>
      <Header />
      <section>
        <div className="title">Crear Cuenta</div>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="userName">
            <div className="label">
              <div>Nombre</div>
              <input
                placeholder="Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="label">
              <div>Nombre</div>
              <input
                placeholder="Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="label">
            <div>Nombre</div>
            <input
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label">
            <div>Nombre</div>
            <input
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label">
            <div>Nombre</div>
            <input
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
         <button input="submit"> Crear Cuenta </button>
          <div className="logIn">
            <span>¿Ya tienes una cuenta? </span>
            <a className="buttonLogIn" onClick={() => navigate("/logIn")}>
              Iniciar sesion{" "}
            </a>
          </div>
        </form>
      </section>
      <Footer />
    </RegisterStyled>
  );
};

export default Register;
