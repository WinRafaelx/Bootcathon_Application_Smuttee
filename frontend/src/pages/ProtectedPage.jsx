import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const ProtectedPage = () => {
  const { auth, logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {auth.user.username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProtectedPage;
