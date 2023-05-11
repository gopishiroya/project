import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducers from "./Reducers/Reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middleware));
