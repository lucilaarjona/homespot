import { React, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RegisterStyled } from "./Styles";
import { Formik } from "formik";
import * as Yup from "yup";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ProductContext } from "../../context/ProductContext";
import axiosHelper from "../../helper/axiosHelper";
import swal from "sweetalert";
import { UserContext } from "../../context/UserContext";


export const Register = () => {

  const { setErrorLogIn } = useContext(ProductContext);
  const navigate = useNavigate();
  const {setUser, user} = useContext(UserContext)
  const validation = Yup.object({
    name: Yup.string().required("Este campo es requerido"),
    surname: Yup.string().required("Este campo es requerido"),
    email: Yup.string()
      .email("Ingresa un email valido")
      .required("Este campo es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Este campo es requerido"),
    confirmPassword: Yup.string()
      .required("Este campo es requerido")
      .test(
        "match",
        "Las contraseñas no coinciden",
        function (confirmPassword) {
          return confirmPassword === this.parent.password;
        }
      ),
  });
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  useEffect(() => {
    document.title = `Crear cuenta`;
  });

  const saveUser = (values) => {
  axiosHelper
      .post(
        "/auth/newUser",
        {
          name: values.name,
          lastname: values.surname,
          username: values.email,
          email: values.email,
          password: values.password,
          city: "",
          roles: ["USER"],
        },
        {
          headers: {
            "Content-type": "application/json",          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          navigate("/logIn"); swal("El registro se ha realizado de manera exitosa", {
            icon: "success",
            buttons: false,
            timer: 3000,
          });
      } else if (res.status === 400) {
          console.log("respuesta1 ", res.data.data);
      }
      })
      .catch(error => swal("Intente mas tarde", {
        buttons: "OK",
        timer: 3000,
      }) )
  };

  console.log(user)

  return (
    <RegisterStyled>
      <section>
        <div className="title">Crear Cuenta</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            saveUser(values);
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className="userName">
                <div className="label">
                  <div>Nombre</div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <DriveFileRenameOutlineIcon className="iconsName" />
                    <input
                      placeholder=""
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>
                </div>
                <div className="label">
                  <div>Apellido</div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <DriveFileRenameOutlineIcon className="iconsName" />
                    <input
                      placeholder=""
                      name="surname"
                      type="text"
                      value={values.surname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.surname && (
                      <span className="error">{errors.surname}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="label">
                <div>Email</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <AlternateEmailIcon className="icons" />
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
                </div>
              </div>
              <div className="label">
                <div>Contraseña</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <VisibilityOffIcon className="icons" />
                  <input
                    placeholder=""
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>
              </div>
              <div className="label">
                <div>Confirme su contraseña</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <VisibilityOffIcon className="icons" />
                  <input
                    placeholder=""
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirmPassword && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}
                </div>
              </div>
              <button
                onClick={() => {
                  setErrorLogIn(false);
                }}
                type="submit"
              >
                {" "}
                Crear Cuenta{" "}
              </button>
              <div className="logIn">
                <span>¿Ya tienes una cuenta? </span>
                <Link to="/logIn" className="buttonLogIn">
                  Iniciar sesion
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </RegisterStyled>
  );
};

export default Register;
