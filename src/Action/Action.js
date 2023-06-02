import * as types from "./ActionTypes";
import { firestore } from "../Firebase/FIrebase";
import { addDoc, collection} from "firebase/firestore";

const contect_put_data_start = () => ({
  type: types.CONTECT_PUT_DATA_START
})

const contect_put_data_success = () => ({
  type: types.CONTECT_PUT_DATA_SUCCESS
})

const contect_put_data_fail = () => ({
  type: types.CONTECT_PUT_DATA_FAIL
})

export const contectPutDataInitaiate = (name, number, email, message) => {
  return function (dispatch) {
    dispatch(contect_put_data_start())
    addDoc(collection(firestore, "contect"), {
      name, number, email, message
    })
      .then((user) => dispatch(contect_put_data_success(user)))
      .catch((error) => dispatch(contect_put_data_fail(error)));
  }
}