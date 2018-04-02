import React from 'react';
import Login from'./Login'
import App from '../containers/app';

const AppRender = ({initialPage, loginUser}) => {
  switch (initialPage) {
    case 'homePage':
      return <App/>;
    case 'login':
      return <Login loginUser={loginUser}/>;
    default:
      return null;
  }
  return null;
}

export default AppRender;