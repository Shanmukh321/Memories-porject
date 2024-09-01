import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {applyMiddleware , compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import {thunk} from 'redux-thunk';
import reducers from './reducers';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found");
}