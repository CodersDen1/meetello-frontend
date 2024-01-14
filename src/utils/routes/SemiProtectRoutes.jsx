import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

 const SemiProtectRoutes = () => {

  const isAuth = true;
   
  const user ={
    name : "Adbhut Mishra",
    usernname : "akki123",
    activated : false
  }

  return (
    !isAuth?<Navigate to='/'/>: isAuth && !user.activated ? <Outlet /> : <Navigate to='/rooms'/> 
  )
}


export default SemiProtectRoutes;