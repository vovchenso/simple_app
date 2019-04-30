import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";

const initialState = {};

const middlewares = [];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
