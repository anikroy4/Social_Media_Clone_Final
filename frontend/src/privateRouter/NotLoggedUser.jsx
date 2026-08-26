import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const NotLoggedUser = () => {
  const {userInfo} = useSelector((state) => state?.registration);
  return userInfo ? <Navigate to='/' /> : <Outlet />
}

export default NotLoggedUser