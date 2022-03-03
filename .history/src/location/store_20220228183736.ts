import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import locationSfrom './reducer'
import {locationSaga} from './saga'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(locationSaga)

  return store
}

const store = configureStore()

export default store