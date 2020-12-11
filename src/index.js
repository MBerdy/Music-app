import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mainPageReducer from './store/reducers/mainPage';
import artistPageReducer from './store/reducers/artistPage';
import searchPageReducer from './store/reducers/searchPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  music: mainPageReducer,
  artist: artistPageReducer,
  search: searchPageReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
