import React from 'react';
import Login from'../containers/formLogin'
import App from '../containers/app';

const AppRender = ({initialPage, dataReniec, loginUser, dataFirebaseUser, getReniecData, user}) => {
  switch (initialPage) {
    case 'homePage':
      return <App user={user} dataReniec={dataReniec}/>;
    case 'login':
      return <Login loginUser={loginUser} dataFirebaseUser={dataFirebaseUser} getReniecData={getReniecData} dataReniec={dataReniec}/>;
    default:
      return null;
  }
  return null;
}

export default AppRender;