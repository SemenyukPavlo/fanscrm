import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  if (!userContext) {
    return <div>Context not available</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userContext.login(username);
    navigate('/user');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
