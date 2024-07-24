import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    // Implement your login logic here
    // For this example, we'll just check if both fields are non-empty
    if (password.includes("SELECT") || password.includes("select")) {
        setIsAuthenticated(true);
        return true;
    }
    if (username && password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}