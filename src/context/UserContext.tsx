import React, { createContext, useState, ReactNode } from 'react';

interface UserContextType {
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
  username: string;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const login = (name: string) => {
    setIsAuthenticated(true);
    setUsername(name);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </UserContext.Provider>
  );
};
