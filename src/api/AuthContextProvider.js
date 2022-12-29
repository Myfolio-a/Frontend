import { createContext, Fragment, useState } from "react";

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

  const ASD = {
    ...state,
    setLoggedUser,
  };

  return (
    <AuthContext.Provider value={ASD}>
      <Fragment>{children}</Fragment>
    </AuthContext.Provider>
  );
}
