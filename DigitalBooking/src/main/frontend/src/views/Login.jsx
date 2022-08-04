import React from "react";
import Signup from "./Signup";

const [logIn, setLogIn] = useState({ email: "", password: "" });

const Login = () => {

 
  return (

    <form>
      <input placeholder="Email" type="email" 
      onChange={(e) => setLogIn({...Login, email: e.target.value})}/>

      <input placeholder="Password" type="password"
       onChange={(e) => setLogIn({...Login, password: e.target.value})}/>
      

      <button onClick={()=>Handlerview("HomePage")} label ="submit"> Registrar </button>

      <span>Aun no Tienes Cuenta? <button onClick={()=> setView(<signup/>)}label ="submit"> Signup </button> </span>
    
    </form>
  );
};

export default Login;
