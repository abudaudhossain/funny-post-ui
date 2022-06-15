import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UseUser from '../hooks/UseUser'

export default function PrivateOutlet() {
    const { user } = UseUser();
  
    return (user?.sessionStatus === 'Active') ? <Outlet /> : <Navigate to='/signin' />
}
