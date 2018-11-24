import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// http://extension.remotedev.io/#usage
const store = createStore(reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools));

sagaMiddleware.run(watcherSaga);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));