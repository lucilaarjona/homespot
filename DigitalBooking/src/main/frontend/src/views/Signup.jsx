import React from "react";
import { useState } from "react";
 const [name,setName]=useState("");
 const [surName,setSurName]=useState(""); 
 const [email,setEmail]=useState("");
 const [pasword,setPassword]=useState("");
 const [confirmPasword,setConfirmPassword]=useState("");

const Signup = () =>{
return (

    <form>
        <input placeholder ="Name"type="text"
        onChange={(e)=> setName(e.target.value)}/>

        <input placeholder ="SurName"type= "text"
         onChange={(e)=> setSurName(e.target.value)}/>

        <input placeholder ="Email"type="email"
        onChange={(e)=> setEmail(e.target.value)}/>


        <input placeholder ="Password"type="password"/>
        onChange={(e)=> setPassword(e.target.value)}/>


        <input placeholder ="ConfirmPassword"type="pasword"/>
        onChange={(e)=> setConfirmPassword(e.target.value)}


        <button input ="submit"> Crear Cuenta </button>
    </form>
)

}

export default Signup