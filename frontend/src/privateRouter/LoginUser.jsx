import React from 'react'
import Login from '../pages/login/Login';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const LoginUser = () => {
    const {userInfo} = useSelector((state) => state?.registration);

  return userInfo ? <Outlet /> : <Login />
}

export default LoginUser