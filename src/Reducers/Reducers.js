import { combineReducers } from "redux";
import userReducer from "./Index"

const rootReducers = combineReducers({
    user: userReducer
})

export default rootReducers