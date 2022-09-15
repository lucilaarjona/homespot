import React, { useEffect, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogInStyled } from "./Styles";
import ErrorIcon from "@mui/icons-material/Error";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContext";
import axiosHelper from "../../helper/axiosHelper";
import swal from "sweetalert";
import { Formik } from "formik";
import * as Yup from "yup";

export const LogIn = () => {
  const { productId } = useContext(ProductContext);
  const { errorLogIn } = useContext(ProductContext);
  //console.log(productId);
  const { setLogged } = useContext(UserContext);

  // console.log(user);

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
          localStorage.setItem('token',token);
          const user = JSON.stringify({name: res.data.name,email:res.data.username, rol: res.data.authorities[0].authority})
          localStorage.setItem('user',user);

          navigate("/");
          swal("Inicio de sesion exitoso", {
            icon: "success",
            buttons: false,
            timer: 500,
          });
        } else if (res.status === 400) {
          console.log("respuesta1 ", res.data.data);
        }
      })
      .catch((error) =>
        swal("Intente mas tarde", {
          buttons: "OK",
          timer: 3000,
        })
      );
  };

  // const [userlog, setUserlog]=useState({})

  const navigate = useNavigate();
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   saveUser(e)
  //   console.log(e.values)
  // if (logIn.password === user.password && logIn.email === user.email ) {
  //   setLogged(true);
  //   if (productId) {
  //     navigate(`/product/${productId}/booking`)
  //   }
  //   else {navigate("/");}
  // } else {
  // }
  // };

  // console.log(logIn);

  // useEffect(()=>{
  //   axiosHelper.post("/auth/login").then((res)=>{
  //     setUserlog(res.data)

  //   })

  // }, [])

  // console.log(userlog);

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
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <VisibilityOffIcon className="icons" />
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
