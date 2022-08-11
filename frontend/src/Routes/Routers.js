import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../components/pages/Register/Register";
import LogIn from "../components/pages/LogIn/LogIn.js";
import Home from "../components/pages/home/Home";
import ProtectedRoutes from "../components/protectedRoutes/ProtectedRoutes";
import HomeUser from "../components/pages/homeUser/HomeUser";


const Routers = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ email: " ", password: " ", name: "", surname:"" });
  const showValues = (values) => {
   setUser({email: values.email, password: values.password, surname:values.surname, userName: values.name});
  };
  const logInProps = {
    user,
    setIsLogged
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn {...logInProps} />} />
        <Route path="/register" element={<Register showValues={showValues} />} />
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/home" element={<HomeUser user ={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
