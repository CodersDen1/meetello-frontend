
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';





const ProtectedRoutes = () => {
  const {user,isAuth} = useSelector((state)=>state.auth)
  return (
    !isAuth ? <Navigate to='/' /> :
     isAuth && !user.activated?<Navigate to='activated'/> :<Outlet />
    
  )
}

export default ProtectedRoutes