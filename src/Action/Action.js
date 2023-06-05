import * as types from "./ActionTypes";
import { firestore } from "../Firebase/FIrebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const contect_put_data_success = (contect) => ({
  type: types.CONTECT_PUT_DATA_SUCCESS,
  payload: contect,
});

const contect_get_data_success = (contect) => ({
  type: types.CONTECT_GET_DATA_SUCCESS,
  payload: contect
});

export const contectPutDataInitaiate = (name, number, email, message) => {
  return function (dispatch) {
    addDoc(collection(firestore, "contect"), {
      name,
      number,
      email,
      message,
    })
      .then((user) => dispatch(contect_put_data_success(user)))
      .catch((error) => dispatch(contect_put_data_success(error)));
  };
};

export const contectGetData = () => {
  return async function (dispatch) {
    const postCollectionRef = collection(firestore, "contect");
    const result = await getDocs(postCollectionRef);
    dispatch(contect_get_data_success(result.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
  }
}