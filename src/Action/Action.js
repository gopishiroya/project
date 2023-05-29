import * as types from "./ActionTypes";
import { app, firestore, storage } from "../Firebase/FIrebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection, getDocs} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

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

const put_data = () => ({
  type: types.PUT_DATA,
});

const put_data_storage = () => ({
  type: types.STORAGE,
});

const contect_put_data = () => ({
  type: types.CONTECT_PUT_DATA
})


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

export const PutDataInitaiate = (name, email, password, number) => {
  return function (dispatch) {
    addDoc(collection(firestore, "user"), {
      name, email, password, number
    })
      .then(() => dispatch(put_data))
      .catch((error) => dispatch(put_data(error)));
  };
};


export const StorageInitaiate = (name, price, category, pic) => {
  return async function (dispatch) {
    const imageRef = ref(storage, `uploads/images/${pic.name}`);
    const uploadResult = await uploadBytes(imageRef, pic);
    return await addDoc(collection(firestore, "products"), {
      name,
      price,
      category,
      imageURL: uploadResult.ref.fullPath,
    })
      .then(() => dispatch(put_data_storage))
      .catch((error) => dispatch(put_data_storage(error)));
  };
};

export const contectPutDataInitaiate = (name, number, email, message) => {
  return function (dispatch) {
    addDoc(collection(firestore, "contect"), {
      name, number, email, message
    })
      .then(() => dispatch(contect_put_data))
      .catch((error) => dispatch(contect_put_data(error)));
  }
}