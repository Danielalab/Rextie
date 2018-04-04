import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { firebaseApp } from './firebase';
import AppRender from './containers/appRender';
import store from './store';
import './css/main.css';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
    <AppRender/>
  </Provider>,
  document.getElementById('root')
);