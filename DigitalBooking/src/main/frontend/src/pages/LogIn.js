import React , {useState} from "react";
import Register from "./Register";


const LogIn= ({ userInfo }) => {
const [logIn, setLogIn] = useState({ email: "", password: "" });

 
  return (

    <form>
      <input placeholder="Email" type="email" 
      onChange={(e) => setLogIn({...LogIn, email: e.target.value})}/>

      <input placeholder="Password" type="password"
       onChange={(e) => setLogIn({...LogIn, password: e.target.value})}/>
      

      <button onClick label ="submit"> Registrar </button>

      <span>Aun no Tienes Cuenta? <button onClick label ="submit"> Registrar</button> </span>
    
    </form>
  );
};

export default LogIn;
