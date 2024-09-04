import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const User: React.FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext?.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {userContext.username}</p>
      <button onClick={userContext.logout}>Logout</button>
    </div>
  );
};

export default User;
