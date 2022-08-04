import { createContext, useContext, useReducer } from "react";

const loginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const updateHandler = (state, { type, payload }) => {
    switch (type) {
      case "LOGIN":
        return { ...state, isLogin: localStorage.getItem("token", payload) };

      case "LOGOUT":
        localStorage.removeItem("token");
        return { ...state, isLogin: null, error: false };

      case "ERROR":
        return { ...state, error: true };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(updateHandler, {
    isLogin: localStorage.getItem("token"),
    error: false,
  });

  return (
    <loginContext.Provider value={{ state, dispatch }}>
      {children}
    </loginContext.Provider>
  );
};

const useLoginContext = () => useContext(loginContext);

export { LoginContextProvider, useLoginContext };
