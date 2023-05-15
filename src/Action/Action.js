import * as types from "./ActionTypes";
import { app } from "../Firebase/FIrebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const registerInitaiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => dispatch(registerSuccess(user)))
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

export const loginInitaiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => dispatch(loginSuccess(user)))
      .catch((error) => dispatch(loginFail(error.message)));
  };
};
