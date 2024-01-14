
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const isAuth=true;

const user ={
    name : "Adbhut Mishra",
    usernname : "akki123",
    activated : true
  }


const ProtectedRoutes = () => {
  return (
    !isAuth ? <Navigate to='/' /> :
     isAuth && !user.activated?<Navigate to='activated'/> :<Outlet />
    
  )
}

export default ProtectedRoutes