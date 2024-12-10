import React, { useState, useEffect, ReactNode } from 'react';
import { setAuthToken, validateToken } from '../../services/authService';
import { AuthContext } from './useAuthContext';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [idUserLogged, setIdUserLogged] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const checkToken = async () => {
  //     setIsLoading(true);
  //     if (token) {
  //       const valid = await validateToken(token);
  //       setIsAuthenticated(valid);
  //     } else {
  //       setIsAuthenticated(false);
  //     }
  //     setIsLoading(false);
  //   };
  //   checkToken();
  // }, [token]);

  const login = (newToken: string, userId: string) => {
    console.log('si entró');
    
    setToken(newToken);
    setAuthToken(newToken);
    setIdUserLogged(userId);
    setIsAuthenticated(true);
    localStorage.setItem('token', newToken);
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setToken(null);
    setAuthToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated, idUserLogged, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};


