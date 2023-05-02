import counter, { counterSaga } from "./counter";
import posts, { postsSaga } from "./posts";

import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ counter, posts });
export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;
