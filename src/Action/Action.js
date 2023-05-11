import * as types from "./ActionTypes";
import { app } from "../Firebase/FIrebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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

export const registerInitaiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => dispatch(registerSuccess(user)))
      .catch((error) => dispatch(registerFail(error.message)));
  };
};
