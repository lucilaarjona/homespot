import React, {useEffect, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogInStyled } from "./Styles";
import ErrorIcon from "@mui/icons-material/Error";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContext";
// import axiosHelper from "../../helper/axiosHelper";

export const LogIn = () => {

  const [ showPassword, setShowPassword]= useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {productId} = useContext(ProductContext)
  const {errorLogIn} = useContext(ProductContext)
  //console.log(productId);
  const { setLogged } = useContext(UserContext);
  const {user} = useContext(UserContext)
  // console.log(user);
  const [logIn, setlogIn] = useState({
    email: " ",
    password: " ",
  })

  // const [userlog, setUserlog]=useState({})

  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (logIn.password === user.password && logIn.email === user.email ) {
      setLogged(true);
      if (productId) {
        navigate(`/product/${productId}/booking`)
      }
      else {navigate("/");}
    } else {
    }
  };

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
        {errorLogIn ? (<div className="error">
          <ErrorIcon />
          Inicie sesión para continuar con la reserva
        </div>): null}
        <form onSubmit={onSubmitHandler}>
          <div div className="label">
            <div>Email</div>
            <input
              required
              placeholder="Email"
              type="email"
              onChange={(e) => setlogIn({ email: e.target.value })}
            />
            <AlternateEmailIcon className="icons" />
          </div>
          <div className="label">
            <div>Password</div>
            <input
              required
              placeholder="Password"
              type={showPassword? "text" : "password"}
              onChange={(e) => setlogIn({...logIn, password: e.target.value })}
            />
            {showPassword? <VisibilityIcon onClick={()=>{handleClickShowPassword()}} className="icons"/>: <VisibilityOffIcon onClick={()=>{handleClickShowPassword()}} className="icons"/>}
          </div>
          <button className="submit">Ingresar</button>
          <div className="register">
            ¿Aún no tienes cuenta?
            <span>
              <Link to="/register"> Registrar </Link>
            </span>
          </div>
        </form>
      </section>
    </LogInStyled>
  );
};

export default LogIn;
