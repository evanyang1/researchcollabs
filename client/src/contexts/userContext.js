import React, { createContext, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const UserContext = createContext();

const initialState = {
  user: { name: "" },
};

const UserProvider = (props) => {
  const history = useHistory();
  const [userState, dispatch] = useReducer(userReducer, initialState);
  const actions = {};

  useEffect(() => {
    let timer;
    if (userState.errorMsg) {
      timer = setTimeout(() => {
        actions.clearErrors();
      }, 3000);
    }
    return () => clearTimeout(timer);
  });

  return (
    <UserContext.Provider
      value={{
        userState,
        userActions: actions,
        socket,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };