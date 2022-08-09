import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = ({isLogged}) => {
  if(isLogged){
    return <Outlet/>
  } else {
    return <Navigate to = "/register"/>
  }
}

export default ProtectedRoutes