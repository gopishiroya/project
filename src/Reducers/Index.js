import * as types from "../Action/ActionTypes";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const userReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case types.CONTECT_PUT_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case types.CONTECT_PUT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case types.CONTECT_PUT_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
