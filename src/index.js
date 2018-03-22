import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './containers/App';
import store from './store';
<<<<<<< HEAD
import './style.css';
=======
>>>>>>> 608f13f4a29053a57897d608a991f05aaf530ba9

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);