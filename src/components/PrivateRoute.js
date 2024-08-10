import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return Element;
};

export default PrivateRoute;
