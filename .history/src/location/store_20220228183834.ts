import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import {locationSaga} from './saga'
import locationState from './reducer';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(locationState, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(locationSaga)

  return store
}

const store = configureStore()

export default store