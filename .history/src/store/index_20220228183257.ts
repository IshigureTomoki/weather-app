const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)

  return store
}

const store = configureStore()

export default store