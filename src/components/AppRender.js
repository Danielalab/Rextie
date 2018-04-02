import React from 'react';
import Login from'./Login'
import App from '../containers/app';

const AppRender = ({initialPage, loginUser, dataFirebaseUser, user}) => {
  switch (initialPage) {
    case 'homePage':
      return <App user={user}/>;
    case 'login':
      return <Login loginUser={loginUser} dataFirebaseUser={dataFirebaseUser}/>;
    default:
      return null;
  }
  return null;
}

export default AppRender;