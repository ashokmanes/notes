import { LOGIN_USER } from "./loginActions";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoggedIn: action.payload };

    default:
        return state;
  }
};
