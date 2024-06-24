// Create a context for authentication to manage the authentication state and actions.
import { createContext, useContext, useState } from "react";

// Create Auth Context
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //children represent the components inside auth-provider
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  const login = (token, user) => {
    setAuthState({
      isAuthenticated: true,
      user,
      token,
    });
  };
  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };
  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
