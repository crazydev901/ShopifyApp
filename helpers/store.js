import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../redux/reducer";

const defaultState = {
  items: []
};

export function initializeStore(initialState = defaultState) {
  return createStore(
    rootReducer,
    defaultState,
    applyMiddleware(thunkMiddleware)
  );
}
