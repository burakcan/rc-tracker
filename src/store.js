import 'babel-polyfill';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import reducers from 'reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    createSagaMiddleware(rootSaga)
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default createStoreWithMiddleware(reducers);
