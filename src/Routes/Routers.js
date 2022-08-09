import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../components/pages/Register/Register';
import LogIn from "../components/pages/LogIn/LogIn.js";
import Home from "../components/pages/home/Home"
import ProtectedRoutes from '../components/protectedRoutes/ProtectedRoutes';
import HomeUser from '../components/pages/homeUser/HomeUser'



const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/logIn" element={<LogIn/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path='/home' element = {<HomeUser/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers