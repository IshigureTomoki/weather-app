import { all } from "redux-saga/effects";
import { locationSaga } from "./location/saga";

export default function* rootSaga() {
  yield all([...locationSaga])
}