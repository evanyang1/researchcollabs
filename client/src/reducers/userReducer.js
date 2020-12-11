export const UPDATE_USER = "UPDATE_USER";
export const USER_ERROR = "USER_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return { ...state, user: payload };
    case USER_ERROR:
      return { ...state, errorMsg: payload };
    case USER_LOGOUT:
      state = { user: { name: "" } };
      return state;
    default:
      return state;
  }
};
