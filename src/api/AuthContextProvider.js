import { createContext, Fragment, useState } from "react";
import React from "react";

export const AuthContext = createContext();

const initialState = {
  loggedUser: null,
  loggedIn: false,
};

export function AuthContextProvider({ children }) {
  const [state, setState] = useState(initialState);

  const setLoggedUser = (data) => {
    setState((prevState) => ({
      ...prevState,
      loggedUser: data,
    }));
  };

  const contextValue = {
    ...state,
    setLoggedUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Fragment>{children}</Fragment>
    </AuthContext.Provider>
  );
}
