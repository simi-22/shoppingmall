import React from 'react';
import { Navigate } from 'react-router-dom';
import Cart from '../Pages/Cart';

const PrivateRoute = ({authenticate}) => {
  return authenticate == true?<Cart/>:<Navigate to="/login"/>
}

export default PrivateRoute