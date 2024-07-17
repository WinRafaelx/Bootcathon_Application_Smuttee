import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/admin/login" replace />;
  }

  // Render children if authenticated
  return children;
};

export default ProtectedRoute;