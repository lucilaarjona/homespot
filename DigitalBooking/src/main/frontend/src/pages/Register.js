import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({userRegistry}) => {
const [name,setName]=useState("");
 const [surName,setSurName]=useState(""); 
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [confirmPasword,setConfirmPassword]=useState("");  
 const navigate = useNavigate();

 const onSubmitHandler = (e) => {
    e.preventDefault(); 
    let value = {
      name,
      email,
      password
    };
    userRegistry(value);
    e.target.reset()
  }


return (
    <form onSubmi= {(e)=> onSubmitHandler(e)}>
        <input placeholder ="Name"type="text"
        onChange={(e)=> setName(e.target.value)}/>

        <input placeholder ="SurName"type= "text"
         onChange={(e)=> setSurName(e.target.value)}/>

        <input placeholder ="Email"type="email"
        onChange={(e)=> setEmail(e.target.value)}/>


        <input placeholder ="Password"type="password"/>
        onChange={(e)=> setPassword(e.target.value)}


        <input placeholder ="ConfirmPassword"type="pasword"/>
        onChange={(e)=> setConfirmPassword(e.target.value)}


        <button input ="submit"> Crear Cuenta </button>
        <button className="buttonLogIn" onClick={() => navigate("/logIn")}>Crear Cuenta </button>
  
    </form>
)
}


export default Register