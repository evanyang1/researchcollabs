import React, { createContext, useReducer, useEffect } from "react";
import { userReducer } from "../reducers/userReducer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UPDATE_USER, USER_LOGOUT, USER_ERROR } from "../reducers/userReducer";

const UserContext = createContext();

//axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${process.env.PORT}`;
//console.log(axios.defaults.baseURL)

const initialState = {
  user: { name: "" },
};

const UserProvider = (props) => {
  const history = useHistory();
  const [userState, dispatch] = useReducer(userReducer, initialState);

  const serverURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : process.env.serverURL;

  const actions = {
    signup: async (email, password) => {
      try {
        const res = await axios.post(`${serverURL}/user/signup`, {
          email,
          password,
        });
        dispatch({ type: UPDATE_USER, payload: res.data });
        history.push("/home");
      } catch (err) {
        console.error(err);
        if (err.message.includes("400")) {
          dispatch({
            type: USER_ERROR,
            payload: "User already exists.",
          });
        }
        if (err.message.includes("500")) {
          dispatch({
            type: USER_ERROR,
            payload: "Server error",
          });
        }
      }
    },
    login: async (email, password) => {
      try {
        const res = await axios.post(`/user/login`, {
          email,
          password,
        });
        const data = res.data;
        if (res && (res.status === 200 || res.status === 201)) {
          await actions.fetchUser();
          history.push("/home");
        }
        dispatch({ type: UPDATE_USER, payload: data });
        return res;
      } catch (err) {
        let errorMsg;
        if (err.message.includes("400")) errorMsg = "Invalid Credentials";
        if (err.message.includes("404")) errorMsg = "User not found";
        if (err.message.includes("500")) errorMsg = "Server error";

        dispatch({
          type: USER_ERROR,
          payload: errorMsg,
        });
      }
    },
    fetchUser: async () => {
      try {
        const res = await axios.get(`${serverURL}/user/get_current_user`);

        if (res.status === 200) {
          const data = await res.data;
          dispatch({ type: UPDATE_USER, payload: data });
          history.push("/home");
        } else {
          history.push("/");
        }
      } catch (err) {
        history.push("/");
      }
    },
    logout: async () => {
      try {
        await axios.get(`/user/logout`);
        history.push("/");
        dispatch({ type: USER_LOGOUT });
      } catch (err) {
        console.log(err.message);
        dispatch({
          type: USER_ERROR,
          payload: "Logout Error",
        });
      }
    },
  };

  useEffect(() => {
    actions.fetchUser();
  }, []);

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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
