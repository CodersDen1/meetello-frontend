import { TurnedInNotOutlined } from '@mui/icons-material'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



const GuestRoutes = () => {
   let isAuth=false
  
    return (
    isAuth ? <Navigate to='/rooms' />: <Outlet />
  )
}


export default GuestRoutes;
