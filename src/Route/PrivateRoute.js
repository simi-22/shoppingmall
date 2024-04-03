import React from 'react';
import { Navigate } from 'react-router-dom';
import Cart from '../Pages/Cart';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const authenticate = useSelector(state=>state.auth.authenticate)
  return authenticate ? <Cart/>:<Navigate to="/login"/>
}

export default PrivateRoute