import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Home from "../pages/home";
import ProtectedRoutes from "../components/protectedRoutes/ProtectedRoutes";
import HomeUser from "../pages/homeUser";


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
