import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import createSagaMiddleware from 'redux-saga'
import locationState from './reducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(locationState, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)

  return store
}

const store = configureStore()

export default store