import * as types from "../Action/ActionTypes";

const initialState = {
  contect: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONTECT_PUT_DATA_SUCCESS:
      return {
        ...state,
        contect: action.payload,
      };
    case types.CONTECT_GET_DATA_SUCCESS:
      return {
        ...state,
        contect: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
