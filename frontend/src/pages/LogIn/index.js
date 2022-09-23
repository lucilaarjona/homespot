import React, { useEffect, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogInStyled } from "./Styles";
import ErrorIcon from "@mui/icons-material/Error";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContext";
import axiosHelper from "../../helper/axiosHelper";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";


export const LogIn = () => {
  const MySwal = withReactContent(Swal)
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    background: "#008F95",
    color:"#ffff",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

 
 

  const [ showPassword, setShowPassword]= useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {productId} = useContext(ProductContext)
  const {errorLogIn} = useContext(ProductContext)

  const { setLogged } = useContext(UserContext);

  const validation = Yup.object({
    email: Yup.string()
      .email("Ingresa un email valido")
      .required("Este campo es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Este campo es requerido"),
  });
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const saveUser = (values) => {
    axiosHelper
      .post(
        "/auth/login",
        {
          username: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          const token = JSON.stringify(res.data.token)
          console.log(res.data);
          localStorage.setItem('token',token);
          const userStorage = JSON.stringify({name: res.data.username,lastName: res.data.name, email:res.data.lastname, rol: res.data.authorities[0].authority})
          localStorage.setItem('user',userStorage);
          productId? navigate(`/product/${productId}/booking`):navigate("/");
        
          Toast.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso.'
          })
        } else if (res.status === 400) {
          console.log("respuesta1 ", res.data.data);
        }
      })
      .catch((error) =>
      MySwal.fire({
        html: <strong>Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde.</strong>,
        icon: 'warning',
       
       
       
      })
      );
  };

  const navigate = useNavigate();
 

 
  useEffect(() => {
    document.title = `Iniciar Sesion`;
  });
  return (
    <LogInStyled>
      <section>
        <div className="title">Iniciar Sesion</div>
        {errorLogIn ? (
          <div className="error">
            <ErrorIcon />
            Inicie sesión para continuar con la reserva
          </div>
        ) : null}
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            saveUser(values);
            setLogged(true)
            
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className="label">
                <div>Email</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    placeholder=""
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  

                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                  <AlternateEmailIcon className="icons" />
                </div>
              </div>
              <div className="label">
                <div>Contraseña</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    placeholder=""
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {showPassword? <VisibilityIcon onClick={()=>{handleClickShowPassword()}} className="icons"/>: <VisibilityOffIcon onClick={()=>{handleClickShowPassword()}} className="icons"/>}
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>
              </div>
              <button type="submit">Ingresar</button>
              <div className="register">
                <span>¿Aun no tienes cuenta? </span>
                <Link to="/register" className="buttonLogIn">
                  Registrar
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </LogInStyled>
  );
};

export default LogIn;
