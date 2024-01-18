// authActions.js
import * as types from "./actionTypes";

export const login = (userData) => ({
  type: types.LOGIN,
  payload: userData,
});

export const signup = (userData) => ({
  type: types.SIGNUP,
  payload: userData,
});

export const logout = () => ({
  type: types.LOGOUT,
});
