import { LOGIN_USER, LOGOUT_USER } from "../actions/login";

export const loginReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload };
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
