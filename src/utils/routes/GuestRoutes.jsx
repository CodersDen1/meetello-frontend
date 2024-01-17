import { TurnedInNotOutlined } from '@mui/icons-material'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'


const GuestRoutes = () => {
   
    const {isAuth} = useSelector((state)=> state.auth)

    return (
    isAuth ? <Navigate to='/rooms' />: <Outlet />
  )
}


export default GuestRoutes;
