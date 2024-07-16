import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
  });

  const login = async (username, password) => {
    const response = await axios.post('http://localhost:8000/api/workshop_admin/login', { username, password });
    setAuth({ isAuthenticated: true, user: response.data.user });
  };

  const logout = async () => {
    await axios.post('http://localhost:8000/api/workshop_admin/logout');
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
