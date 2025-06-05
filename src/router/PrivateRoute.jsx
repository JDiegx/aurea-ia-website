import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenValid } from '../services/authServices';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!isTokenValid(token)) {
    // Si no hay token o está expirado, borrar token y redirigir a login
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
