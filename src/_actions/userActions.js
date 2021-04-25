import { userConstants } from "../_constants";
import api from "../services";

export const userLoggedIn = user => ({type : USER_LOGGED_IN, user})

export const login = (credentials) => (dispatch) =>
  api.user.login(credentials).then((user) => {
    localStorage.tokens = user.auth_token;
    dispatch(userLoggedIn(user));
  });
