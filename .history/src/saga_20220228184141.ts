export default function* rootSaga() {
  yield all([...countrySaga])
}