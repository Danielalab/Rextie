import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/App';
import store from './store';
import './style.css';

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);